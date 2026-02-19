---
extends: _core._layouts.documentation
section: content
title: Параметры по умолчанию для анимации
description: Параметры по умолчанию для анимации
---

# Параметры по умолчанию для анимации

!rtags[animation-default-parameters]



Для анимаций в SIMAI Framework предусмотрены переменные, определяющие временные промежутки и кривую перехода. Данные
переменные позволяют легко переопределять значения анимации под нужды проекта.

## Описание:

По умолчанию для всех переходов (transition) используется значение:

```css
:root * {
  transition: var(--sf-duration-normal) var(--sf-animation);
}
```

Это означает, что, если нет явной необходимости менять анимацию, нормальная скорость (300ms) и кривая анимации
cubic-bezier(.25,.8,.25,1) будут использованы по умолчанию.

Доступные переменные анимации:

- `--sf-duration-fast`: 100ms — быстрая анимация.
- `--sf-duration-normal`: 300ms — нормальная анимация (по умолчанию).
- `--sf-duration-slow`: 500ms — медленная анимация.
- `--sf-animation`: `cubic-bezier(.25,.8,.25,1)` — функция распределения времени анимации.

Анимации применяются глобально за счет определения переменных в `:root`.  
Для изменения скорости анимации в конкретном случае вы можете переопределить переменные в нужном селекторе:

```css
.selector {
  --sf-duration-normal: 500ms; /* Меняем нормальную длительность на 500ms */
}
```

Для применения быстрого или медленного варианта используйте переменные соответственно:

```css
.fast-transition {
  transition: var(--sf-duration-fast) var(--sf-animation);
}

.slow-transition {
  transition: var(--sf-duration-slow) var(--sf-animation);
}
```

## Пример использования:

```html
<!-- По умолчанию переход будет 300ms и с cubic-bezier(.25,.8,.25,1). -->
<div class="p-4 bg-primary color-on-surface-inverse hover:bg-primary-container">
  Наведи на меня, чтобы увидеть плавный переход (по умолчанию 300ms)
</div>
```

(В примере можно не указывать класс `transition`, так как переход задан глобально. Если же вам нужно указать другую
длительность в конкретном месте, переопределите переменные или примените `transition` со своими значениями.)

<div class="sf-playground overflow-hidden">
<iframe src="https://play.simai.io/embed.html?component=animation&group=animation-default-parameters"></iframe>
</div>
