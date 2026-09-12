# Воспроизводимые расхождения первоисточников

Проверка выполнена на exact candidate, зафиксированном в `candidate-identity.json`. Исходные репозитории, lock-файл документации и generated contracts не изменялись.

## 1. Provenance generated registry не совпадает с exact candidate

Файл Core:

```text
contracts/generated/framework-contract-registry.json
```

Минимальная проверка: извлечь Core из commit `4ded118dcadeaea990ef4fca7d060e4b732ef8c8` и сравнить значения provenance с candidate:

| Контур | Ожидаемый commit | Значение registry |
| --- | --- | --- |
| source | `89bc310aae06480c797aee9fbd067b5f64eff6c0` | `89bc310aae06480c797aee9fbd067b5f64eff6c0` |
| builder | `0d1038fb6037fedf02d641468cf140dd2d35246f` | `e302a1c8816ecd5668c31f69f81dc7f378ae87fc` |
| core | `4ded118dcadeaea990ef4fca7d060e4b732ef8c8` | `ad7f6bfaf35560f8b3977dab71c0756f4f55474f` |
| smart | `7cb994aaba9af69105a8f8b1eb53ae57ee713f1b` | `577bd99f8c6da41c5df08eb55957db8ef4df1005` |

Ожидание: registry, поставляемый exact Core, однозначно описывает тот же candidate. Факт: три из четырёх revisions устарели. Владелец исправления — генерация framework contract registry.

## 2. Modal объявляет logical positions, но runtime превращает их в `center`

CSS ordinary Modal и manifest Smart Modal объявляют `inline-start` и `inline-end`. При этом обе runtime-реализации нормализуют position по списку `center`, `left`, `right`, `top`, `bottom`.

Минимальный ordinary repro:

```js
const modal = new SF.Modal({ position: 'inline-start', content: 'Test' });
modal.render();
modal.open();
document.querySelector('[data-sf-modal-position]').dataset.sfModalPosition;
// actual: "center"; expected from the declared contract: "inline-start"
```

Минимальный Smart repro:

```html
<sf-modal id="logical" position="inline-start" heading="Test">Content</sf-modal>
<script>
  customElements.whenDefined('sf-modal').then(() => {
    console.log(document.querySelector('#logical').position);
    // actual: "center"; expected from the manifest: "inline-start"
  });
</script>
```

Документация и примеры используют только реально работающие физические значения `left` и `right` и явно отмечают ограничение. Владелец исправления — runtime Modal / Smart Modal contract.
