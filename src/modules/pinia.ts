import type { App } from 'vue'
import piniaPersist from 'pinia-plugin-persist'
const pinia = createPinia();
pinia.use(piniaPersist);
export default (app: App) => app.use(pinia)
