中文输入法
```bash
sudo pacman -S fcitx5-im fcitx5-chinese-addons fcitx5-pinyin-zhwiki
```

时区对应的时间不正确
```bash
sudo pacman -S ntp
sudo ntpdate pool.ntp.org
# setting timezone
timedatectl set-timezone Asia/Shanghai
```
or 
```bash
sudo systemctl enable --now systemd-timesyncd
```

