import { defineConfig } from "vitepress";
import themeConfig from "./theme";
import head from "./head";
import { markdown } from './markdown'
import { DESCRIPTION as description, LANG as lang, TITLE as title } from "./info";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  description,
  head,
  ignoreDeadLinks: true, // TODO: remove this line when all links are fixed
  lang,
  lastUpdated: true,
  markdown: {
    ...markdown // 合并自定义的 markdown 配置
  },
  themeConfig,
  title
});
