(()=>{"use strict";var t={"./smart/pagination/scss/index.scss":(t,e,s)=>{s.r(e)},"./smart/pagination/js/events.js":(t,e,s)=>{s.r(e),s.d(e,{loadEvents:()=>a});const a=t=>{}},"./smart/pagination/js/parameters.js":(t,e,s)=>{s.r(e),s.d(e,{default:()=>a});const a={styles:{default:{"sf-pagination-body":{class:"w-full border-gray-3 radius-3 p-1"}},medium:{"sf-textArea-body":["w-2/6","h-2/4"]}}}}},e={};function s(a){var r=e[a];if(void 0!==r)return r.exports;var n=e[a]={exports:{}};return t[a](n,n.exports,s),n.exports}s.d=(t,e)=>{for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),s.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{s.r(a);s("./smart/pagination/scss/index.scss");var t=s("./smart/pagination/js/parameters.js"),e=s("./smart/pagination/js/events.js");class r extends SF.customComponent{constructor(s){e&&(s.initEvents=e),super(s),this.hasStyle=!0,this.params=t.default,this.init()}}SF.cl.components.pagination||(SF.cl.components.pagination={item:r})})()})();