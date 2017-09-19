---
title: git diff使用
date: 2016-10-09 11:02:24
tags:
---

​ diff命令平时没少用，但一直使用的只有下面两条：

* 比较分支：`git diff master..another`


* 查看目前修改了的内容：仅输入`git diff`


  实际上，diff是个很强大的命令，能够找出项目里任意两次提交之间的改动。

  \#\# 已经添加到暂存区的修改

  `git diff --cached`

  没有`--cached`选项的命令查看工作区修改，而上面的命令用户查看暂存区的修改和本地当前索引间的差异，不难理解，在下一次commit时提交的就是这些内容。

  \#\# 当前索引与上一次提交之间的差别

  `git diff HEAD`

  \#\# 当前文件目录与另一个分支之间的差别

  `git diff branchname`

  \#\# 路径限定符`—`

  `git diff — app.js`，`git diff -- xxx`

  上面第一个命令显示了我对app.js文件的修改。第二个命令显示了xxx目录下(如果xxx是目录名的话)所有文件的修改。

  \#\# 综合使用

  结合以上命令，如果有这样的需求：查看根目录app.js文件在分支A和分支B有什么不同，就可以用下面这个命令。

  `git diff A..B -- app.js`

