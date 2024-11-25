确认 PSReadLine 模块安装

复制
Get-Module -Name PSReadLine -ListAvailable

    创建/编辑 PowerShell 配置文件 PowerShell 的配置文件位置在：

复制
$PROFILE

如果文件不存在，可以创建：

复制
New-Item -Path $PROFILE -Type File -Force

    配置 PSReadLine 使用文本编辑器打开 $PROFILE 文件，添加以下配置：

复制
# 导入 PSReadLine 模块
Import-Module PSReadLine

# 设置预测文本来源为历史记录
Set-PSReadLineOption -PredictionSource History

# 启用预测文本显示
Set-PSReadLineOption -PredictionViewStyle ListView

# 设置 Tab 键补全
Set-PSReadLineKeyHandler -Key Tab -Function Complete

# 设置向上箭头搜索历史记录
Set-PSReadLineKeyHandler -Key UpArrow -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key DownArrow -Function HistorySearchForward

# 设置 Ctrl+d 退出
Set-PSReadLineKeyHandler -Key Ctrl+d -Function DeleteCharOrExit

# 设置历史记录建议
Set-PSReadLineOption -HistorySearchCursorMovesToEnd

# 设置智能补全
Set-PSReadLineKeyHandler -Key "Ctrl+f" -Function ForwardWord
Set-PSReadLineKeyHandler -Key "Ctrl+b" -Function BackwardWord
Set-PSReadLineKeyHandler -Key "Ctrl+w" -Function BackwardDeleteWord

# 启用历史记录搜索功能
Set-PSReadLineOption -HistorySearchCursorMovesToEnd
Set-PSReadLineKeyHandler -Key "Ctrl+p" -Function HistorySearchBackward
Set-PSReadLineKeyHandler -Key "Ctrl+n" -Function HistorySearchForward

> [!NOTE]
> 常用快捷键说明：
> 
> Tab: 自动补全命令
> Ctrl + Space: 显示参数补全列表
> ↑/↓: 搜索历史命令
> Ctrl + r: 反向搜索历史命令
> Ctrl + d: 删除字符或退出
> Ctrl+f 向前移动一个词
> Ctrl+b 向后移动一个词
> Ctrl+w 删除前一个词
> Ctrl+p 向上搜索历史
> Ctrl+n 向下搜索历史

其他有用的配置选项：

复制
# 设置历史记录数量
Set-PSReadLineOption -MaximumHistoryCount 1000

# 启用命令行语法高亮
Set-PSReadLineOption -Colors @{
    Command = 'Yellow'
    Parameter = 'DarkGray'
    String = 'Green'
    Comment = 'DarkGreen'
}

    应用配置 配置完成后，需要重新启动 PowerShell 或执行：

复制
. $PROFILE
