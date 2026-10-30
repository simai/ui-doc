// A finished course: «Курс пройден» and «Сначала».
const initialize = async () => {
  await customElements.whenDefined('sf-pager');
  const pager = document.querySelector('#pager-course-finished');
  if (pager && pager.dataset.exampleReady !== 'true') {
    pager.dataset.exampleReady = 'true';
    pager.items = [{"id": "l1", "title": "Что такое смарт-компонент", "meta": "5 минут"}, {"id": "l2", "title": "Первая страница", "meta": "8 минут"}, {"id": "l3", "title": "Данные и порт", "meta": "6 минут"}, {"id": "l4", "title": "Свой вид", "meta": "7 минут"}, {"id": "l5", "title": "Публикация", "meta": "4 минуты"}];
  }
};

initialize();
