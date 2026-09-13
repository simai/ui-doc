#!/usr/bin/env php
<?php
declare(strict_types=1);
$root=dirname(__DIR__);$read=static fn($p)=>json_decode(file_get_contents($root.'/'.$p),true,512,JSON_THROW_ON_ERROR);
$review=$read('contracts/documentation/smart-lessons.json');$lock=$read('simai-framework.lock.json');$registry=$read('contracts/generated/framework-contract-registry.json');
$actual=['source'=>$registry['compatibility']['build_inputs']['source']['commit'],'core'=>$lock['runtime']['ui']['commit'],'smart'=>$lock['runtime']['ui_smart']['commit']];$errors=[];
foreach($actual as $key=>$value)if($review[$key]!==$value)$errors[]='Smart lesson review required for changed '.$key;
foreach($review['lessons'] as $slug)if(!is_file($root.'/content/ru/guide/smart-components/'.$slug.'.md'))$errors[]='Missing lesson: '.$slug;
echo json_encode(['status'=>$errors?'fail':'pass','lessons'=>count($review['lessons']),'errors'=>$errors],JSON_PRETTY_PRINT)."\n";exit($errors?1:0);
