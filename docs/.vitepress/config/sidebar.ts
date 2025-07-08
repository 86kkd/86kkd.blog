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

// 算法文档侧边栏
const algorithmDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'Algorithm',
    resolvePath: '/Algorithm/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/Algorithm'
);

// CV文档侧边栏
const cvDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'Algorithm/cv',
    resolvePath: '/Algorithm/cv/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/Algorithm/cv'
);

// 强化学习文档侧边栏
const rlDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'Algorithm/rl',
    resolvePath: '/Algorithm/rl/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/Algorithm/rl'
);

// 技巧文档侧边栏
const tricksDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'tricks',
    resolvePath: '/tricks/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/tricks'
);

// 开发文档侧边栏
const developmentDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'Development',
    resolvePath: '/Development/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/Development'
);

// DIY文档侧边栏
const diyDoc = transformSidebarItems(
  generateSidebar({
    documentRootPath: 'docs',
    scanStartPath: 'DIY',
    resolvePath: '/DIY/',
    useTitleFromFrontmatter: true,
    useTitleFromFileHeading: true,
  }) as NavItem[],
  '/DIY'
);

// 简化调试输出
console.log('CV sidebar links:', cvDoc.map(item => item.link));
console.log('RL sidebar links:', rlDoc.map(item => item.link));

// 侧边栏配置
const sidebarConfig: DefaultTheme.Sidebar = {
  '/Algorithm/': [
    {
      text: 'Algorithm',
      items: algorithmDoc
    }
  ],
  '/Algorithm/cv/': [
    {
      text: 'Computer Vision',
      items: cvDoc
    }
  ],
  '/Algorithm/rl/': [
    {
      text: 'Reinforcement Learning',
      items: rlDoc
    }
  ],
  '/tricks/': [
    {
      text: 'Tricks',
      items: tricksDoc
    }
  ],
  '/Development/': [
    {
      text: 'Development',
      items: developmentDoc
    }
  ],
  '/DIY/': [
    {
      text: 'DIY',
      items: diyDoc
    }
  ]
};

export default sidebarConfig;
