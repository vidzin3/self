import { createApp } from 'vue'
import App from './App.vue'
import { registerServices } from './utils/registerService'
import { registerComponents } from './utils/registerComponent';

import "@/@iconify/icons-bundle";

import "@/styles/base.css"
import "@/styles/global.css"
import "@/assets/font.css"

const app = createApp(App)

registerServices(app)
registerComponents(app)

app.mount('#app')
