class l{_manager;getKey(){return""}manager(g){this._manager=g}getManager(){return this._manager}register(){}booting(){}booted(){}dispose(){}}class p extends l{getKey(){return"SOKEIO_LIVEWIRE_GRAPESJS_MODULE"}booting(){if(window.Livewire){let n=this.getManager();const _=e=>{var a=document.createElement("div");a.innerHTML=e;var s=a.querySelector(".div-builder-component-plus");return s&&s.parentNode.removeChild(s),a.innerHTML};window.Livewire.directive("grapesjs",({el:e,directive:a,component:s})=>{if(a.modifiers.length>0||e.livewire____grapesjs)return;let t={};e.hasAttribute("wire:grapesjs.options")&&(t=new Function(`return ${e.getAttribute("wire:grapesjs.options")};`)());const o=t.pluginManager??[];t?.pluginManager&&(t={...t,pluginManager:void 0});const d=()=>{e.livewire____grapesjs||(e.livewire____grapesjs=grapesjs.init({container:e,storageManager:!1,style:n.dataGet(s.$wire,"form.css"),components:n.dataGet(s.$wire,"form.content"),...t,plugins:o.map(function(r){return r.name}),pluginsOpts:o.reduce(function(r,i){return r[i.name]=i.options??{},r},{}),pages:!1,assetManager:{custom:{open(r){window.showFileManager(function(i){console.log(i[0].url),r.select(i[0].url),r.close()})},close(r){}}}}),e.livewire____grapesjs.Commands.add("sokeio-builder-save-data",{run:async function(r,i){i&&i.set("active",0),s.$wire.doSaveBuilder()}}),e.livewire____grapesjs.on("change",function(){n.dataSet(s.$wire,"form.css",e.livewire____grapesjs.getCss()),n.dataSet(s.$wire,"form.content",_(e.livewire____grapesjs.getHtml())),n.dataSet(s.$wire,"form.js",e.livewire____grapesjs.getJs())}),e.livewire____grapesjs.on("load",function(){}),e.livewire____grapesjs.on("stop:preview",()=>{e.closest(".sokeio-builder-manager").classList.remove("sokeio-builder-preview")}),e.livewire____grapesjs.on("run:preview",()=>{e.closest(".sokeio-builder-manager").classList.add("sokeio-builder-preview")}))};window.grapesjs?d():(window.SokeioLoadStyle("https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/css/grapes.min.css",...o.reduce(function(r,i){return[...r,...i.css??[]]},[])),window.SokeioLoadScript(["https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/grapes.min.js",...o.reduce(function(r,i){return[...r,...i.js??[]]},[])]).then(function(){d()}))})}}}window.addEventListener("sokeio::register",function(){SokeioManager.registerPlugin(p)});
