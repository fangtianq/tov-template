import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import App from './App.vue'

const app = createApp(App)

app.config.globalProperties.全局变量 = "全局变量"

app.mount('#app')
