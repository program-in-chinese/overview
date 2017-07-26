# 运行: $ python3 斐波那契.py

def 斐波那契(数):
    if 数 < 2:
        return 1;
    else:
        return 斐波那契(数 - 2) + 斐波那契(数 - 1);
     
for 索引 in range(1,16):
    print(斐波那契(索引));