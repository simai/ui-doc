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
$adminSource=$root.'/examples/home/admin';
$adminTarget=$build.'/demos/home/admin';
$larenaMount=$lock['package_projections']['larena']['mount'] ?? null;
if (!is_string($larenaMount) || preg_match('~\A_docara/framework-packages/larena/[0-9a-f]{40}\z~', $larenaMount) !== 1) throw new RuntimeException('Admin demonstration: package mount missing from the lock');
if (!is_dir($adminTarget)) mkdir($adminTarget,0775,true);
foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($adminSource, FilesystemIterator::SKIP_DOTS)) as $input) {
    if (!$input->isFile()) continue;
    $relative=substr($input->getPathname(),strlen($adminSource)+1);
    $inputs[substr($input->getPathname(),strlen($root)+1)]=hash_file('sha256',$input->getPathname());
    if ($relative==='index.html') continue;
    $dest=$adminTarget.'/'.$relative;
    if(!is_dir(dirname($dest)))mkdir(dirname($dest),0775,true);
    copy($input->getPathname(),$dest);
}
// Icons from the runtime's own icon font: the menu and the list use many more
// glyphs than the documentation's subset carries.
$adminBoot=['theme'=>false,'icons'=>['enabled'=>true,'accumulate'=>false],'smart'=>['base'=>true],'minified'=>false,'packages'=>['larena'=>['base'=>$base.$larenaMount.'/smart']]];
$adminHtml='<!doctype html><html lang="ru" class="max-h-screen h-full" data-sf-density="compact"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>Административный интерфейс</title>'
    .'<link rel="stylesheet" href="'.$css[1].'"><link rel="stylesheet" href="index.css">'
    .'<script>(function(){var d=window.matchMedia("(prefers-color-scheme: dark)").matches;try{if(parent!==window)d=parent.document.documentElement.classList.contains("theme-dark");}catch(e){}document.documentElement.classList.toggle("theme-dark",d);document.documentElement.classList.toggle("theme-light",!d);})();</script>'
    .'<script>window.sfPath='.json_encode($core,JSON_UNESCAPED_SLASHES).';window.sfSmartPath='.json_encode($base.'_docara/framework-runtime',JSON_UNESCAPED_SLASHES).';window.SF_BOOT_CONFIG='.json_encode($adminBoot,JSON_UNESCAPED_SLASHES).';</script>'
    .'<script src="'.$core.'core/js/core.js" defer></script><script type="module" src="index.js"></script></head>'
    .'<body class="flex h-full">'.file_get_contents($adminSource.'/index.html')
    .'<script>function syncTheme(){if(parent===window)return;try{var d=parent.document.documentElement.classList.contains("theme-dark");document.documentElement.classList.toggle("theme-dark",d);document.documentElement.classList.toggle("theme-light",!d);}catch(e){}}try{if(parent!==window)new MutationObserver(syncTheme).observe(parent.document.documentElement,{attributes:true,attributeFilter:["class"]});}catch(e){}</script>'
    .'</body></html>';
file_put_contents($adminTarget.'/index.html',$adminHtml);
foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($adminTarget, FilesystemIterator::SKIP_DOTS)) as $f) if($f->isFile()) $files[]=['path'=>substr($f->getPathname(),strlen($build)+1),'sha256'=>hash_file('sha256',$f->getPathname())];

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
