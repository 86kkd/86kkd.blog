// .vitepress/config/markdown.ts
import mathjax3 from 'markdown-it-mathjax3'

export const markdown = {
  lineNumbers: true,
  config: (md) => {
    md.use(mathjax3)
  }
}
