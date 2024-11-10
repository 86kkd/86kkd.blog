# Neovim Configuration

## The most important things
install nvim-treesitter-cli in mason(for astro neovim)
```vim
:MasonInstall tree-sitter-cli
```

set number
```vim
:set number
```

set relativenumber
```vim
:set relativenumber
```

toggle relativenumber
```vim
set rnu
set rnu!
```

open file whith gbk encoding 
```vim
:e ++env=gbk yuewei_file_testDlg.cpp
```

trans gbk encoding to utf-8 
```vim
:e ++env=gbk|set fileencoding=utf-8|w
```
