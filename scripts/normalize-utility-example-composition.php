<?php

declare(strict_types=1);

/**
 * Applies safe, presentation-only rules shared by utility demonstrations.
 * It deliberately does not infer utility classes or rewrite the demonstrated
 * property: semantic corrections remain part of the category review.
 */

$root = dirname(__DIR__);
$write = in_array('--write', $argv, true);
$files = glob($root . '/examples/utilities/*/*/index.html') ?: [];
$changed = [];

foreach ($files as $file) {
    $source = file_get_contents($file);
    if ($source === false) {
        continue;
    }

    $result = $source;

    $copy = [
        'Global default' => 'Глобальное значение',
        'Local override' => 'Локальное переопределение',
        'Two-stop linear gradient.' => 'Линейный градиент с двумя точками.',
        'Three-stop gradient through center color.' => 'Градиент с промежуточным цветом.',
        'Two stops via gradient-color tokens.' => 'Две точки из токенов цвета градиента.',
        'Three stops using primary/secondary/tertiary.' => 'Три точки из основных ролевых цветов.',
        'Three stops set inline; custom angle.' => 'Три точки и заданное направление.',
        'Text reveals the gradient.' => 'Градиент виден внутри текста.',
        'Hover to see the change.' => 'Наведите указатель, чтобы увидеть изменение.',
        'Hover switches both background and text.' => 'При наведении меняются фон и текст.',
        'End of the panel' => 'Конец области',
        'Default border parameters from core.' => 'Параметры границы по умолчанию.',
        'Hover: transform animation with optimization hint.' => 'При наведении: преобразование с подсказкой браузеру.',
        'Hover: same animation with default browser optimization.' => 'При наведении: то же преобразование без подсказки.',
        'Hover this card: pointer cursor.' => 'Наведите: указатель ссылки.',
        'Hover this card: wait cursor.' => 'Наведите: указатель ожидания.',
        'Hover this card: blocked cursor.' => 'Наведите: действие запрещено.',
        'Hover this card: zoom-in cursor.' => 'Наведите: увеличение.',
        'Default browser behavior for text selection.' => 'Обычное выделение текста браузером.',
        'Text remains visible for all users.' => 'Текст остаётся видимым для всех.',
        'Default link states' => 'Состояния ссылки по умолчанию',
        'Default underline' => 'Подчёркивание по умолчанию',
        'Default underlined link' => 'Ссылка с подчёркиванием',
        'Default card elevation.' => 'Обычная глубина карточки.',
        'Hover to increase depth.' => 'Наведите, чтобы увеличить глубину.',
        'Hover changes shadow color.' => 'При наведении меняется цвет тени.',
        'Text size utilities' => 'Размеры текста',
        'Text roles' => 'Текстовые роли',
        'Default text flow' => 'Текстовый поток по умолчанию',
        'Item one' => 'Первый пункт',
        'Item two' => 'Второй пункт',
        'Item three' => 'Третий пункт',
        'Short line' => 'Короткая строка',
        'Short' => 'Короткий текст',
        'Two<br/>lines' => 'Две<br/>строки',
        'Two lines' => 'Две строки',
        'Three<br/>lines<br/>here' => 'Три<br/>строки<br/>текста',
        '>narrow<' => '>Коротко<',
        'a bit wider text' => 'Текст немного длиннее',
        'wide content text here' => 'Самый длинный текст в сравнении',
        'From left' => 'Слева',
        'From right' => 'Справа',
        'From bottom' => 'Снизу',
        'Moves + changes background' => 'Движение и изменение фона',
        'Same change, slower' => 'То же изменение, медленнее',
        'Item 1' => 'Элемент 1',
        'Item 2' => 'Элемент 2',
        'Item 3' => 'Элемент 3',
        'Item A' => 'Элемент A',
        'Item B' => 'Элемент B',
        'Item C' => 'Элемент C',
        'Parent scrollTop:' => 'Прокрутка родителя:',
        'Child scrollTop:' => 'Прокрутка дочерней области:',
        'Parent area (top)' => 'Родительская область: начало',
        'Parent area (bottom). When child is at edge, wheel continues here for auto.' => 'Родительская область: при достижении края прокрутка продолжается здесь.',
        'Parent area (bottom). Chain is blocked for contain.' => 'Родительская область: цепочка прокрутки остановлена.',
        'Parent area (bottom). Chain and effects are disabled.' => 'Родительская область: цепочка и краевые эффекты отключены.',
        'Child block A' => 'Дочерний блок A',
        'Child block B' => 'Дочерний блок B',
        'Child block C' => 'Дочерний блок C',
        'Child block D' => 'Дочерний блок D',
        'Hover: <a href="#test">move cursor here</a>' => 'Наведение: <a href="#test">переместите указатель сюда</a>',
        '<th>Item</th>' => '<th>Элемент</th>',
        '<td>Hover row</td>' => '<td>Строка при наведении</td>',
        '<td>Move cursor</td>' => '<td>Наведите указатель</td>',
        'measure-narrow: tighter line width.' => 'Узкая мера: короткая строка чтения.',
        'measure-wide: wider reading line.' => 'Широкая мера: длинная строка чтения.',
    ];
    $result = strtr($result, $copy);

    // The example shell already owns the readable page width. A max-width on
    // the root comparison grid creates the narrow left strip that prompted
    // this audit, so the grid should use the available preview width.
    $result = preg_replace_callback(
        '/\A(<[^>]+\bclass=")([^"]+)(")/u',
        static function (array $match): string {
            $classes = preg_split('/\s+/', trim($match[2])) ?: [];
            $classes = array_values(array_filter(
                $classes,
                static fn (string $class): bool => preg_match('/^max-w-[a-z0-9_-]+$/i', $class) !== 1,
            ));
            return $match[1] . implode(' ', $classes) . $match[3];
        },
        $result,
        1
    ) ?? $result;

    // A caption above a centered comparison belongs to the same visual axis.
    $result = preg_replace_callback(
        '/<div class="([^"]*\b(?:sf-text-1\/2\s+)?weight-6\b[^"]*)">/u',
        static function (array $match): string {
            $classes = preg_split('/\s+/', trim($match[1])) ?: [];
            if (!in_array('text-center', $classes, true)) {
                $classes[] = 'text-center';
            }
            return '<div class="' . implode(' ', array_values(array_unique($classes))) . '">';
        },
        $result
    ) ?? $result;

    // Remove accidental duplicated utility classes without changing order.
    $result = preg_replace_callback(
        '/class="([^"]+)"/u',
        static function (array $match): string {
            $classes = preg_split('/\s+/', trim($match[1])) ?: [];
            return 'class="' . implode(' ', array_values(array_unique($classes))) . '"';
        },
        $result
    ) ?? $result;

    if ($result !== $source) {
        $changed[] = substr($file, strlen($root) + 1);
        if ($write) {
            file_put_contents($file, $result);
        }
    }
}

echo json_encode([
    'mode' => $write ? 'write' : 'dry-run',
    'changed' => count($changed),
    'changed_files' => $changed,
], JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE) . PHP_EOL;
