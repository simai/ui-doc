# Переиспользование контента

Вы можете вынести повторяющийся контент в отдельный файл и добавлять его в нужные места в документе с помощью конструкции `{% include %}`.

Переиспользование поможет сократить время на редактирование и поиск исходного текста: информация хранится только в одном месте, а изменения автоматически применяются ко всем файлам.

## Порядок переиспользования {#steps}

1. Создайте каталог для хранения повторяющегося контента. Например, `_includes`.

   {% note warning %}

   Файлы для переиспользования должны храниться в каталоге, имя которого начинается с символа `_`, иначе они будут удалены при сборке.

   {% endnote %}

1. В каталоге `_includes` создайте  отдельный md-файл с повторяющимся текстом.

1. В разделы документа, куда необходимо подставить текст, добавьте ссылку на файл в формате:

   ```markdown
   {% include [Описание](../_includes/file.md) %}
   ```

    * `[Описание]` — описание файла. Информация для авторов документа, не влияет на сборку.
    * `(_includes/file.md)` — путь до файла.

    Если заголовок файла для переиспользования не нужно добавлять в текст раздела, добавьте ключевое слово `notitle`:

    ```markdown
    {% include notitle [Описание](../_includes/file.md) %}
    ```

При сборке документа текст файла будет добавлен в разделы на места инклюдов. Если в файле есть относительные ссылки, они будут перестроены.