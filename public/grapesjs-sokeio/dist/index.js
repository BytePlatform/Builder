/*! grapesjs-sokeio - 1.0.63 */
!function(e,t){'object'==typeof exports&&'object'==typeof module?module.exports=t():'function'==typeof define&&define.amd?define([],t):'object'==typeof exports?exports["grapesjs-sokeio"]=t():e["grapesjs-sokeio"]=t()}('undefined'!=typeof globalThis?globalThis:'undefined'!=typeof window?window:this,(()=>(()=>{"use strict";var e={d:(t,o)=>{for(var n in o)e.o(o,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:o[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(e,'__esModule',{value:!0})}},t={};e.r(t),e.d(t,{default:()=>p});const o="gjs-open-import-webpage",n="set-device-desktop",i="set-device-tablet",a="set-device-mobile",d="canvas-clear",c=/\[([\w-:]+)((?:\s+\w+\s*=\s*"[^"]*")*)(\](.*?)\[\/\1\]|\s*\/\])/s,l=function(e){const t=e.Commands;t.add("open-shortcode-dialog",{run:function(e,t,o){!function(e,t,o){if(window.openShortcodeSetting){var n,i,a;let d=document.createElement("div");d.innerHTML=c.test(o.get("content"))?o.get("content"):decodeURIComponent(o.view.el.getAttribute("data-shortcode")),"null"==d.innerHTML.trim()&&(d.innerHTML=""),console.log(o.view.el.innerText),!d.innerHTML.trim().length&&c.test(o.view.el.innerText)&&(d.innerHTML=o.view.el.innerText);let l=window.getShortcodeObjectFromText(d.innerText);window.openShortcodeSetting(e.getContainer(),null!==(n=null==l?void 0:l.shortcode)&&void 0!==n?n:"",null!==(i=null==l?void 0:l.attributes)&&void 0!==i?i:[],null!==(a=null==l?void 0:l.content)&&void 0!==a?a:"",(function(t){o.set("content",'<div data-gjs-type="shortcode">'+t+"</div>"),o.components('<div data-gjs-type="shortcode">'+t+"</div>"),o.trigger("change:content"),e.trigger("component:update"),o.view.render()}),(function(){t.stop()}))}}(e,t,o)}})},r=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=e.Commands;o.add("open-template-dialog",{run:function(e,o,n){!function(e,o,n){let i="eventAddComponent"+(new Date).getTime(),a=window.SokeioManager.openModal({$url:t.urlTemplateManager,$title:t.titleTemplateManager,$size:"modal-xl modal-fullscreen-lg-down"},{callbackEvent:i});window[i]=function(t){var o=e.DomComponents.addComponent(t);a.hide(),n.components().add(o),n.trigger("change:content"),e.trigger("component:update"),n.view.render()}}(e,0,n)}})},s=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=e.getConfig("stylePrefix"),i=t.modalImportLabel,a=t.modalImportContent;e.Commands.add(o,{codeViewer:null,container:null,run(e){const n="function"==typeof a?a(e):a,i=this.getCodeViewer();e.Modal.open({title:t.modalImportTitle,content:this.getContainer()}).onceClose((()=>e.stopCommand(o))),i.setContent(null!=n?n:""),i.refresh(),setTimeout((()=>i.focus()),0)},stop(){e.Modal.close()},getContainer(){if(!this.container){const o=this.getCodeViewer(),a=document.createElement("div");if(a.className="".concat(n,"import-container"),i){const e=document.createElement("div");e.className="".concat(n,"import-label"),e.innerHTML=i,a.appendChild(e)}a.appendChild(o.getElement());const d=document.createElement("button");d.type="button",d.innerHTML=t.modalImportButton,d.className="".concat(n,"btn-prim ").concat(n,"btn-import"),d.onclick=()=>{e.Css.clear(),e.setComponents(o.getContent().trim()),e.Modal.close()},a.appendChild(d),this.container=a}return this.container},getCodeViewer(){return this.codeViewer||(this.codeViewer=e.CodeManager.createViewer({codeName:"htmlmixed",theme:"hopscotch",readOnly:!1,...t.importViewerOptions})),this.codeViewer}})}(e,t),l(e,t),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=e.Commands,c=t.textCleanCanvas;o.add(n,{run:e=>e.setDevice("Desktop"),stop:()=>{}}),o.add(i,{run:e=>e.setDevice("Tablet"),stop:()=>{}}),o.add(a,{run:e=>e.setDevice("Mobile portrait"),stop:()=>{}}),o.add(d,(e=>confirm(c)&&e.runCommand("core:canvas-clear")))}(e,t),r(e,t)},m={'grapesjs-sokeio-builder':{}},p=function(e){const t={i18n:{},modalImportTitle:"Import",modalImportButton:"Import",modalImportLabel:"",modalImportContent:"",importViewerOptions:{},textCleanCanvas:"Are you sure you want to clear the canvas?",showStylesOnChange:!0,useCustomTheme:!0,titleTemplateManager:"Template Manager",urlTemplateManager:"",useRenderShortcode:!1,...arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}};!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const c=e.Panels;t.showDevices=!1;const l="sw-visibility",r="export-template",s="fullscreen",m="preview",p='style="display: block; max-width:22px"';console.log("grapesjs-sokeio"),c.getPanels().reset([{id:"commands",el:".sokeio-builder-manager .commands-panel-manager",buttons:[{}]},{id:"devices-c",el:".sokeio-builder-manager .devices-panel-manager",buttons:[{id:n,command:n,active:!0,label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M21,16H3V4H21M21,2H3C1.89,2 1,2.89 1,4V16A2,2 0 0,0 3,18H10V20H8V22H16V20H14V18H21A2,2 0 0,0 23,16V4C23,2.89 22.1,2 21,2Z\" />\n      </svg>")},{id:i,command:i,label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M19,18H5V6H19M21,4H3C1.89,4 1,4.89 1,6V18A2,2 0 0,0 3,20H21A2,2 0 0,0 23,18V6C23,4.89 22.1,4 21,4Z\" />\n      </svg>")},{id:a,command:a,label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z\" />\n      </svg>")}]},{id:"options",el:".sokeio-builder-manager .options-panel-manager",buttons:[{id:l,command:l,context:l,label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n      <path fill=\"currentColor\" d=\"M15,5H17V3H15M15,21H17V19H15M11,5H13V3H11M19,5H21V3H19M19,9H21V7H19M19,21H21V19H19M19,13H21V11H19M19,17H21V15H19M3,5H5V3H3M3,9H5V7H3M3,13H5V11H3M3,17H5V15H3M3,21H5V19H3M11,21H13V19H11M7,21H9V19H7M7,5H9V3H7V5Z\" />\n  </svg>")},{id:m,context:m,command:()=>e.runCommand(m),label:"<svg ".concat(p," viewBox=\"0 0 24 24\"><path fill=\"currentColor\" d=\"M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z\"></path></svg>")},{id:s,command:s,context:s,label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5,5H10V7H7V10H5V5M14,5H19V10H17V7H14V5M17,14H19V19H14V17H17V14M10,17V19H5V14H7V17H10Z\" />\n      </svg>")},{id:r,command:()=>e.runCommand(r),label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z\" />\n      </svg>")},{id:"undo",command:()=>e.runCommand("core:undo"),label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M20 13.5C20 17.09 17.09 20 13.5 20H6V18H13.5C16 18 18 16 18 13.5S16 9 13.5 9H7.83L10.91 12.09L9.5 13.5L4 8L9.5 2.5L10.92 3.91L7.83 7H13.5C17.09 7 20 9.91 20 13.5Z\" />\n      </svg>")},{id:"redo",command:()=>e.runCommand("core:redo"),label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M10.5 18H18V20H10.5C6.91 20 4 17.09 4 13.5S6.91 7 10.5 7H16.17L13.08 3.91L14.5 2.5L20 8L14.5 13.5L13.09 12.09L16.17 9H10.5C8 9 6 11 6 13.5S8 18 10.5 18Z\" />\n      </svg>")},{id:o,command:()=>e.runCommand(o),label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n          <path fill=\"currentColor\" d=\"M5,20H19V18H5M19,9H15V3H9V9H5L12,16L19,9Z\" />\n      </svg>")},{id:d,command:()=>e.runCommand(d),label:"<svg ".concat(p," viewBox=\"0 0 24 24\">\n            <path fill=\"currentColor\" d=\"M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z\" />\n        </svg>")},{id:"save-builder-html",className:"fa fa-save",command:"sokeio-builder-save-data",label:"<span style='margin-left: 5px;'>Publish</span>",attributes:{title:"Publish"}}]}])}(e,t),s(e,t),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const o=e.Components,{useRenderShortcode:n}=(e.Commands,e.Config.stylePrefix,t);o.addType("shortcode",{isComponent:e=>0==e.childElementCount&&c.test(e.innerText),model:{defaults:{tagName:"",name:"shortcode",draggable:!0,droppable:!1,removed:!1,content:'<div data-gjs-type="shortcode"></div>'}},view:{async onRender(t){let{model:o}=t,i=this.el.innerHTML;if(n&&(c.test(i)||c.test(o.content))){var a;let t=null===(a=Alpine.closestRoot(e.editorView.$el[0]))||void 0===a?void 0:a.getAttribute("wire:id");if(t){let e=this.el.innerHTML;c.test(o.content)&&(e=o.content);let n=await Livewire.find(t).ConvertShortcodeToHtml(e);"shortcode"===this.el.getAttribute("data-gjs-type")?(this.el.innerHTML="".concat(n),this.el.setAttribute("data-shortcode",encodeURIComponent(i))):(this.el.innerHTML="<div data-gjs-type=\"shortcode\">".concat(n,"</div>"),this.el.setAttribute("data-shortcode",encodeURIComponent('<div data-gjs-type="shortcode">'+i+"</div>")))}}}}}),e.on("component:styleUpdate",(function(e){e&&"shortcode"===e.get("type")&&e.set({style:{"min-height":"50px",padding:"20px",border:"1px dashed #ccc","background-color":"rgba(0,0,0,0.1)"}})}))}(e,t),function(e){e.BlockManager.add("shortcode",{label:"ShortCode",category:"Common",content:'<div data-gjs-type="shortcode"></div>',media:'<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M80 104a24 24 0 1 0 0-48 24 24 0 1 0 0 48zm80-24c0 32.8-19.7 61-48 73.3V192c0 17.7 14.3 32 32 32H304c17.7 0 32-14.3 32-32V153.3C307.7 141 288 112.8 288 80c0-44.2 35.8-80 80-80s80 35.8 80 80c0 32.8-19.7 61-48 73.3V192c0 53-43 96-96 96H256v70.7c28.3 12.3 48 40.5 48 73.3c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-32.8 19.7-61 48-73.3V288H144c-53 0-96-43-96-96V153.3C19.7 141 0 112.8 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48zM248 432a24 24 0 1 0 -48 0 24 24 0 1 0 48 0z"/></svg>'})}(e),e.I18n&&e.I18n.addMessages({en:m,...t.i18n}),e.on("component:selected",(function(t){if(t&&"shortcode"===t.get("type"))return void e.runCommand("open-shortcode-dialog",t);const o="open-template-dialog",n=e.getSelected(),i=n.get("toolbar");i.some((e=>e.command===o))||(console.log(i),n.set({toolbar:[{label:'<svg xmlns="http://www.w3.org/2000/svg" height="2em" viewBox="0 0 448 512">\x3c!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --\x3e<path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM200 344V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H248v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>',command:o},...i]}))})),e.on("component:deselected",(function(e){var t;null===(t=e.view.el.querySelector(".div-builder-component-plus"))||void 0===t||t.remove()})),e.on("component:dblclick",(function(t){t&&"shortcode"===t.get("type")&&e.runCommand("open-shortcode-dialog",t)})),e.on("block:drag:stop",(function(t){t&&"shortcode"===t.get("type")&&e.runCommand("open-shortcode-dialog",t)}))};return t})()));
//# sourceMappingURL=index.js.map