# ntfs系统中执行命令后文件的所有者没有更改

## 原因

NTFS 文件系统（Windows 的文件系统）与 Linux 原生的文件系统（如 ext4、xfs 等）在设计上有不同的权限和所有者管理机制。NTFS 文件系统并不完全支持 Linux 的 Unix 权限模型，因此在 NTFS 分区上使用 chown 和 chmod 命令通常不会生效。

- 具体来说：

  1. NTFS 不支持 Unix 风格的所有者和权限修改：

      - NTFS 文件系统不存储与 Unix 权限模型兼容的所有者（owner）、组（group）和权限（permissions）信息。
      - 当在 Linux 中挂载 NTFS 分区时，文件的所有者和权限是通过挂载选项模拟的，而不是存储在文件系统中的。
      - 因此，尝试使用 chown 或 chmod 命令更改 NTFS 分区上的文件所有者和权限不会起作用，因为这些更改无法写入 NTFS 文件系统。

  2. Linux 对 NTFS 的支持是通过 FUSE（Filesystem in Userspace）和 ntfs-3g 驱动实现的：

      - ntfs-3g 驱动程序提供了对 NTFS 文件系统的读写支持，但它使用的权限模型是模拟的，主要通过挂载时指定的选项来控制。
      - 这些选项包括指定默认的文件所有者、组和权限掩码。

## 解决方案：

要在 NTFS 分区上正确地设置文件的所有者、组和权限，需要在 挂载时 指定相应的挂载选项，而不是尝试在挂载后修改文件的属性。

- 在挂载 NTFS 分区时指定文件的所有者和权限

  使用 mount 命令并指定挂载选项 uid、gid、umask、dmask 和 fmask，这些选项可以控制在挂载后，文件系统中所有文件和目录的所有者、组和权限。

- 挂载命令示例：
```bash
sudo mount -t ntfs-3g /dev/sdXN /mnt/ntfs_partition -o uid=1000,gid=1000,umask=0022
```

- 解释

  umask 的格式是四位八进制数，其中每一位代表不同的权限：

  - 第一位（特殊权限位）： 通常为 0，可以忽略。
  - 第二位（所有者权限）： 对应 rwx 三个权限位。
  - 第三位（组权限）： 对应 rwx 三个权限位。
  - 第四位（其他用户权限）： 对应 rwx 三个权限位。

- umask示例计算：

  umask=0022

  - 文件权限： 666 - 022 = 644

    即 rw-r--r--（所有者可读写，组和其他用户只读）

  - 目录权限： 777 - 022 = 755

    即 rwxr-xr-x（所有者可读写执行，组和其他用户可读执行）



2. 获取用户的 UID 和 GID： 

```bash
id -u linda   # 获取用户 linda 的 UID
id -g linda   # 获取用户 linda 的 GID
```
