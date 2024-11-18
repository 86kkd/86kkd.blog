import { DefaultTheme } from "vitepress";
import { generateSidebar } from 'vitepress-sidebar';

type NavItem = DefaultTheme.SidebarItem;

// 定义一个通用的转换函数
const transformSidebarItems = (items: NavItem[], basePath: string) =>
  items.map((item) => {
    if ('link' in item) {
      return {
        text: item.text,
        link: `${basePath}/${item.link}`
      };
    }
    return item;
  });

// 强化学习文档侧边栏
const rlDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'paper/rl',
    resolvePath: '/paper/rl',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/paper/rl'
);

// Windows 配置文档侧边栏
const winDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'winDoc',
    resolvePath: 'winDoc',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/winDoc'
);

// 侧边栏配置
const sidebarConfig: DefaultTheme.Sidebar = {
  '/paper/rl/': [
    {
      text: 'Reinforcement Learning',
      items: rlDoc
    }
  ],
  '/winDoc/': [
    {
      text: 'Windows Config',
      items: winDoc
    }
  ]
};

export default sidebarConfig;
