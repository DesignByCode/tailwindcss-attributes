"use strict";var e={},t={};!function(e){function t(e,t){return{handler:e,config:t}}Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:()=>n}),t.withOptions=function(e,t=(()=>({}))){const n=function(n){return{__options:n,handler:e(n),config:t(n)}};return n.__isOptionsFunction=!0,n.__pluginFunction=e,n.__configFunction=t,n};const n=t}(t),function(e){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:()=>o});function n(e){return e&&e.__esModule?e:{default:e}}const o=n(t).default}(e);var n=(0,(e.__esModule?e:{default:e}).default)((({addVariant:e,theme:t})=>{const n=(t,n,o=null,r=!0)=>{r?(e(`${o}-${t}`,`[${o}-${t}="${n}"]& `),e(`peer-${o}-${t}`,`:merge(.peer)[${o}-${t}="${n}"] ~ &`),e(`group-${o}-${t}`,`:merge(.group)[${o}-${t}="${n}"] &`)):(e(`${o}-${t}-${n}`,`[${o}-${t}="${n}"]&`),e(`peer-${o}-${t}-${n}`,`:merge(.peer)[${o}-${t}="${n}"] ~ &`),e(`group-${o}-${t}-${n}`,`:merge(.group)[${o}-${t}="${n}"] &`))};["atomic","busy","checked","current","disabled","expanded","grabbed","haspopup","hidden","invalid","live","modal","multiline","multiselectable","pressed","readonly","required","selected"].forEach((e=>n(e,"true","aria"))),Object.entries({state:["open","close"],switch:["on","off"],theme:["dark","light"]}).map((([e,t])=>{t.forEach((t=>n(e,t,"data",!1)))})),Object.entries({activedescendant:["application","combobox","composite","group","textbox"],autocomplete:["none","both","inline","list"],current:["page","step","location","date","time"],dropeffect:["copy","execute","link","move","none","popup"],haspopup:["menu","listbox","tree","grid","dialog"],invalid:["grammar","spelling"],live:["assertive","off","polite"],orientation:["horizontal","undefined","vertical"],pressed:["mixed"],relevant:["additions","all","removals","text"],sort:["ascending","descending","none","other"]}).map((([e,t])=>{t.forEach((t=>n(e,t,"aria",!1)))}))}));module.exports=n;
//# sourceMappingURL=index.js.map