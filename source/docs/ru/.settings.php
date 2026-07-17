<?php
return array(
    'title' => 'Документация SIMAI Framework',
    'order' => 1,
    'menu' => array(
        'start' => 'Старт',
        'fundamentals' => 'Основы',
        'utilities' => 'Утилиты',
        'components' => 'Компоненты',
        'smart-components' => 'Smart Components',
    ),
    'layoutOverrides' => [
        'default' => [
            'config' => ['hero' => ['enabled' => true]],
            'recursive' => false,
            'category' => false,
        ],
    ]
);
