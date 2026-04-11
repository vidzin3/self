import { Icon } from "@iconify/vue/dist/iconify.js"

export const registerComponents = (app) => {
    // const components = import.meta.glob('@/components',{ eager: true })

    // Object.entries(components).forEach(([path,definition]) => {
    //     const componentName = path
    //         .split("/")
    //         .pop()
    //         .replace(/\.\w+$/, "");

    //     // Register component on this Vue instance
    //     app.component(componentName, definition.default);
    // })
    app.component('Icon', Icon)
}