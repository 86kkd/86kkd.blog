# 获取当前路径字符串
$paths = @(
    'C:\Windows\system32',
    'C:\Windows',
    'C:\Windows\System32\Wbem',
    'C:\Windows\System32\WindowsPowerShell\v1.0',
    'C:\Program Files',
    'C:\Program Files (x86)',
    'C:\Program Files\Common Files',
    'C:\DLL\ncnn-20220216-windows-vs2019\x64\bin',
    'C:\pnnx\ncnn-pnnx\tools\pnnx\build\install\bin',
    'C:\Program Files (x86)\Microsoft Visual Studio\2019\Community\MSBuild\Current\Bin',
    'C:\Scoop\shims',
    'C:\Users\yview\AppData\Local\Microsoft\WindowsApps',
    'C:\Program Files\Wireshark',
    'C:\gstreamer\1.0\msvc_x86_64\bin'
)

# 去重并过滤空值
$uniquePaths = $paths | Select-Object -Unique | Where-Object { $_ -and $_.Trim() }

# 合并为新的路径字符串
$newPath = $uniquePaths -join ';'

# 设置新的环境变量
[Environment]::SetEnvironmentVariable('Path', $newPath, 'Machine')

# 显示更新后的环境变量（格式化输出）
Write-Host "更新后的环境变量（按类别分组）："
Write-Host "`n系统核心路径："
$paths | Where-Object { $_ -like "*Windows*" } | ForEach-Object { "  $_" }

Write-Host "`n程序文件路径："
$paths | Where-Object { $_ -like "*Program Files*" } | ForEach-Object { "  $_" }

Write-Host "`n开发工具路径："
$paths | Where-Object { 
    $_ -like "*Visual Studio*" -or 
    $_ -like "*DLL*" -or 
    $_ -like "*pnnx*" -or
    $_ -like "*gstreamer*"
} | ForEach-Object { "  $_" }

Write-Host "`n用户应用路径："
$paths | Where-Object { 
    $_ -like "*Users*" -or 
    $_ -like "*Scoop*" -or
    $_ -like "*Wireshark*"
} | ForEach-Object { "  $_" }
