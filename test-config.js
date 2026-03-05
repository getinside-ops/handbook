import { resolveConfig } from 'vitepress'
resolveConfig(process.cwd()).then(c => console.log(JSON.stringify(c.site.themeConfig, null, 2)))
