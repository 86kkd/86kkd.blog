import{_ as i,o as a,c as e,a2 as n}from"./chunks/framework.DVP6llhD.js";const c=JSON.parse('{"title":"Neovim Configuration","description":"","frontmatter":{},"headers":[],"relativePath":"neovim/nvim.md","filePath":"neovim/nvim.md","lastUpdated":1731208116000}'),t={name:"neovim/nvim.md"};function l(p,s,h,r,d,o){return a(),e("div",null,s[0]||(s[0]=[n(`<h1 id="neovim-configuration" tabindex="-1">Neovim Configuration <a class="header-anchor" href="#neovim-configuration" aria-label="Permalink to &quot;Neovim Configuration&quot;">​</a></h1><h2 id="the-most-important-things" tabindex="-1">The most important things <a class="header-anchor" href="#the-most-important-things" aria-label="Permalink to &quot;The most important things&quot;">​</a></h2><p>install nvim-treesitter-cli in mason(for astro neovim)</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:MasonInstall tree-sitter-cli</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>set number</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>set relativenumber</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> relativenumber</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>toggle relativenumber</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rnu</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> rnu</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>open file whith gbk encoding</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gbk yuewei_file_testDlg.cpp</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>trans gbk encoding to utf-8</p><div class="language-vim vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">vim</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">env</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">gbk|</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">set</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> fileencoding</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">utf-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">|w</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,14)]))}const m=i(t,[["render",l]]);export{c as __pageData,m as default};
