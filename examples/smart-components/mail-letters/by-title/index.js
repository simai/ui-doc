const day = 24 * 60 * 60 * 1000;
const ago = (span) => new Date(Date.now() - span).toISOString();
document.getElementById('mail-letters-by-title').letters = [
  {id: 'prj_2', title: 'Приглашение', at: ago(day), blocks: 4},
  {id: 'prj_3', title: 'Анонс вебинара', at: ago(9 * day), blocks: 11},
  {id: 'prj_4', title: 'Летняя распродажа', at: ago(40 * day), blocks: 1},
];
