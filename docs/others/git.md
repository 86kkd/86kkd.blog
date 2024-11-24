get the size of doc
```bash
du -h -d 2 | sort -rh
```
get the file size for git
```bash
git gc # 这个是打包的命令
git count-objects -vH
```

查看历史文件大小的命令
```bash
git rev-list --objects --all | 
                 git cat-file --batch-check='%(objecttype) %(objectname) %(objectsize) %(rest)' | 
                 sed -n 's/^blob //p' | 
                 sort -k2 -n -r | 
                 awk '
                     function human(x) {
                         if (x<1024) return x " B";
                         x/=1024;
                         if (x<1024) return sprintf("%.2f KiB", x);
                         x/=1024;
                         if (x<1024) return sprintf("%.2f MiB", x);
                         x/=1024;
                         return sprintf("%.2f GiB", x);
                     }
                     {printf "%s\t%s\t%s\n", $1, human($2), $3}
                 ' | 
                 head -n 100
```

清除gitcommit的历史pack 

::: warning

> 注意要取反 `--invert-paths`

:::

```bash
git filter-repo --path  ${documents_dir_is_ok} --invert-paths
```

删除大于某一阈值的所有文件
```bash
git filter-repo --strip-blobs-bigger-than 100M
```

停止跟踪文件
```bash
git update-index --assume-unchanged ${document_only_file}
```

恢复对文件的跟踪
```bash
git update-index --no-assume-unchanged ${document_only_file}

```
