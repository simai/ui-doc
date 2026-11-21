---
title: "Компоненты"
description: "Роль и клавиши каждого смарт-компонента SIMAI Framework со ссылкой на раздел «Доступность» его страницы."
---

# Компоненты

Каждый смарт-компонент сам ставит роль, имя и состояния и сам ведёт
клавиатуру. Таблица собрана из паспортов компонентов выпуска: роль — та,
что компонент ставит своему главному элементу, клавиши — те, на которые он
отвечает. Подробности — имя, объявления, поведение фокуса — в разделе
«Доступность» на странице компонента.

Роль «—» значит, что компонент не ставит своей роли: его доступность — в
частях, из которых он собран (кнопках, полях, списках).

| Компонент | Роль | Клавиши |
|:---|:---|:---|
| [Inline-редактор](/ru/smart/editor/inline-editor/#доступность) | — | Enter, Escape, Shift+Enter, Mod+B, Mod+I … |
| [Аватар](/ru/smart/content/avatar/#доступность) | `img` | Tab |
| [Аватары](/ru/smart/content/avatars/#доступность) | `group` | — |
| [Аккордеон](/ru/smart/content/accordion/#доступность) | — | Tab, Enter, Space, ArrowUp, ArrowDown, Home, End |
| [Бейджи](/ru/smart/feedback/badges/#доступность) | — | — |
| [Боковая панель](/ru/smart/overlays/drawer/#доступность) | `dialog` | Tab, Shift+Tab, Escape |
| [Вкладки](/ru/smart/navigation/tabs/#доступность) | `tablist` | Tab, Enter, Space, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Время](/ru/smart/content/time/#доступность) | `time` | Tab, Escape |
| [Всплывающая панель](/ru/smart/overlays/popover/#доступность) | `dialog` | Tab, Enter, Space, Escape |
| [Всплывающие сообщения](/ru/smart/feedback/toast/#доступность) | `status` | Tab |
| [Выбор из поиска](/ru/smart/forms/lookup/#доступность) | `combobox` | Tab, Enter, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End, Backspace, Delete |
| [Выбор карточками](/ru/smart/forms/input-choice/#доступность) | `radiogroup` | Tab, Space, ArrowUp, ArrowDown, ArrowLeft, ArrowRight |
| [Выбор профиля](/ru/smart/composite/profile-picker/#доступность) | `menu` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, Home, End |
| [Выбор языка](/ru/smart/navigation/language/#доступность) | `radiogroup` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Выпадающий список](/ru/smart/navigation/dropdown/#доступность) | `combobox` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, Home, End, PageUp, PageDown |
| [Галерея](/ru/smart/content/gallery/#доступность) | `list` | Tab, Enter, Space |
| [Дерево](/ru/smart/navigation/tree/#доступность) | `tree` | Tab, Enter, Space, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Загрузка файлов](/ru/smart/forms/file-upload/#доступность) | `button` | Tab, Enter, Space |
| [Изменение](/ru/smart/content/change/#доступность) | — | Tab, Enter, Space |
| [Изменение ширины](/ru/smart/overlays/resizer/#доступность) | `separator` | Tab, Enter, ArrowLeft, ArrowRight, Home, End, PageUp, PageDown |
| [Иконки](/ru/smart/content/icons/#доступность) | `img` | — |
| [Календарь](/ru/smart/forms/datepicker/#доступность) | `dialog` | Tab, Shift+Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End, PageUp, PageDown, Shift+PageUp, Shift+PageDown |
| [Кнопка закрытия](/ru/smart/actions/close/#доступность) | `button` | Tab, Enter, Space |
| [Кнопка копирования](/ru/smart/actions/copy-button/#доступность) | `button` | Tab, Enter, Space |
| [Кнопки](/ru/smart/actions/buttons/#доступность) | `button` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown |
| [Кнопки с иконкой](/ru/smart/actions/icon-buttons/#доступность) | `button` | Tab, Enter, Space |
| [Код подтверждения](/ru/smart/forms/code-input/#доступность) | `group` | Tab, ArrowLeft, ArrowRight, Home, End, Backspace |
| [Код страны](/ru/smart/forms/country-code/#доступность) | `textbox` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, Home, End |
| [Количество](/ru/smart/forms/quantity/#доступность) | `spinbutton` | Tab, Enter, Escape, ArrowUp, ArrowDown, Home, End, PageUp, PageDown |
| [Кольцо прогресса](/ru/smart/feedback/progress-ring/#доступность) | `meter` | — |
| [Контекстное меню](/ru/smart/navigation/context-menu/#доступность) | `menu` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Лента](/ru/smart/content/list-feed/#доступность) | `region` | Tab, ArrowUp, ArrowDown, Home, End |
| [Листалка страниц](/ru/smart/navigation/pager/#доступность) | `navigation` | Tab, Enter, Space, ArrowLeft, ArrowRight, BracketLeft, BracketRight |
| [Мастер](/ru/smart/composite/wizard/#доступность) | `region` | Tab, Enter, Space, Escape |
| [Меню](/ru/smart/navigation/menu/#доступность) | `navigation` | Tab, Enter, Space, Escape |
| [Многострочное поле](/ru/smart/forms/textarea/#доступность) | `textbox` | Tab |
| [Модальное окно](/ru/smart/overlays/modal/#доступность) | `dialog` | Tab, Shift+Tab, Escape |
| [Настройки](/ru/smart/navigation/settings/#доступность) | `menu` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Оверлей редактора](/ru/smart/editor/composition-overlay/#доступность) | `tree` | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Оглавление](/ru/smart/navigation/contents/#доступность) | `navigation` | Tab, Enter, Space, Escape |
| [Пагинация](/ru/smart/navigation/pagination/#доступность) | `navigation` | Tab, Enter, Space |
| [Переключатель](/ru/smart/forms/switch/#доступность) | `switch` | Tab, Space |
| [Перетаскивание](/ru/smart/editor/sortable/#доступность) | — | Tab, Enter, Space, Escape, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Плашка уведомлений](/ru/smart/feedback/alert-bar/#доступность) | `region` | Tab, Enter, Space, Escape |
| [Плитка показателя](/ru/smart/content/tile-metric/#доступность) | `group` | Tab, Enter, Space |
| [Подсказка](/ru/smart/feedback/tooltip/#доступность) | `tooltip` | — |
| [Подсказка «?»](/ru/smart/feedback/help-mark/#доступность) | `button` | Tab, Enter, Space, Escape |
| [Подтверждение](/ru/smart/actions/confirm/#доступность) | `group` | Tab, Enter, Space, Escape |
| [Подтверждение изменения](/ru/smart/actions/confirm-change/#доступность) | `region` | Tab, Enter, Space |
| [Поиск по сайту](/ru/smart/composite/search/#доступность) | `dialog` | Tab, Enter, Escape, ArrowUp, ArrowDown, ArrowRight, Mod+K, Mod+Enter, Backspace |
| [Поле изображения](/ru/smart/forms/image-field/#доступность) | `group` | Tab, Enter, Space |
| [Предпросмотр файла](/ru/smart/content/file-preview/#доступность) | `group` | Tab |
| [Прогресс](/ru/smart/feedback/progress-bar/#доступность) | `progressbar` | — |
| [Пустое состояние](/ru/smart/feedback/empty-state/#доступность) | `status` | Tab |
| [Радиокнопки](/ru/smart/forms/radio/#доступность) | `radio` | Tab, Space, ArrowUp, ArrowDown |
| [Сегментный переключатель](/ru/smart/actions/segmented/#доступность) | `radiogroup` | Tab, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End |
| [Скачивание файла](/ru/smart/actions/download-file/#доступность) | `link` | Tab, Enter, Space |
| [Скелетон](/ru/smart/feedback/skeleton/#доступность) | — | — |
| [Слайдер диапазона](/ru/smart/forms/range-slider/#доступность) | `slider` | Tab, ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Home, End, PageUp, PageDown |
| [Слайдер контента](/ru/smart/content/slider/#доступность) | `region` | Tab |
| [Спиннер](/ru/smart/feedback/spinner/#доступность) | `status` | — |
| [Список](/ru/smart/content/list/#доступность) | `list` | Tab, Enter, ArrowUp, ArrowDown, Home, End, F2, Shift+F10, ContextMenu |
| [Список сведений](/ru/smart/content/list-description/#доступность) | `group` | Tab, Enter |
| [Справочная ссылка](/ru/smart/content/reference-link/#доступность) | `link` | Tab |
| [Строка списка](/ru/smart/content/list-item/#доступность) | — | Tab, Enter, ArrowUp, ArrowDown, Home, End |
| [Теги](/ru/smart/content/tags/#доступность) | `button` | Tab, Enter, Space |
| [Текстовое поле](/ru/smart/forms/inputs/#доступность) | `textbox` | Tab |
| [Требует внимания](/ru/smart/feedback/list-attention/#доступность) | `region` | Tab, Enter, Space |
| [Уведомление](/ru/smart/feedback/alert/#доступность) | `status` | Tab |
| [Флажок](/ru/smart/forms/checkbox/#доступность) | `checkbox` | Tab, Space |
| [Форматированный текст](/ru/smart/forms/rich-text/#доступность) | `textbox` | Tab, ArrowDown, ArrowLeft, ArrowRight, Home, End, Mod+B, Mod+I, Mod+K … |
| [Хлебные крошки](/ru/smart/navigation/breadcrumbs/#доступность) | `navigation` | Tab, Enter |
| [Ход выполнения](/ru/smart/feedback/progress-run/#доступность) | `region` | Tab, Enter, Space |
| [Хронология](/ru/smart/content/list-timeline/#доступность) | `list` | Tab, Enter, Space, Escape |
| [Цвет](/ru/smart/forms/color/#доступность) | `group` | Tab, Enter, Space, Escape |
| [Часть страницы по адресу](/ru/smart/content/include/#доступность) | — | Tab, Enter, Space |
| [Шаги](/ru/smart/navigation/steps/#доступность) | `list` | Tab, Enter, Space |
| [Шапка сайта](/ru/smart/composite/site-header/#доступность) | `banner` | Tab, Enter, Space, Escape |
| [Шапка страницы](/ru/smart/composite/page-header/#доступность) | — | Tab, Enter, Space |
| [Шкала прогресса](/ru/smart/feedback/progress-scale/#доступность) | `progressbar` | — |

## Что значат клавиши

| Клавиша | Обычно |
|:---|:---|
| Tab, Shift+Tab | Перейти к компоненту и дальше. |
| Enter, Space | Нажать, открыть, выбрать. |
| Escape | Закрыть и вернуть фокус туда, откуда открыли. |
| Стрелки, Home, End | Двигаться внутри списка, меню, вкладок; к первому и последнему. |
| PageUp, PageDown | Большой шаг: месяц в календаре, страница списка. |
| Mod | Cmd на Mac, Ctrl на других системах. |
