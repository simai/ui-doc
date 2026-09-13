#!/usr/bin/env php
<?php
declare(strict_types=1);
$root=dirname(__DIR__); $errors=[]; $count=0;
$groups=json_decode(file_get_contents($root.'/config/catalog-groups.json'),true,512,JSON_THROW_ON_ERROR);
foreach (['components','smart-components'] as $catalog) {
    $seen=[];
    foreach ($groups[$catalog] as $group=>$definition) {
        $section=json_decode(file_get_contents($root.'/content/ru/'.$catalog.'/'.$group.'/section.json'),true,512,JSON_THROW_ON_ERROR);
        if ($section['title']!==$definition['title']) $errors[]='Wrong group title: '.$group;
        foreach ($definition['items'] as $slug) {
            if (isset($seen[$slug])) $errors[]='Duplicate: '.$slug;
            $seen[$slug]=true;$count++;
            $route='/ru/'.$catalog.'/'.$group.'/'.$slug.'/';
            if (!is_file($root.'/content'.rtrim($route,'/').'.md')) $errors[]='Missing: '.$route;
            if (!str_contains(file_get_contents($root.'/content/ru/'.$catalog.'/index.md'),$route)) $errors[]='Unlisted: '.$route;
        }
    }
    foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root.'/content/ru/'.$catalog)) as $file) {
        if ($file->isFile() && $file->getExtension()==='md' && $file->getBasename('.md')!=='index' && !isset($seen[$file->getBasename('.md')])) $errors[]='Ungrouped: '.$file->getFilename();
    }
}
foreach (new RecursiveIteratorIterator(new RecursiveDirectoryIterator($root.'/content/ru/guide')) as $file) {
    if (!$file->isFile() || $file->getExtension()!=='md') continue;
    $text=file_get_contents($file->getPathname());
    if (preg_match('/^## Что дальше|[Сс]ложн\S* Smart-компонент/u',$text)) $errors[]='Terminology or duplicate navigation: '.$file->getFilename();
}
echo json_encode(['status'=>$errors?'fail':'pass','catalog_entries'=>$count,'errors'=>$errors],JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE)."\n";exit($errors?1:0);
