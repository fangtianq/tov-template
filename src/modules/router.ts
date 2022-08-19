import type { App } from 'vue'
import fileRoutes from '~pages'
import { setupLayouts } from 'virtual:meta-layouts'
import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
	routes: setupLayouts(fileRoutes),
	history: createWebHistory(packageJson.config.name),
})
import { createGetRoutes } from 'virtual:meta-layouts'
const getRoutes = createGetRoutes(router)
// 获取路由表但是不包含布局路由
console.log(getRoutes())

export default (app: App) => app.use(router)
