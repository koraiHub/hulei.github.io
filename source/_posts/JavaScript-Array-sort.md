---
title: JavaScript Array.sort
date: 2016-11-25 21:45:04
tags:
---

今天用js重温了几种排序算法，发现个很有意思的网站：[几种排序算法的动画演示](http://jsdo.it/norahiko/oxIy/fullscreen)

一直以来对`Array.sort`有个不痛不痒的误解，认为它底层用了快速排序。实际上呢，这个api有时候用了快速排序、有时候用了归并排序、还有时候用了选择排序，取决于作用的数组对象，以及引擎。

之所以引擎会有不同的实现， 是因为ECMAscript压根没规定要用什么算法实现。好奇心驱使检索了一会。

---

只所以有之前的误解是因为，既然快速排序被认可为已知的排序算法中最快的，有什么理由不用呢。反过来想，也许不用的理由也很简单，大概和快速排序本身是不稳定算法有关。



在v8（chrome）里，作用在长度小于23的数组上用的是插入排序，而大于23的采用的是快速排序。

快排的不稳定在于基准元素的选择和比较的方式，可能造成值相同的元素在排序后相对位置发生了变化，Safari、Firefox这两的引擎表示不能接受，选择了用归并排序来实现。

> ```
> The array is sorted on the key correctly, but where there are duplicate values
> for the key, the original order is NOT preserved.
> ```

来自多年前Bugzilla上的这篇[report](https://bugzilla.mozilla.org/show_bug.cgi?id=224128)。一个叫*Martin Thomson*的人提出的bug。

IE的实现则同样是稳定排序（测试如此），不过并没有找到用了什么排序方法。

---

引擎背后的实现其实不必太关心。

sort的使用来复习一遍。列一个很多不熟悉Api的程序员常犯的错误，唯一的一个可选的参数并不是断言，该函数需要返回三个可能的值，例：

```Javascript
foo.sort((a, b)=>{return a -  b})
```

* 若返回值大于0，a在b后
* 若返回值等于0，位置不变
* 若返回值小于0，a在b前

如果传入断言，返回值只可能大于0或等于0，显然得不到想要的结果。

并且要注意的是，这里比较的是数组元素的unicode编码，忽略这一点会对下面这个数组的排序疑惑（并不是想像中的从小到大排序）。

```Javascript
[2,1,10].sort() // [1,10,2]
```

（完）