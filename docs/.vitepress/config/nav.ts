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
