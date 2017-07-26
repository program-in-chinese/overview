// # tested in http://coffeescript.org/, "Try CoffeeScript"

斐波那契 = (数) ->
    if 数 < 2
        1
    else
        斐波那契(数 - 2) + 斐波那契(数 - 1)

for 索引 in [1..16]
    console.log 斐波那契(索引)