import Typography from 'windicss/plugin/typography'
import { defineConfig } from 'windicss/helpers'
import plugin from 'windicss/plugin'

plugin(({ addVariant }) => {
  addVariant('pointer-group-hover', ({ modifySelectors }) => {
    return modifySelectors(({ className }) => {
      return `.no-touch .group:hover .${className}`
    })
  })
})

export default defineConfig({
	darkMode: 'class',
	attributify: false, // 属性化css，默认关闭
	plugins: [Typography],
})
