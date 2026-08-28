:::hero {variant=compact padding=xl}
# SIMAI Framework — от утилиты до умного компонента

Собирайте адаптивные и поддерживаемые веб-интерфейсы в одной системе: от
дизайн-токенов и CSS-утилит до готовых компонентов и Smart Components с логикой
и состоянием.

[Начать работу](/ru/start/)
:::

## Один язык интерфейса — четыре уровня

:::features
- :icon[foundation]{size=2 container=circle variant=tonal scheme=primary} **Core.** Базовые стили, дизайн-токены, темы и загрузчик создают общую основу проекта.
- :icon[tune]{size=2 container=circle variant=tonal scheme=secondary} **Утилиты.** Короткие классы управляют макетом, отступами, размерами, цветами, типографикой и состояниями прямо в разметке.
- :icon[widgets]{size=2 container=circle variant=tonal scheme=tertiary} **Компоненты.** Готовые элементы интерфейса дают проверенную структуру, стили и правила подключения.
- :icon[smart_toy]{size=2 container=circle variant=tonal scheme=info} **Smart Components.** Веб-компоненты добавляют поведение, состояние, события и программный интерфейс там, где одной разметки уже недостаточно.
:::

## Одна задача — разные представления

Данные и смысл остаются прежними. Поменяйте несколько классов компоновки — и
тот же рабочий блок превратится в компактный список, сетку карточек или
сфокусированную сводку.

:::example {label="Результат"}
```html
<style>
:root { color-scheme: light dark; --demo-surface:#fff; --demo-low:#f4f6f9; --demo-text:#1b1b1f; --demo-muted:#5f6368; --demo-outline:#d7d9df; --demo-primary:#075fce; --demo-on-primary:#fff; --demo-primary-container:#d8e7ff; --demo-success:#157347; }
@media (prefers-color-scheme:dark) { :root { --demo-surface:#111318; --demo-low:#1b1e24; --demo-text:#e4e2e8; --demo-muted:#c3c6cf; --demo-outline:#454850; --demo-primary:#a8c8ff; --demo-on-primary:#003064; --demo-primary-container:#164778; --demo-success:#75d6a5; } }
* { box-sizing:border-box; }
html,body { min-height:0!important; height:auto!important; }
body { margin:0; padding:clamp(1rem,3vw,2rem); color:var(--sf-on-surface,var(--demo-text)); background:var(--sf-surface-0,var(--demo-surface)); font-family:Arial,sans-serif; }
.layout-demo { display:grid; gap:1rem; }
.layout-demo__head { display:flex; flex-wrap:wrap; align-items:flex-end; justify-content:space-between; gap:1rem; }
.layout-demo__eyebrow { margin:0 0 .25rem; color:var(--sf-primary,var(--demo-primary)); font-size:.72rem; font-weight:800; letter-spacing:.08em; text-transform:uppercase; }
.layout-demo__title { margin:0; font-size:clamp(1.15rem,3vw,1.55rem); }
.layout-demo__switcher { display:inline-flex; gap:.25rem; padding:.25rem; border:1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius:.85rem; background:var(--sf-surface-container-low,var(--demo-low)); }
.layout-demo__switcher button { min-height:2.5rem; padding:.5rem .85rem; border:0; border-radius:.62rem; color:var(--sf-on-surface-variant,var(--demo-muted)); background:transparent; font:inherit; font-weight:700; cursor:pointer; }
.layout-demo__switcher button[aria-pressed="true"] { color:var(--sf-on-primary,var(--demo-on-primary)); background:var(--sf-primary,var(--demo-primary)); }
.layout-demo__stage { min-height:18rem; padding:clamp(.875rem,2vw,1.4rem); border:1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius:1.25rem; background:var(--sf-surface-container-low,var(--demo-low)); }
.layout-demo__project { display:grid; gap:1rem; }
.layout-demo__summary { display:flex; flex-wrap:wrap; align-items:center; justify-content:space-between; gap:.75rem; padding:1rem; border-radius:1rem; color:var(--sf-on-surface,var(--demo-text)); background:color-mix(in srgb,var(--sf-primary,var(--demo-primary)) 20%,var(--sf-surface-0,var(--demo-surface))); }
.layout-demo__summary h3,.layout-demo__summary p { margin:0; }
.layout-demo__status { padding:.32rem .62rem; border-radius:999px; color:var(--demo-success); background:color-mix(in srgb,var(--demo-success) 12%,transparent); font-size:.78rem; font-weight:800; }
.layout-demo__items { display:flex; flex-direction:column; gap:.5rem; }
.layout-demo__item { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:center; gap:.75rem; padding:.8rem 1rem; border:1px solid var(--sf-outline-variant,var(--demo-outline)); border-radius:.8rem; background:var(--sf-surface-0,var(--demo-surface)); transition:transform 220ms ease,box-shadow 220ms ease; }
.layout-demo__item strong,.layout-demo__item span { display:block; }
.layout-demo__item span { margin-top:.2rem; color:var(--sf-on-surface-variant,var(--demo-muted)); font-size:.8rem; }
.layout-demo__value { color:var(--sf-primary,var(--demo-primary)); font-size:1.25rem; font-weight:850; }
.layout-demo__project[data-layout="cards"] .layout-demo__items { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:1rem; }
.layout-demo__project[data-layout="cards"] .layout-demo__item { grid-template-columns:1fr; align-content:space-between; min-height:9rem; }
.layout-demo__project[data-layout="cards"] .layout-demo__value { font-size:1.8rem; }
.layout-demo__project[data-layout="focus"] { grid-template-columns:minmax(12rem,.7fr) minmax(0,1.3fr); }
.layout-demo__project[data-layout="focus"] .layout-demo__summary { align-content:space-between; }
.layout-demo__project[data-layout="focus"] .layout-demo__items { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); }
.layout-demo__project[data-layout="focus"] .layout-demo__item:first-child { grid-row:span 2; align-content:center; color:var(--sf-on-primary,var(--demo-on-primary)); background:var(--sf-primary,var(--demo-primary)); }
.layout-demo__project[data-layout="focus"] .layout-demo__item:first-child span,.layout-demo__project[data-layout="focus"] .layout-demo__item:first-child .layout-demo__value { color:inherit; }
.layout-demo__recipe { display:flex; flex-wrap:wrap; align-items:center; gap:.5rem; color:var(--sf-on-surface-variant,var(--demo-muted)); font-size:.82rem; }
.layout-demo__recipe code { padding:.35rem .6rem; border-radius:.5rem; color:var(--sf-primary,var(--demo-primary)); background:var(--sf-primary-container,var(--demo-primary-container)); font-weight:750; }
@media (max-width:40rem) { .layout-demo__head { align-items:stretch; } .layout-demo__switcher { display:grid; grid-template-columns:repeat(3,1fr); width:100%; } .layout-demo__switcher button { padding-inline:.35rem; } .layout-demo__project[data-layout="cards"] .layout-demo__items,.layout-demo__project[data-layout="focus"] .layout-demo__items { grid-template-columns:1fr; } .layout-demo__project[data-layout="focus"] { grid-template-columns:1fr; } .layout-demo__project[data-layout="focus"] .layout-demo__item:first-child { grid-row:auto; } }
@media (prefers-reduced-motion:reduce) { .layout-demo__item { transition:none; } }
</style>

<section class="layout-demo" data-layout-demo>
    <header class="layout-demo__head">
        <div><p class="layout-demo__eyebrow">Один набор данных</p><h2 class="layout-demo__title">Запуск новой версии</h2></div>
        <div class="layout-demo__switcher" role="group" aria-label="Представление данных">
            <button type="button" data-layout="list">Список</button>
            <button type="button" data-layout="cards">Карточки</button>
            <button type="button" data-layout="focus">Фокус</button>
        </div>
    </header>
    <div class="layout-demo__stage">
        <article class="layout-demo__project" data-project data-layout="list">
            <header class="layout-demo__summary"><div><p>Версия 5.4</p><h3>Готовность команды</h3></div><span class="layout-demo__status">В графике</span></header>
            <div class="layout-demo__items">
                <section class="layout-demo__item"><div><strong>Интерфейсы</strong><span>Готовые экраны</span></div><b class="layout-demo__value">18/24</b></section>
                <section class="layout-demo__item"><div><strong>Компоненты</strong><span>Проверено тестами</span></div><b class="layout-demo__value">92%</b></section>
                <section class="layout-demo__item"><div><strong>Документация</strong><span>Описанные сценарии</span></div><b class="layout-demo__value">36</b></section>
            </div>
        </article>
    </div>
    <footer class="layout-demo__recipe"><span>Меняется только компоновка:</span><code data-recipe aria-live="polite"></code></footer>
</section>

<script>
const demo = document.querySelector('[data-layout-demo]');
const project = demo.querySelector('[data-project]');
const recipe = demo.querySelector('[data-recipe]');
const buttons = [...demo.querySelectorAll('[data-layout]')].filter((item) => item.tagName === 'BUTTON');
const modes = {
    list: 'flex flex-col gap-1',
    cards: 'grid grid-col-3 gap-2',
    focus: 'grid grid-col-2 gap-2'
};
function select(layout) {
    project.dataset.layout = layout;
    recipe.textContent = modes[layout];
    buttons.forEach((button) => button.setAttribute('aria-pressed', button.dataset.layout === layout ? 'true' : 'false'));
}
buttons.forEach((button) => button.addEventListener('click', () => select(button.dataset.layout)));
select('list');
</script>
```
:::

## Почему с системой проще работать

:::columns
### Адаптивность встроена в язык

Условия контрольных точек и состояний сочетаются с утилитами. Один и тот же
подход работает для размеров экрана, `hover`, `focus` и других сценариев.

[Изучить условия](/ru/fundamentals/conditions/)

---

### Дизайн остаётся согласованным

Размеры, цвета, радиусы, тени и типографика опираются на примитивы и
семантические токены. Тему можно менять, не переписывая назначение каждого
элемента.

[Открыть дизайн-токены](/ru/fundamentals/design-tokens/)

---

### Абстракция растёт вместе с задачей

Начните с отдельной утилиты, перейдите к готовому компоненту и подключайте
Smart Component только когда интерфейсу нужны логика и состояние.

[С чего начать](/ru/start/)

---

### Поставка фиксируется точно

Документационный проект хранит точные revisions Framework и проверяет
сгенерированный статический результат. Это помогает команде воспроизводить
одинаковую сборку.

[Проверить совместимость](/ru/start/compatibility/)
:::

:::surface {width=full content_width=container padding=xl tone=accent}
## Путь от знакомства до рабочего интерфейса

1. **Подключите основу.** Загрузите Core и только нужные проекту слои Framework.
2. **Соберите первый блок.** Используйте утилиты и семантические токены прямо в разметке.
3. **Повторяйте готовое.** Выберите компоненты для устойчивых интерфейсных сценариев.
4. **Добавьте поведение.** Подключайте Smart Components там, где нужны состояние и события.
:::

## Документация по вашей задаче

:::features
- **[Быстрый старт](/ru/start/).** Установка, подключение и первая страница.
- **[Основы](/ru/fundamentals/).** Модификаторы, условия, шкалы, темы и типографика.
- **[Каталог утилит](/ru/utilities/).** Справочник классов по CSS-свойствам.
- **[Компоненты](/ru/framework-components/).** Подключение, каталог, контракты и примеры.
- **[Smart Components](/ru/smart-components/).** Жизненный цикл, API, события и зависимости.
:::
