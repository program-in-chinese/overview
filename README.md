## 使用中文编写代码

大胆假设:以中文为母语的所有程序员,从事的项目中,90%是单人项目(*),剩下的10%中,90%只有同样是中文为母语的程序员参与.这样,只有1%的项目有用英文写代码的硬性需要.为了这1%的需要,而在剩下的99%中使用英文,得不偿失.
欢迎[畅所欲言](../../issues/new).

### 关键词为英文的编程语言对中文代码的支持

| 支持(在[知乎回答](https://www.zhihu.com/question/26071216/answer/143429606)中引用) | [C](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E4%BD%A0%E5%A5%BD.c), [Java](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E5%A4%A7%E5%AE%B6%E5%A5%BD.java), [JavaScript](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.js), [C#](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E5%A4%A7%E5%AE%B6%E5%A5%BD.cs), [PHP](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.php), [Python 3](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.py), [Go](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.go), [Scala](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.scala), [FASM](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E4%BD%A0%E5%A5%BD.asm), [Perl](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.pl), [Ruby](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.rb), [Common Lisp](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.lisp), [CoffeeScript](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/%E6%96%90%E6%B3%A2%E9%82%A3%E5%A5%91.coffee), [Sqlite3](%E7%A4%BA%E4%BE%8B%E4%BB%A3%E7%A0%81/sqlite%E8%84%9A%E6%9C%AC) |
| ------------- | ------------- |
| 不支持 | C++(gcc 4.3.2), Python 2 |

### 关键词为中文的编程语言和开发环境

| 实用 | [易语言](http://www.dywt.com.cn/)，[按键精灵](http://www.anjian.com/)，[TC简单程序开发](http://www1.tyuyan.net/)，[习语言](http://blog.163.com/xiyuyan@yeah/) |
| ------------- | ------------- |
| 先驱 | [中蟒](http://www.chinesepython.org/) [周蟒](https://code.google.com/archive/p/zhpy/) |
| 实验 | 定义中文关键词：[iOS开发](https://github.com/uxyheaven/yi-ios)，[iOS中文编程](https://github.com/xueyongwei/ePlus), [Coffeescript](https://github.com/nobodxbodon/coffeescript) |
| 待考证 | [标天汇编](http://www.onlinedown.net/soft/50298.htm)([备份](http://www.jgegd.com/biaotian/btasm/btasm.zip)) |

### 实用开源项目:

| 英文关键词语言 | 中文关键词语言 | 
| ------------- | ------------- |
| (虚位以待) | [易语言](http://www.5a5x.com/wode_source/etrade/) |

### 实验开源项目:
[Java](../../../Java#%E5%AE%9E%E9%AA%8C%E5%BC%80%E6%BA%90%E9%A1%B9%E7%9B%AE)

### 中文开发常见技术问题
- 频繁切换中英文: 为了在输入中文的同时不用切换就可以输入特殊符号(){};等等, 搜狗输入法支持"中文时使用英文标点"

### 质疑与回应
(转载)[发展中文编程的意义：让大众化编程促进软件产业的建设](http://www.hystudio.net/726.html)已对很多质疑作出了[回应](http://www.hystudio.net/726.html#jieda)

- **如果关键词还是英文, 用中文命名就没有意义**

答: 用中文命名带来的好处(见下)是不分编程语言的. 另外, 至少短期内(5-10年), 英文关键词的编程语言还将在市场中占有不可忽视的份额.

- **中文输入太慢, 降低开发效率**

答: 鉴于开发过程在整个软件生存周期中只占一小部分, 其他的部分(设计,调试,测试,维护)从良好的可读性获取的利远大于开发效率降低的弊. 短期内,使用支持中英文混输的输入法能够减轻负担. 

- **会有各种汉字编码问题导致乱码**

答：多数问题能通过使用UTF-8编码避免. 汉字编码问题不仅限于代码, 使用的越少越不利于问题解决

- **看多了中文程序会影响英文学习，以及程序员前程**

答：就像搞学术的需要的时候自然逼着看英文刊物，有硬性需要的时候自然会去看国外网站。如果这就会影响，那么也许本来就不那么需要。

##### *根据[Fun with GitHub repositories statistics](https://blog.sourced.tech/post/github_stats/), github上的1-contributor repository大约是60%. 当然还有很多项目没有开源. 上面的90%仍然是假设.

### 参考资料
[Unicode in Ruby, Perl, Python, JavaScript, Java, Emacs Lisp, Mathematica](http://xahlee.info/comp/unicode_support_ruby_python_elisp.html)
