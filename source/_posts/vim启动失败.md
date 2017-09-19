---
title: vim启动失败`Library not loaded `
date: 2016-06-15 12:06:26
tags:
---

## 问题

```
`=\> vim .vimrc
dyld: Library not loaded: /usr/local/lib/libruby.2.2.0.dylib
  Referenced from: /usr/local/bin/vim
  Reason: image not found
[1]()    85018 trace trap  vim .vimrc
```
\`
## 解决办法
```
`brew update
brew uninstall --force ruby
brew uninstall --force openssl
brew install openssl
brew link openssl --force
brew install rbenv
rbenv install 2.2.0
rbenv global 2.2.0
echo 'export PATH=/usr/local/bin:$PATH' \>\> /.zshrc
echo 'export PATH=$HOME/.rbenv/shims:$PATH' \>\> /.zshrc
CONFIGURE_OPTS="--disable-install-rdoc --enable-shared" rbenv install 2.2.0
sudo ln -s /.rbenv/versions/2.2.0 /usr/local/opt/ruby
```
\`
再重装vim

`sudo brew install vim`

据说`brew update`失败的解决办法也是`brew update`，🙄️。
