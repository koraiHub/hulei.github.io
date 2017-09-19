---
title: 一个有趣的this指向问题
date: 2016-07-27 10:39:55
tags:
---
	let obj = {
		test: ()=>{
			console.log(this)
		}
	}
	obj.test() // this -> ？
	(obj.test = obj.test)() // this -> ？
	(false || obj.test)() // this -> ？

这里考察了多个知识点。

* 谁调用了this就指向谁
* 匿名函数this指向window（特指在浏览器中）
* 赋值语句返回__右值__
* 逻辑或语句返回从左到右第一个真值，否则返回最后一个值

理解了这几条再回头看问题就很简单了。

三个this分别指向obj, window, window
