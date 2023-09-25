import { BytePlugin } from "../core/plugin";

export class LiveWireGrapesJSModule extends BytePlugin {
  getKey() {
    return "BYTE_LIVEWIRE_GRAPESJS_MODULE";
  }
  booting() {
    if (window.Livewire) {
      let self = this;
      let manager = self.getManager();
      window.Livewire.directive("grapesjs", ({ el, directive, component }) => {
        // Only fire this handler on the "root" directive.
        if (directive.modifiers.length > 0 || el.livewire____grapesjs) {
          return;
        }
        let options = {};
        if (el.hasAttribute("wire:grapesjs.options")) {
          options = new Function(
            `return ${el.getAttribute("wire:grapesjs.options")};`
          )();
        }
        const pluginManager = options.pluginManager ?? [];
        if (options?.pluginManager) {
          options = { ...options, pluginManager: undefined };
        }
        const grapesjsCreate = () => {
          if (!el.livewire____grapesjs) {
            el.livewire____grapesjs = grapesjs.init({
              // Indicate where to init the editor. You can also pass an HTMLElement
              container: el,
              storageManager: false,
              style: manager.dataGet(component.$wire, "form.css"),
              // HTML string or a JSON of components
              components: manager.dataGet(component.$wire, "form.content"),
              ...options,
              plugins: pluginManager.map(function (item) {
                return item.name;
              }),
              pluginsOpts: pluginManager.reduce(function (previous, current) {
                previous[current.name] = current.options ?? {};
                return previous;
              }, {}),
              pages: false,
            });
            el.livewire____grapesjs.Commands.add("byte-builder-save-data", {
              run: async function (editor, sender) {
                sender && sender.set("active", 0); // turn off the button
                manager.dataSet(
                  component.$wire,
                  "form.css",
                  el.livewire____grapesjs.getCss()
                );
                manager.dataSet(
                  component.$wire,
                  "form.conent",
                  el.livewire____grapesjs.getHtml()
                );
                manager.dataSet(
                  component.$wire,
                  "form.js",
                  el.livewire____grapesjs.getJs()
                );
                component.$wire.doSaveBuilder();
              },
            });
            el.livewire____grapesjs.on("load", function () {
              // console.log(el.livewire____grapesjs);
              // const deviceManager = el.livewire____grapesjs.DeviceManager;
              // const deviceManagerContainer = document.querySelector(
              //   ".byte-builder-manager .device-manager"
              // );
              // deviceManagerContainer.appendChild(deviceManager.render());
            });
            el.livewire____grapesjs.on("stop:preview", () => {
              // Xử lý khi sự kiện design xảy ra
              console.log('byte-builder-preview2');
              el.closest(".byte-builder-manager").classList.remove(
                "byte-builder-preview"
              );
            });
            el.livewire____grapesjs.on("run:preview", () => {
              // Xử lý khi sự kiện design xảy ra
              console.log('byte-builder-preview1')
              el.closest(".byte-builder-manager").classList.add(
                "byte-builder-preview"
              );
            });
          }
        };
        if (window.grapesjs) {
          grapesjsCreate();
        } else {
          window.ByteLoadStyle(
            "https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/css/grapes.min.css",
            ...pluginManager.reduce(function (previous, current) {
              return [...previous, ...(current.css ?? [])];
            }, [])
          );
          window
            .ByteLoadScript([
              "https://cdn.jsdelivr.net/npm/grapesjs@0.21.6/dist/grapes.min.js",
              ...pluginManager.reduce(function (previous, current) {
                return [...previous, ...(current.js ?? [])];
              }, []),
            ])
            .then(function () {
              grapesjsCreate();
            });
        }
      });
    }
  }
}
