import 'ant-design-vue/dist/reset.css'
import '@/assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'

import Clipboard from 'v-clipboard'

import 'highlight.js/styles/stackoverflow-light.css'
import hljs from 'highlight.js/lib/core'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import json from 'highlight.js/lib/languages/json'
hljs.registerLanguage('json', json)

const app = createApp(App)
app.use(Clipboard)
app.use(hljsVuePlugin)
app.mount('#app')
