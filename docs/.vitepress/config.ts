import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import vueJsx from '@vitejs/plugin-vue-jsx'
import sidebar from './configs/sidebar'
import nav from './configs/nav'

export default defineConfig({
  title: 'Pomelo-UI',
  themeConfig: {
    sidebar,
    nav,
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/raoanqi/pomelo-vue-ui'
      }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023 Angelo'
    }
  },
  markdown: {
    config: md => {
      md.use(demoblockPlugin, {})
    }
  },
  vite: {
    plugins: [demoblockVitePlugin(), vueJsx()]
  }
})
