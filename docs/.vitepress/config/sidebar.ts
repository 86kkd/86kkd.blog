import { DefaultTheme } from "vitepress";
// `.vitepress/config.js`
import { generateSidebar } from 'vitepress-sidebar';

const sidebarConfig: DefaultTheme.Sidebar = generateSidebar({
  documentRootPath: '/docs',
  scanStartPath: '/paper/rl',
  basePath: 'paper/rl',
  // resolvePath: '/paper/',
  useTitleFromFileHeading: true,
  hyphenToSpace: true,
  // excludeFolders: ['vitepress-how-to']
  // resolvePath: null,
  // basePath: null,
});


export default sidebarConfig;
