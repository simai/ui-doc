#!/usr/bin/env php
<?php
declare(strict_types=1);
$root = dirname(__DIR__);
$groups = [
 'introduction' => ['Знакомство', 10, ['what-is-layout'=>['Что такое макет',10], 'document-flow'=>['Как макет превращается в HTML',20], 'levels'=>['Страница, секция, блок и компонент',30]]],
 'building' => ['Устройство макета', 20, ['page'=>['Страница',10], 'section'=>['Секция',20], 'block'=>['Блок',30], 'component'=>['Компонент в макете',40], 'smart-component'=>['Smart-компонент в макете',50], 'complex-smart-component'=>['Сложный Smart-компонент',60], 'slots'=>['Слоты и порядок элементов',70]]],
 'content-and-data' => ['Содержимое и данные', 30, ['structured-text'=>['Структурированный текст без HTML',10], 'data-sources'=>['Данные и внешние источники',20], 'rendering-boundary'=>['Рендеринг и граница проекта',30]]],
 'examples' => ['Готовые примеры', 40, ['information-page'=>['Пример: информационная страница',10], 'catalog'=>['Пример: каталог товаров',20], 'dashboard'=>['Пример: составной интерфейс',30]]],
 'reference' => ['Справочник', 50, ['document'=>['Документ макета',10], 'type-manifest'=>['Manifest типа',20], 'api'=>['API проверки и рендеринга',30], 'diagnostics'=>['Ошибки и диагностика',40], 'versions'=>['Версии и совместимость',50], 'custom-type'=>['Создание собственного типа',60], 'studio-inspector'=>['Инспектор макета в Studio',70]]],
];
$errors=[]; $paragraphs=[]; $count=0;
$read=function(string $path)use($root){$file="$root/$path";if(!is_file($file))throw new RuntimeException("Missing $path");return (string)file_get_contents($file);};
$json=fn(string $p)=>json_decode($read($p),true,512,JSON_THROW_ON_ERROR);
$section=$json('content/ru/guide/layouts/section.json');
if(($section['title']??'')!=='Макеты')$errors[]=['code'=>'section_title'];
$checkPage=function(string $base,string $title,int $order)use(&$errors,&$paragraphs,&$count,$read,$json){
 $count++;$md=$read($base.'.md');$side=$json($base.'.page.json');preg_match_all('/^# (.+)$/m',$md,$h);
 if(count($h[1])!==1||($h[1][0]??'')!==$title)$errors[]=['code'=>'h1','page'=>$base];
 if(($side['navigation']['order']??null)!==$order)$errors[]=['code'=>'order','page'=>$base];
 foreach(['## Когда применять','## Пример','## Что дальше'] as $heading)if(!str_contains($md,$heading))$errors[]=['code'=>'section_missing','page'=>$base,'heading'=>$heading];
 $plain=preg_replace('/```.*?```/s','',$md)??$md;$words=preg_split('/\s+/u',trim(strip_tags($plain)))?:[];
 if(count($words)<75)$errors[]=['code'=>'too_short','page'=>$base,'words'=>count($words)];
 foreach(preg_split('/\R\s*\R/u',$plain)?:[] as $para){$n=mb_strtolower(trim(preg_replace('/\s+/u',' ',$para)??''));if(mb_strlen($n)>120)$paragraphs[$n][]=$base;}
};
$checkPage('content/ru/guide/layouts/index','Макеты',50);
foreach($groups as $dir=>[$title,$order,$pages]){$s=$json("content/ru/guide/layouts/$dir/section.json");if(($s['title']??'')!==$title||($s['navigation']['order']??null)!==$order)$errors[]=['code'=>'group','group'=>$dir];foreach($pages as $slug=>[$pageTitle,$pageOrder])$checkPage("content/ru/guide/layouts/$dir/$slug",$pageTitle,$pageOrder);}
foreach($paragraphs as $text=>$files)if(count(array_unique($files))>1)$errors[]=['code'=>'duplicate_paragraph','pages'=>array_values(array_unique($files))];
$all='';foreach(new RecursiveIteratorIterator(new RecursiveDirectoryIterator("$root/content/ru/guide/layouts")) as $f)if($f->isFile()&&$f->getExtension()==='md')$all.=file_get_contents($f->getPathname());
$report=['schema'=>'ui-doc.layout_information_architecture_audit.v1','status'=>$errors?'fail':'pass','groups'=>count($groups),'pages'=>$count,'errors'=>$errors];
echo json_encode($report,JSON_PRETTY_PRINT|JSON_UNESCAPED_UNICODE|JSON_UNESCAPED_SLASHES)."\n";exit($errors?1:0);
