<?php
return array(
    'title' => 'Документация SF UI',
    'order' => 1,
    'menu' => array(
        'start' => 'Старт',
        'fundamentals' => 'Основы',
        'utilities' => 'Утилиты',
        'components' => 'Компоненты',
        'smart-components' => 'Смарт-компоненты',
    ),
    'layoutOverrides' => [
        'default' => [
            'config' => ['hero' => ['enabled' => true]],
            'recursive' => false,
            'category' => false,
        ],
    ]
);
