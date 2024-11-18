
    Install Oh My Zsh:

复制
# Using curl
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

# Or using wget
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

dit your ~/.zshrc and find the plugins line. Here are some must-have plugins:

复制
plugins=(
    git                 # Git aliases and functions
    zsh-autosuggestions # Fish-like autosuggestions
    zsh-syntax-highlighting # Syntax highlighting while typing
    autojump           # Jump to directories with j command
    docker             # Docker aliases and completion
    sudo               # Press ESC twice to add sudo to current command
    history            # Enhanced history command
    dirhistory         # Navigate directory history with Alt+Left/Right
    copypath           # Copy current directory path to clipboard
    copyfile           # Copy file contents to clipboard
)


    Install additional plugins:

复制
# zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# zsh-syntax-highlighting
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

# autojump
# For Ubuntu/Debian
sudo apt install autojump


    Install a Theme (Optional but Recommended):

复制
# Install Powerlevel10k (one of the most popular themes)
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

# Then edit ~/.zshrc and set
ZSH_THEME="powerlevel10k/powerlevel10k"




    首先，eza 可以通过 cargo（Rust 的包管理器）安装，或者通过特定的 PPA。我建议使用 cargo 安装，因为这是最直接的方法。

    如果你还没有安装 cargo，首先安装 Rust 工具链：

复制
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
cargo install eza
cargo install yazi-fm


    Oh My Zsh 的 conda-zsh-completion 插件

首先安装 conda-zsh-completion：

复制
# 克隆仓库到 Oh My Zsh 的自定义插件目录
git clone https://github.com/esc/conda-zsh-completion ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/conda-zsh-completion

编辑 ~/.zshrc，添加插件：

复制
plugins=(... conda-zsh-completion)

# 添加自动补全设置
autoload -U compinit && compinit

    添加有用的别名

在 ~/.zshrc 中添加：

复制
# Conda 环境管理别名
alias ca='conda activate'
alias cda='conda deactivate'
alias cl='conda env list'
alias cc='conda create -n'
alias cr='conda remove -n'

# Conda 包管理别名
alias ci='conda install'
alias cu='conda update'
alias cs='conda search'
alias clist='conda list'

# 环境导出和克隆
alias cex='conda env export > environment.yml'
alias ccr='conda env create -f environment.yml'

    添加环境提示符定制

在 ~/.zshrc 中添加：

复制
# 在提示符中显示 conda 环境名称
POWERLEVEL9K_CUSTOM_CONDA="echo \$CONDA_DEFAULT_ENV"
POWERLEVEL9K_CUSTOM_CONDA_BACKGROUND="blue"
POWERLEVEL9K_CUSTOM_CONDA_FOREGROUND="white"

    补全优化

复制
# 改进的补全设置
zstyle ':completion::complete:*' use-cache 1
zstyle ":conda_zsh_completion:*" use-groups true
zstyle ":conda_zsh_completion:*" show-unnamed true

    性能优化

复制
# 禁用 conda 自动激活 base 环境
conda config --set auto_activate_base false

# 加速 conda 操作
conda config --set channel_priority strict


