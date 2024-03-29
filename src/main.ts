import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// 你自定义的 css
import './styles/main.css'

import 'virtual:windi-utilities.css'
import 'virtual:windi-devtools'

import directiveImagePreviewer from 'vue3-directive-image-previewer'

import App from './App.vue'

const app = createApp(App)

app.directive("directiveImagePreviewer", directiveImagePreviewer);
app.config.globalProperties.全局变量 = "quanjubianliang"

app.mount('#app')
