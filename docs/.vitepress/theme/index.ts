// noinspection JSUnusedGlobalSymbols
import { h, defineComponent } from 'vue'
import DefaultTheme from "vitepress/theme"
import { inject } from '@vercel/analytics'
import "./style/theme.css"
import "./style/font.css"
import "./style/vars.css"
import "./style/global.css"

// 初始化 Vercel Analytics
inject()

console.log("Code licensed under MIT, documentation under CC BY-SA 4.0.")

export default {
  extends: DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
  }
}

