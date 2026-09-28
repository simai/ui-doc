#!/usr/bin/env php
<?php
declare(strict_types=1);
$root=dirname(__DIR__);$read=static fn($p)=>json_decode(file_get_contents($root.'/'.$p),true,512,JSON_THROW_ON_ERROR);
$review=$read('contracts/documentation/smart-lessons.json');$lock=$read('simai-framework.lock.json');$registry=$read('contracts/generated/framework-contract-registry.json');
$actual=['source'=>$registry['compatibility']['build_inputs']['source']['commit'],'core'=>$lock['runtime']['ui']['commit'],'smart'=>$lock['runtime']['ui_smart']['commit']];$errors=[];
foreach($actual as $key=>$value)if($review[$key]!==$value)$errors[]='Smart lesson review required for changed '.$key;
foreach($review['lessons'] as $slug)if(!is_file($root.'/content/ru/guide/smart-components/'.$slug.'.md'))$errors[]='Missing lesson: '.$slug;

// The recorded digests were decoration: nothing read them, and one of them had
// been stale for several publications. When the source repository is available
// they are verified against the revision this review names, so a lesson can no
// longer claim to have been reviewed against a file it was not.
$sourceRoot=getenv('SIMAI_UI_SOURCE_ROOT')?:null;$verified=0;
if($sourceRoot!==null&&is_dir($sourceRoot.'/.git')){
    foreach(($review['source_files']??[]) as $file=>$digest){
        $command=sprintf('git -C %s show %s 2>/dev/null',escapeshellarg($sourceRoot),escapeshellarg($review['source'].':'.$file));
        $content=shell_exec($command);
        if(!is_string($content)||$content===''){$errors[]='Smart lesson source unreadable: '.$file;continue;}
        if(hash('sha256',$content)!==$digest){$errors[]='Smart lesson source changed: '.$file;continue;}
        $verified++;
    }
}
echo json_encode(['status'=>$errors?'fail':'pass','lessons'=>count($review['lessons']),'verified_source_files'=>$verified,'errors'=>$errors],JSON_PRETTY_PRINT)."\n";exit($errors?1:0);
