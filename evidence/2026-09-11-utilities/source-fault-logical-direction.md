# Source fault: вложенный `dir` применяет обе inline-стороны

## Привязка

- Core: `d328491bc805439f200866f7e04c0e5e853a4998` (`v5.7.0`).
- Accepted pair: `sf-v5.7.0-d328491b-9e94abc6`.
- Затронутые проверенные семьи: `margin`, `padding`; вероятно, тот же шаблон
  генерации затрагивает другие логические inline-утилиты.
- Source-файлы: `distr/utility/margin/default/css/default.css:508` и
  `distr/utility/padding/default/css/default.css:400`.

## Минимальное воспроизведение

```html
<html dir="ltr">
  <body>
    <div dir="rtl">
      <div class="m-inline-start-3">margin</div>
      <div class="p-inline-start-4">padding</div>
    </div>
  </body>
</html>
```

Loader подключает штатные `margin/default` и `padding/default`. В CSS одновременно
совпадают селекторы от внешнего `[dir="ltr"]`, внутреннего `[dir="rtl"]` и
логическое свойство без directional-селектора:

```css
[dir="ltr"] .m-inline-start-3 { margin-left: var(--sf-space-3); }
[dir="rtl"] .m-inline-start-3 { margin-right: var(--sf-space-3); }
.m-inline-start-3 { margin-inline-start: var(--sf-space-3); }
```

## Ожидаемый и фактический результат

- Ожидается для вложенного RTL: inline-start только справа.
- Фактически `m-inline-start-3`: `margin-left: 24px` и `margin-right: 24px`.
- Фактически `p-2 p-inline-start-4`: `padding-left: 32px` и
  `padding-right: 32px`; без ошибочного LTR fallback слева должно остаться
  базовое значение `20px`, справа — `32px`.
- На документе с единым направлением страницы поведение соответствует ожиданию.

## Рекомендация владельцу Core

Генерировать physical fallback так, чтобы учитывался ближайший direction context,
либо отказаться от ancestor fallback там, где поддерживается логическое свойство.
Нужен regression-тест для обоих вложений: `ltr > rtl` и `rtl > ltr`, включая
отрицательный margin. В `ui-doc` обходное CSS-решение не добавлялось; примеры и
публичные страницы честно фиксируют ограничение принятой версии.
