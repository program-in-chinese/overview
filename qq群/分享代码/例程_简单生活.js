myfunc.文本_取中间文本 = function (参_源文本, 参_前文本, 参_后文本) {
  var jn1, jn2, jn3;
  jn1 = 参_源文本.indexOf(参_前文本)
  jn2 = 参_源文本.indexOf(参_后文本, jn1 + 参_前文本.length)
  jn3 = 参_源文本.substring(jn1 + 参_前文本.length, jn2)
  if(jn1==-1 || jn2==-1){
      return null
  }else{
      return jn3;
  }
}


myfunc.界面_取当前界 = function (c_界面数据, c_指定界面) {
  //截图并判断这是哪一个界面
  //c_界面 填入界面数据 c_指定界面 直接判断该界面是不是 这样可以省很多cpu
  var img, 局当前界面, 局界面, 局p;
  局界面 = c_界面数据;
  img = images.captureScreen()//截图查找
  局当前界面 = "未知界面";//给一个初始值
  for (jn = 0; jn < 局界面.length; jn++) {
      if (c_指定界面 != null | undefined) {
          //直接针对该界面名进行判断 省cpu
          if (局界面[jn][0] == c_指定界面) {
              局p = ajs.findMultiColors(局界面[jn], img)
              if (局p != null) {
                  局当前界面 = 局界面[jn][0]
              }
              //如果指定界面被找到 就会被返回该界面名 否则就是未知界面
              break;
          }
      } else {
          局p = ajs.findMultiColors(局界面[jn], img)
          if (局p != null) {
              局当前界面 = 局界面[jn][0]
              break;
          }
      }


  }
  return 局当前界面;
}