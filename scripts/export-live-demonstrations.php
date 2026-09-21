#!/usr/bin/env php
<?php
declare(strict_types=1);
$root=dirname(__DIR__);$build=$root.'/build_production';
$lock=json_decode(file_get_contents($root.'/simai-framework.lock.json'),true,512,JSON_THROW_ON_ERROR);
$core='/_docara/vendor/simai-framework/runtime/'.$lock['runtime']['ui']['commit'].'/distr/';
$page=file_get_contents($build.'/ru/index.html');
preg_match('/<link[^>]+href="([^"]+)"[^>]+data-docara-framework-asset="simai.framework.core.css"/', $page, $css);
if (!isset($css[1])) throw new RuntimeException('Core CSS missing from built document');
$files=[]; $inputs=[];
$ids=['smart-counter','smart-composition','smart-template','layout-inspector','smart-button','product-block','composition-recipe','page-editor'];
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
    $html='<!doctype html><html lang="ru"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" href="data:,"><title>Simai Framework — '.$id.'</title>'

    .'<link rel="stylesheet" href="'.$css[1].'">'
    .'<script>window.sfPath='.json_encode($core).';window.sfSmartPath="/_docara/framework-runtime";window.SF_BOOT_CONFIG={theme:false,icons:{enabled:false,accumulate:false},smart:{base:true}};</script>'
    .'<script src="'.$core.'core/js/core.js" defer></script>'.$js
    .'<style>body{padding:16px;margin:0;min-height:0;overflow-wrap:anywhere}project-counter,project-order,project-product,project-quantity,project-greeting{display:block}pre{max-width:100%;overflow:auto}textarea{box-sizing:border-box}button{cursor:pointer}iframe{box-sizing:border-box}</style></head><body>'.$body
    .'<script>function syncTheme(){if(parent===window)return;try{document.documentElement.dir=parent.document.documentElement.dir||"ltr";document.documentElement.classList.toggle("theme-dark",parent.document.documentElement.classList.contains("theme-dark"));document.documentElement.classList.toggle("theme-light",!parent.document.documentElement.classList.contains("theme-dark"));}catch(e){}}syncTheme();try{if(parent!==window)new MutationObserver(syncTheme).observe(parent.document.documentElement,{attributes:true,attributeFilter:["class","dir"]});}catch(e){}</script>'
    .'</body></html>';
    file_put_contents($target.'/index.html',$html);
    foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator($target)) as $f) if($f->isFile()) $files[]=['path'=>substr($f->getPathname(),strlen($build)+1),'sha256'=>hash_file('sha256',$f->getPathname())];
}
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
file_put_contents($build.'/.docara/standalone-examples.json',json_encode(['schema'=>'docara.standalone_examples.v1','generator_sha256'=>hash_file('sha256',__FILE__),'inputs_sha256'=>hash('sha256',json_encode($inputs)),'files'=>$files],JSON_PRETTY_PRINT|JSON_UNESCAPED_SLASHES)."\n");
echo json_encode(['status'=>'pass','live_demonstrations'=>count($ids),'verified_fixtures'=>1])."\n";
