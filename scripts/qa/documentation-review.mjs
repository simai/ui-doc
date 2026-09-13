const { chromium } = await import(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
const base = process.env.DOCS_BASE_URL || 'http://127.0.0.1:8788';
import assert from 'node:assert/strict';
const b=await chromium.launch({executablePath:process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});const p=await b.newPage({viewport:{width:1280,height:1000}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
await p.goto(base+'/demos/guide/smart-counter/');await p.locator('project-counter button').click();await p.waitForFunction(()=>document.querySelector('#counter-log').textContent.includes('2'));assert.match(await p.locator('output').innerText(),/2/);
await p.goto(base+'/demos/guide/smart-composition/');await p.locator('project-quantity button').click();await p.waitForFunction(()=>document.querySelector('#order-log').textContent.includes('project-quantity: 2'));
await p.goto(base+'/demos/guide/smart-template/');await p.locator('project-greeting strong').waitFor();assert.equal(await p.locator('project-greeting strong').innerText(),'Рим');
await p.goto(base+'/demos/guide/layout-inspector/');await p.waitForFunction(()=>document.querySelector('#layout-html').textContent.includes('sf-composition-columns'));await p.locator('#layout-preview').scrollIntoViewIfNeeded();await p.waitForTimeout(1000);assert.match(await p.frames().at(-1).locator('body').innerText(),/Каталог товаров/);
await p.locator('#layout-sample').selectOption('information');await p.waitForFunction(()=>document.querySelector('#layout-html').textContent.includes('О компании'));
await p.locator('#layout-json').fill('{invalid');await p.locator('#layout-render').click();assert.equal(await p.locator('#layout-html').textContent(),'');
await p.locator('#layout-sample').selectOption('dashboard');await p.waitForFunction(()=>document.querySelector('#layout-html').textContent.includes('Сводка'));
await p.locator('#layout-json').evaluate(e=>e.value=e.value.replace('layout.page','unknown.type'));await p.locator('#layout-render').click();await p.waitForFunction(()=>document.querySelector('#layout-diagnostics').textContent.includes('unknown'));
for (const viewport of [{width:1440,height:1000},{width:390,height:844}]) {
  await p.setViewportSize(viewport);
  await p.goto(base+'/ru/components/menu/',{waitUntil:'domcontentloaded'});
  await p.waitForURL('**/ru/components/navigation/menu/');
  await p.waitForTimeout(700);
  assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  const colors=await p.locator('[data-docara-breadcrumbs] a .sf-breadcrumbs-item-container').evaluateAll(es=>es.map(e=>getComputedStyle(e).color));
  assert.ok(colors.length>0);assert.ok(colors.every(c=>c===colors[0]));
  if(viewport.width===390){await p.getByRole('button',{name:'Открыть навигацию',exact:true}).click();await p.getByText('Формы и ввод',{exact:true}).first().waitFor({state:'visible'});}
}
await p.goto(base+'/ru/smart-components/reference/buttons/',{waitUntil:'domcontentloaded'});
await p.waitForURL('**/ru/smart-components/actions/buttons/');
for(const route of ['creating','events','nesting','templates-and-assets']) {
  await p.goto(base+'/ru/guide/smart-components/'+route+'/',{waitUntil:'domcontentloaded'});
  const frame=p.locator('[data-docara-block="internal-preview"] iframe').first();await frame.scrollIntoViewIfNeeded();
  await p.waitForTimeout(600);assert.ok(await frame.isVisible());
  assert.equal(await p.locator('h1').count(),1);assert.equal(await p.getByRole('heading',{name:'Что дальше',exact:true}).count(),0);
  for(const state of ['dark','rtl']) {
    await p.evaluate(state=>{document.documentElement.classList.toggle('theme-dark',state==='dark');document.documentElement.dir=state==='rtl'?'rtl':'ltr';},state);
    assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));
  }
}
console.log(JSON.stringify({status:'pass',counter:true,nestedEvent:true,externalTemplate:true,threeLayouts:true,invalidJson:true,unknownType:true,errors}));assert.deepEqual(errors,[]);await b.close();
