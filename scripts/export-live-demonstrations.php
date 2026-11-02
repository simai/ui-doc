#!/usr/bin/env php
<?php
declare(strict_types=1);
require_once __DIR__.'/site-base.php';
$root=dirname(__DIR__);$build=$root.'/build_production';$base=ui_doc_site_base($root);
$lock=json_decode(file_get_contents($root.'/simai-framework.lock.json'),true,512,JSON_THROW_ON_ERROR);
$core=$base.'_docara/vendor/simai-framework/runtime/'.$lock['runtime']['ui']['commit'].'/distr/';
$page=file_get_contents($build.'/ru/index.html');
preg_match('/<link[^>]+href="([^"]+)"[^>]+data-docara-framework-asset="simai.framework.core.css"/', $page, $css);
if (!isset($css[1])) throw new RuntimeException('Core CSS missing from built document');
$files=[]; $inputs=[];
$ids=['smart-composition','layout-inspector','smart-button','product-block','composition-recipe','page-editor'];
foreach ($ids as $id) {
    $source=$root.'/examples/guide/'.$id;
    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source)) as $input) if($input->isFile()) $inputs[substr($input->getPathname(),strlen($root)+1)]=hash_file('sha256',$input->getPathname());
    $target=$build.'/demos/guide/'.$id;
    if (!is_dir($target)) mkdir($target,0775,true);
    if (is_dir($source.'/assets')) foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source.'/assets')) as $f) {
        if (!$f->isFile()) continue;
        $dest=$target.'/'.substr($f->getPathname(),strlen($source)+1);
        if(!is_dir(dirname($dest)))mkdir(dirname($dest),0775,true);
        copy($f->getPathname(),$dest);
    }
    if ($id === 'composition-recipe') {
        $fixture=$root.'/assets/examples/composition/header-switch.json';
        copy($fixture,$target.'/header-switch.json');
        $inputs[substr($fixture,strlen($root)+1)]=hash_file('sha256',$fixture);
    }
    $body=file_get_contents($source.'/index.html');
    $js=is_file($source.'/index.js')?'<script src="index.js" defer></script>':'';
    if ($js!=='')copy($source.'/index.js',$target.'/index.js');
    $html='<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>SIMAI Framework — '.$id.'</title>'

    .'<link rel="stylesheet" href="'.$css[1].'">'
    .'<script>window.sfPath='.json_encode($core).';window.sfSmartPath='.json_encode($base.'_docara/framework-runtime',JSON_UNESCAPED_SLASHES).';window.SF_BOOT_CONFIG={theme:false,icons:{enabled:false,accumulate:false},smart:{base:true},minified:false};</script>'
    .'<script src="'.$core.'core/js/core.js" defer></script>'.$js
    .'<style>body{padding:16px;margin:0;min-height:0;overflow-wrap:anywhere}project-counter,project-order,project-product,project-quantity,project-greeting{display:block}pre{max-width:100%;overflow:auto}textarea{box-sizing:border-box}button{cursor:pointer}iframe{box-sizing:border-box}</style></head><body>'.$body
    .'<script>function syncTheme(){if(parent===window)return;try{document.documentElement.dir=parent.document.documentElement.dir||"ltr";document.documentElement.classList.toggle("theme-dark",parent.document.documentElement.classList.contains("theme-dark"));document.documentElement.classList.toggle("theme-light",!parent.document.documentElement.classList.contains("theme-dark"));}catch(e){}}syncTheme();try{if(parent!==window)new MutationObserver(syncTheme).observe(parent.document.documentElement,{attributes:true,attributeFilter:["class","dir"]});}catch(e){}</script>'
    .'</body></html>';
    file_put_contents($target.'/index.html',$html);
    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($target)) as $f) if($f->isFile()) $files[]=['path'=>substr($f->getPathname(),strlen($build)+1),'sha256'=>hash_file('sha256',$f->getPathname())];
}
// The administrative interface on the home page (examples/home/admin): a
// standalone page rather than a sandboxed example frame, because it runs its
// own data host, reads its data files and opens records in place. Its
// components come from the product package the site pins (the lock's
// package_projections), so the page declares that package to the Loader the
// way the documentation pages do. Links inside it never navigate (index.js).
// The English home page shows the same demonstrations in English: the export
// writes a second copy under demos/home/en/, its text taken from
// examples/home/i18n/en.json. A string is matched whole -- a JSON value, a part
// of a JavaScript literal between ${...}, an HTML text or attribute part -- and a
// Russian string the dictionary does not hold stops the export.
$homeTranslation=$root.'/examples/home/i18n/en.json';
$inputs[substr($homeTranslation,strlen($root)+1)]=hash_file('sha256',$homeTranslation);
$dictionary=json_decode(file_get_contents($homeTranslation),true,512,JSON_THROW_ON_ERROR);
$untranslated=[];
$translate=static function(string $text) use ($dictionary,&$untranslated): string {
    $core=trim($text);
    if ($core==='' || preg_match('/[\p{Cyrillic}№]/u',$core)!==1 || in_array($core,$dictionary['keep'],true)) return $text;
    $lead=substr($text,0,strlen($text)-strlen(ltrim($text)));$trail=substr($text,strlen(rtrim($text)));
    if (array_key_exists($core,$dictionary['strings'])) return $lead.$dictionary['strings'][$core].$trail;
    foreach ($dictionary['patterns'] as $pattern) {
        if (preg_match('/'.$pattern['match'].'/u',$core,$m)!==1 || !isset($pattern['words'][$m[1]])) continue;
        $rest=substr($core,strlen($m[0]));
        if ($rest!=='' && !array_key_exists($rest,$dictionary['strings'])) break;
        return $lead.str_replace(['{1}','{2}'],[$pattern['words'][$m[1]],$m[2]],$pattern['replace']).($rest===''?'':$dictionary['strings'][$rest]).$trail;
    }
    $untranslated[$core]=true;
    return $text;
};
$translateParts=static fn(string $text): string=>implode('',array_map(
    static fn(string $part): string=>str_starts_with($part,'${')?$part:$translate($part),
    preg_split('/(\$\{[^}]*\})/',$text,-1,PREG_SPLIT_DELIM_CAPTURE)));
$translateFile=static function(string $path,string $content) use ($translate,$translateParts,$dictionary): string {
    $extension=pathinfo($path,PATHINFO_EXTENSION);
    if ($extension==='json') {
        $walk=static function($value) use (&$walk,$translate){
            if (is_array($value)) return array_map($walk,$value);
            return is_string($value)?$translate($value):$value;
        };
        $data=$walk(json_decode($content,true,512,JSON_THROW_ON_ERROR));
        // Values other than text, such as the person's language that the admin
        // menu gives the page.
        foreach ($dictionary['values'][$path] ?? [] as $key=>$value) {
            $node=&$data;
            foreach (explode('.',$key) as $step) {
                if (!is_array($node) || !array_key_exists($step,$node)) throw new RuntimeException('Home demonstrations: '.$path.' has no '.$key);
                $node=&$node[$step];
            }
            $node=$value;
            unset($node);
        }
        return json_encode($data,JSON_UNESCAPED_SLASHES|JSON_UNESCAPED_UNICODE);
    }
    if ($extension==='js') return preg_replace_callback('/`((?:[^`\\\\]|\\\\.)*)`|\'((?:[^\'\\\\\n]|\\\\.)*)\'|"((?:[^"\\\\\n]|\\\\.)*)"/',
        static function(array $m) use ($translateParts): string { $quote=$m[0][0]; return $quote.$translateParts(substr($m[0],1,-1)).$quote; },$content);
    if ($extension==='html') {
        $parts=static fn(string $value): string=>implode('|',array_map(static function(string $part) use ($translate): string {
            return preg_match('/\A([a-z-]+:)(.*)\z/s',$part,$m)===1?$m[1].$translate($m[2]):$translate($part);
        },explode('|',$value)));
        $content=preg_replace('/<!--.*?-->/s','',$content);
        return preg_replace_callback('/>([^<>]+)<|="([^"]*)"/',static fn(array $m): string=>isset($m[2])?'="'.$parts($m[2]).'"':'>'.$parts($m[1]).'<',$content);
    }
    return $content;
};

// The administrative interface on the home page (examples/home/admin): a
// standalone page rather than a sandboxed example frame, because it runs its
// own data host, reads its data files and opens records in place. Its
// components come from the product package the site pins (the lock's
// package_projections), so the page declares that package to the Loader the
// way the documentation pages do. Links inside it never navigate (index.js).
// The home page showcase (examples/home/showcase): tabs of the admin, the chat
// and the editor. The admin is the page above in a frame; the chat and the
// editor come from the same product package and are made when their tab opens.
$proMount=$lock['package_projections']['pro']['mount'] ?? null;
if (!is_string($proMount) || preg_match('~\A_docara/framework-packages/pro/[0-9a-f]{40}\z~', $proMount) !== 1) throw new RuntimeException('Admin demonstration: package mount missing from the lock');
// Icons from the runtime's own icon font: the menu and the list use many more
// glyphs than the documentation's subset carries.
$adminBoot=['theme'=>false,'icons'=>['enabled'=>true,'accumulate'=>false],'smart'=>['base'=>true],'minified'=>false,'packages'=>['pro'=>['base'=>$base.$proMount.'/smart']]];
$themeFirst='<script>(function(){var d=window.matchMedia("(prefers-color-scheme: dark)").matches;try{if(parent!==window)d=parent.document.documentElement.classList.contains("theme-dark");}catch(e){}document.documentElement.classList.toggle("theme-dark",d);document.documentElement.classList.toggle("theme-light",!d);})();</script>';
$themeSync='<script>function syncTheme(){if(parent===window)return;try{var d=parent.document.documentElement.classList.contains("theme-dark");document.documentElement.classList.toggle("theme-dark",d);document.documentElement.classList.toggle("theme-light",!d);}catch(e){}}try{if(parent!==window)new MutationObserver(syncTheme).observe(parent.document.documentElement,{attributes:true,attributeFilter:["class"]});}catch(e){}</script>';
$boot='<script>window.sfPath='.json_encode($core,JSON_UNESCAPED_SLASHES).';window.sfSmartPath='.json_encode($base.'_docara/framework-runtime',JSON_UNESCAPED_SLASHES).';window.SF_BOOT_CONFIG='.json_encode($adminBoot,JSON_UNESCAPED_SLASHES).';</script>';
// The English home links the same addresses as the Russian one, so a Russian
// page moves to its English copy when the page around it is English, or when
// it was opened from an English page.
$toEnglish='<script>(function(){var l="";try{if(parent!==window)l=parent.document.documentElement.lang;}catch(e){}if(!l&&document.referrer)try{var r=new URL(document.referrer);if(r.origin===location.origin&&/^\\/en(\\/|$)/.test(r.pathname))l="en";}catch(e){}if(l==="en")location.replace(location.pathname.replace(/\\/demos\\/home\\//,"/demos/home/en/")+location.search+location.hash);})();</script>';
$homeDemos=[
    'admin'=>['html'=>'class="max-h-screen h-full" data-sf-density="compact"','title'=>'Административный интерфейс','modules'=>['index.js','demo.js'],'body'=>'class="flex h-full"'],
    'showcase'=>['html'=>'','title'=>'Что можно собрать','modules'=>['index.js'],'body'=>''],
];
foreach (['ru'=>'','en'=>'en/'] as $language=>$prefix) {
    $tr=$language==='ru'?static fn(string $path,string $content): string=>$content:$translateFile;
    foreach ($homeDemos as $name=>$demo) {
        $source=$root.'/examples/home/'.$name;
        $target=$build.'/demos/home/'.$prefix.$name;
        if (!is_dir($target)) mkdir($target,0775,true);
        foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($source, FilesystemIterator::SKIP_DOTS)) as $input) {
            if (!$input->isFile()) continue;
            $relative=substr($input->getPathname(),strlen($source)+1);
            $inputs[substr($input->getPathname(),strlen($root)+1)]=hash_file('sha256',$input->getPathname());
            if ($relative==='index.html') continue;
            $dest=$target.'/'.$relative;
            if(!is_dir(dirname($dest)))mkdir(dirname($dest),0775,true);
            file_put_contents($dest,$tr($name.'/'.$relative,file_get_contents($input->getPathname())));
        }
        $title=$language==='ru'?$demo['title']:$translate($demo['title']);
        $html='<!doctype html><html lang="'.$language.'"'.($demo['html']!==''?' '.$demo['html']:'').'><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>'.$title.'</title>'
            .($language==='ru'?$toEnglish:'')
            .'<link rel="stylesheet" href="'.$css[1].'"><link rel="stylesheet" href="index.css">'
            .$themeFirst.$boot
            .'<script src="'.$core.'core/js/core.js" defer></script>'
            .implode('',array_map(static fn(string $module): string=>'<script type="module" src="'.$module.'"></script>',$demo['modules'])).'</head>'
            .'<body'.($demo['body']!==''?' '.$demo['body']:'').'>'.$tr('index.html',file_get_contents($source.'/index.html'))
            .$themeSync
            .'</body></html>';
        file_put_contents($target.'/index.html',$html);
        foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($target, FilesystemIterator::SKIP_DOTS)) as $f) if($f->isFile()) $files[]=['path'=>substr($f->getPathname(),strlen($build)+1),'sha256'=>hash_file('sha256',$f->getPathname())];
    }
}
if ($untranslated!==[]) throw new RuntimeException('Home demonstrations: no English text for '.implode(' | ',array_keys($untranslated)));

$recipeFixture=$root.'/assets/examples/composition/header-switch.json';
$recipeTarget=$build.'/demos/guide/composition-recipe/header-switch.json';
if(!is_dir(dirname($recipeTarget)))mkdir(dirname($recipeTarget),0775,true);
copy($recipeFixture,$recipeTarget);
$recipeRelative=substr($recipeTarget,strlen($build)+1);
if (!in_array($recipeRelative,array_column($files,'path'),true)) {
    $files[]=['path'=>substr($recipeTarget,strlen($build)+1),'sha256'=>hash_file('sha256',$recipeTarget)];
}
$inputs[substr($recipeFixture,strlen($root)+1)]=hash_file('sha256',$recipeFixture);
usort($files,static fn($a,$b)=>strcmp($a['path'],$b['path']));ksort($inputs);
file_put_contents($build.'.docara/standalone-examples.json',json_encode(['schema'=>'docara.standalone_examples.v1','generator_sha256'=>hash_file('sha256',__FILE__),'inputs_sha256'=>hash('sha256',json_encode($inputs)),'files'=>$files],JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES)."\n");
echo json_encode(['status'=>'pass','live_demonstrations'=>count($ids)+1,'verified_fixtures'=>1])."\n";
