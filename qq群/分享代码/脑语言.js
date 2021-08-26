var 广库之全角半角 = `　	 
！	!
“	"
＃	#
＄	\\$
％	%
＆	&
‘	'
（	\\(
）	\\)
＊	\\*
＋	\\+
，	,
－	-
．	\\.
／	\/
０	0
１	1
２	2
３	3
４	4
５	5
６	6
７	7
８	8
９	9
：	:
；	;
＜	<
＝	=
＞	>
？	\\?
＠	@
Ａ	A
Ｂ	B
Ｃ	C
Ｄ	D
Ｅ	E
Ｆ	F
Ｇ	G
Ｈ	H
Ｉ	I
Ｊ	J
Ｋ	K
Ｌ	L
Ｍ	M
Ｎ	N
Ｏ	O
Ｐ	P
Ｑ	Q
Ｒ	R
Ｓ	S
Ｔ	T
Ｕ	U
Ｖ	V
Ｗ	W
Ｘ	X
Ｙ	Y
Ｚ	Z
［	\\[
＼	\\\
］	\\]
＾	\\^
＿	_
｀	\`
ａ	a
ｂ	b
ｃ	c
ｄ	d
ｅ	e
ｆ	f
ｇ	g
ｈ	h
ｉ	i
ｊ	j
ｋ	k
ｌ	l
ｍ	m
ｎ	n
ｏ	o
ｐ	p
ｑ	q
ｒ	r
ｓ	s
ｔ	t
ｕ	u
ｖ	v
ｗ	w
ｘ	x
ｙ	y
ｚ	z
｛	\\{
｜	\\|
｝	\\}
～	~`
function 转中文符号(参){
    var 串库 = ``
    let 果 = 参;
    var 阵从 = 广库之全角半角.split("\n");
    for(var i=0;i<阵从.length;i++){
        var 几位 = 阵从[i].indexOf("\t");
        var 串换 = 阵从[i].substr(几位+1);
        var 智旨 = /[0-9a-zA-Z]/;
        if(智旨.test(串换)){continue}
        var 串为 = 阵从[i].substr(0,几位);
        var 智换 = new RegExp(串换,"g");
        果 = 果.replace(智换,串为);
    }
    return 果;
}
var 字符串 = "~!@#$←这些符号转。但中文不转，122数字不转，abcDEF英文不转";
console.log(转中文符号(字符串));
//果：～！＠＃＄←这些符号转。但中文不转，122数字不转，abcDEF英文不转