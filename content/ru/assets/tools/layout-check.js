/* SIMAI Framework — проверка обязательных классов раскладки.
 *
 * Компонент Framework сам себя не раскладывает: CSS оформляет части, а флекс-
 * контейнер, в котором они лежат, пишется в разметке утилитарными классами.
 * Забыть их легко, и никто не возразит — элемент просто перестаёт быть
 * контейнером, а части сваливаются в угол. Радиокнопка, написанная руками без
 * них, рисует точку в левом верхнем углу кольца вместо середины.
 *
 * Сообщается только то, что доказуемо. Если элемент — контейнер, а
 * выравнивание в нём осталось по умолчанию, решение из макета до страницы не
 * дошло. Если элемент контейнером не стал, но ему объявлен gap, расстояние
 * между частями не применяется. Всё остальное — не ошибка: страница вправе
 * прийти к тому же виду другим способом, и подсказка в CSS описывает макет, а
 * не единственный допустимый путь.
 *
 * Статически это не проверяется. Опубликованный CSS содержит вложенные
 * @supports, @layer и :where(), значение может прийти из утилиты, из стилей
 * проекта или из инлайна — итог знает только движок браузера. Поэтому проверка
 * живёт в странице и спрашивает у него.
 *
 * Как пользоваться:
 *
 *   <script src="/assets/tools/layout-check.js"></script>
 *
 * или вставить содержимое файла в консоль. Результат — таблица в консоли и
 * массив в sfLayoutCheck(). Ничего не меняет на странице и ничего не отправляет.
 *
 * Это инструмент разработки. В рабочую сборку его включать не нужно.
 */
(function (global) {
  'use strict';

  var EXPECTATIONS = {
    "sf-alert-buttons": {
      "alignItems": "center"
    },
    "sf-alert-content": {
      "flexDirection": "column"
    },
    "sf-alert-wrap": {
      "flexDirection": "column"
    },
    "sf-avatar-card": {
      "flexDirection": "column"
    },
    "sf-avatar-card-content": {
      "flexDirection": "column"
    },
    "sf-avatar-card-row": {
      "alignItems": "center"
    },
    "sf-avatar-label-group": {
      "alignItems": "center"
    },
    "sf-avatar-label-group-container": {
      "flexDirection": "column"
    },
    "sf-badge": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-badge-icon-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-badge-text-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-breadcrumbs": {
      "flexWrap": "wrap",
      "alignItems": "center"
    },
    "sf-breadcrumbs-item": {
      "alignItems": "center"
    },
    "sf-breadcrumbs-item-container": {
      "alignItems": "center"
    },
    "sf-button": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-button-text-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-checkbox-box": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-checkbox-container": {
      "flexDirection": "column"
    },
    "sf-checkbox-label": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-close": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-context-menu-content": {
      "flexDirection": "column"
    },
    "sf-country-code": {
      "flexDirection": "column"
    },
    "sf-country-code-field": {
      "alignItems": "center"
    },
    "sf-country-code-item": {
      "alignItems": "center"
    },
    "sf-country-code-left": {
      "alignItems": "center"
    },
    "sf-datepicker": {
      "flexDirection": "column"
    },
    "sf-datepicker-day": {
      "flexDirection": "column",
      "alignItems": "center"
    },
    "sf-datepicker-text": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-dropdown": {
      "flexDirection": "column"
    },
    "sf-dropdown-field": {
      "alignItems": "center"
    },
    "sf-dropdown-tag-container": {
      "alignItems": "center"
    },
    "sf-fab": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-file-upload": {
      "flexDirection": "column",
      "alignItems": "center"
    },
    "sf-file-upload-block": {
      "alignItems": "center"
    },
    "sf-file-upload-bottom": {
      "flexDirection": "column",
      "alignItems": "center"
    },
    "sf-icon-button": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-input": {
      "flexDirection": "column"
    },
    "sf-input-field": {
      "alignItems": "center"
    },
    "sf-input-hint-text-wrap": {
      "alignItems": "center"
    },
    "sf-input-right": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-link": {
      "alignItems": "center"
    },
    "sf-list": {
      "flexDirection": "column",
      "alignItems": "end"
    },
    "sf-list-container": {
      "flexDirection": "column"
    },
    "sf-list-item": {
      "alignItems": "center"
    },
    "sf-list-item-container": {
      "alignItems": "center"
    },
    "sf-list-item-wrap": {
      "justifyContent": "space-between",
      "alignItems": "center"
    },
    "sf-loader-container": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-menu": {
      "flexDirection": "column"
    },
    "sf-menu-item": {
      "flexDirection": "column"
    },
    "sf-page-number": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-pagination": {
      "flexDirection": "column",
      "alignItems": "center"
    },
    "sf-pagination-bottom": {
      "alignItems": "center"
    },
    "sf-pagination-container": {
      "alignItems": "center"
    },
    "sf-pagination-count": {
      "justifyContent": "flex-end",
      "alignItems": "center"
    },
    "sf-pagination-left": {
      "alignItems": "center"
    },
    "sf-pagination-main": {
      "justifyContent": "space-between",
      "alignItems": "center"
    },
    "sf-pagination-marked": {
      "alignItems": "center"
    },
    "sf-pagination-top": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-pagination-total": {
      "alignItems": "center"
    },
    "sf-progress-bar--size-1": {
      "alignItems": "end"
    },
    "sf-quantity": {
      "flexDirection": "column"
    },
    "sf-quantity-wrap": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-radio-button-box": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-radio-button-container": {
      "flexDirection": "column"
    },
    "sf-radio-button-text": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-slider-arrows": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-slider-dots": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-step": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-step-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-steps": {
      "flexDirection": "column"
    },
    "sf-steps-container": {
      "alignItems": "center"
    },
    "sf-switch-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-switch-container-wrap": {
      "flexDirection": "column"
    },
    "sf-switch-toggler": {
      "alignItems": "center",
      "justifyContent": "flex-end"
    },
    "sf-tag": {
      "alignItems": "center"
    },
    "sf-tag-container": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-tag-count": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-textarea": {
      "flexDirection": "column"
    },
    "sf-textarea-hint-text-wrap": {
      "alignItems": "center"
    },
    "sf-thumb": {
      "flexDirection": "column",
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-thumb-handle": {
      "justifyContent": "center",
      "alignItems": "center"
    },
    "sf-toast-bottom": {
      "alignItems": "center"
    },
    "sf-toast-container": {
      "flexDirection": "column"
    },
    "sf-toast-wrap": {
      "flexDirection": "column"
    },
    "sf-toggle": {
      "alignItems": "center"
    },
    "sf-toggle-container": {
      "alignItems": "center"
    },
    "sf-toggle-inner": {
      "alignItems": "center"
    },
    "sf-toggle-inner-wrap": {
      "alignItems": "center",
      "justifyContent": "center"
    },
    "sf-tooltip-content": {
      "flexDirection": "column"
    },
    "sf-tooltip-wrap": {
      "flexDirection": "column"
    },
    "sf-upload-progress-content": {
      "flexDirection": "column"
    },
    "sf-upload-progress-left": {
      "flexDirection": "column"
    }
  };

  var LABEL = {
    flexDirection: 'направление',
    flexWrap: 'перенос',
    alignItems: 'выравнивание поперёк',
    justifyContent: 'выравнивание вдоль',
  };

  var CLASS_FOR = {
    'flexDirection:column': 'flex-col',
    'flexWrap:wrap': 'flex-wrap',
    'alignItems:center': 'items-center',
    'alignItems:end': 'items-end',
    'justifyContent:center': 'justify-center',
    'justifyContent:flex-end': 'justify-end',
    'justifyContent:space-between': 'justify-between',
  };

  // Браузер пишет flex-end там, где спецификация допускает и end; значения
  // normal и initial означают, что решение до страницы не дошло.
  function matches(actual, wanted) {
    if (actual === wanted) return true;
    if (wanted === 'end' && actual === 'flex-end') return true;
    if (wanted === 'flex-end' && actual === 'end') return true;
    return false;
  }

  function describe(element) {
    var name = element.tagName.toLowerCase();
    var classes = String(element.className || '').trim();
    return classes ? name + '.' + classes.split(/\s+/).join('.') : name;
  }

  function check(root) {
    var scope = root || document;
    var findings = [];
    var elements = scope.querySelectorAll('[class]');
    for (var i = 0; i < elements.length; i += 1) {
      var element = elements[i];
      var classes = String(element.className || '').split(/\s+/);
      for (var j = 0; j < classes.length; j += 1) {
        var wanted = EXPECTATIONS[classes[j]];
        if (!wanted) continue;
        // Выравнивание нечего применять к элементу без элементов внутри:
        // подпись из одного текста флекс-контейнером быть не обязана.
        if (element.children.length === 0) continue;
        // И нечего мерить у того, что не нарисовано: свёрнутое меню, закрытый
        // диалог, скрытая на этой ширине кнопка.
        if (element.getClientRects().length === 0) continue;
        var style = global.getComputedStyle(element);
        var container = /flex|grid/.test(style.display);
        var missing = [];
        if (!container) {
          // Подсказка говорит, как эта часть была разложена в макете. Страница
          // вправе прийти к тому же другим путём — text-align, margin, grid
          // родителя, — и спорить тут не с чем: на экране всё правильно.
          // Доказуемая ошибка одна: объявлен gap, а контейнера нет. Тогда
          // расстояние между частями просто не применяется, и это видно.
          var gap = style.columnGap === 'normal' && style.rowGap === 'normal' ? null : style.gap;
          if (gap) {
            missing.push({ property: 'display', want: 'flex', got: style.display + ' — gap ' + gap + ' не применяется',
              suggest: 'flex' });
          }
        } else {
          for (var property in wanted) {
            if (!Object.prototype.hasOwnProperty.call(wanted, property)) continue;
            if (matches(style[property], wanted[property])) continue;
            missing.push({ property: property, want: wanted[property], got: style[property],
              suggest: CLASS_FOR[property + ':' + wanted[property]] });
          }
        }
        if (missing.length > 0) {
          findings.push({ element: element, selector: describe(element), part: classes[j], missing: missing });
        }
      }
    }
    return findings;
  }

  function report(findings) {
    if (findings.length === 0) {
      global.console.log('%cРаскладка: всё на месте', 'color:#1b7f3b');
      return;
    }
    global.console.group('Раскладка: ' + findings.length + ' мест без обязательных классов');
    for (var i = 0; i < findings.length; i += 1) {
      var finding = findings[i];
      var want = finding.missing.map(function (item) {
        return LABEL[item.property] + ' — ' + item.got + ', ожидается ' + item.want
          + (item.suggest ? ' (класс ' + item.suggest + ')' : '');
      }).join('; ');
      global.console.log(finding.selector + ' → ' + want, finding.element);
    }
    global.console.groupEnd();
  }

  global.sfLayoutCheck = function (root) {
    var findings = check(root);
    report(findings);
    return findings;
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () { global.sfLayoutCheck(); });
  } else {
    global.sfLayoutCheck();
  }
}(window));
