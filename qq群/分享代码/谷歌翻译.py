#!/usr/bin/env python
# coding: utf-8
import requests as 请求库
import json

def 谷歌翻译(地址,翻译内容):

    语言 = ["auto", "zh_CN", "en_US"]
    翻译前 = 语言[2]
    翻译后 = 语言[1]

    参数 = {
        "client": "gtx",
        "dt": "t",
        "dj": "1",
        "ie": "UTF-8",
        "sl": 翻译前,
        "tl": 翻译后,
        "q": 翻译内容
    }
    请求头 = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.146 Safari/537.36"}
    请求返回 = 请求库.post(地址, 参数, headers=请求头)
    数据格式转换 = json.loads(请求返回.text)
    翻译解析 = 数据格式转换.get("sentences")
    结果数组 = []
    for 每句话 in 翻译解析:
        结果数组.append(每句话.get('trans'))
    翻译结果 = "".join(结果数组)
    print(翻译结果)

if __name__ == '__main__':
    翻译内容 = input("请输入翻译内容：")
    谷歌 = 'http://translate.google.cn/translate_a/single'
    谷歌翻译(谷歌,翻译内容)