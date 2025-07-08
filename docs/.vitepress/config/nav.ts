import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "🧭 指南",
    items: [
      { text: "🎐 随笔", link: "/guide/" },
      {
        text: "🌱 杂项",
        items: [
          { text: "arch_tips", link: "/guide/prepare/arch_tips" },
          { text: "build_blog", link: "/guide/prepare/build_blog" },
          { text: "git", link: "/guide/prepare/git" },
          { text: "langchain", link: "langchain" },
          { text: "network", link: "network" },
        ]
      },
    ]
  },
  {
    text: "🤖 算法",
    items: [
      { text: "🏠 算法首页", link: "/Algorithm/" },
      { text: "👁️ 计算机视觉", link: "/Algorithm/cv/" },
      { text: "🎯 强化学习", link: "/Algorithm/rl/" },
    ]
  },
  {
    text: "💻 开发",
    items: [
      { text: "🏠 开发首页", link: "/Development/" },
      { text: "🔍 RAG", link: "/Development/rag/" },
      { text: "🌿 Git", link: "/Development/git/" },
    ]
  },
  {
    text: "🔧 DIY",
    items: [
      { text: "🛹 滑板项目", link: "/DIY/skateBoard" },
    ]
  },
  // {
  //   text: "🍰 写在后面",
  //   items: [
  //     { text: "贡献指南", link: "/postscript/contribute" },
  //     { text: "版权说明", link: "/postscript/copyright" },
  //     { text: "附录", link: "/postscript/about" }
  //   ]
  // }
];

export default navConfig;
