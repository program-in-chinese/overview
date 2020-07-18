
/**
* @fileOverview 取时间戳
* @return {string} 时间戳
*/
Date.prototype.取时间戳_毫秒 = function () { return this.getTime() }
Date.prototype.取时间戳_秒 = function () { return this.getTime() / 1000 }
Date.prototype.取天 = function () { return this.getDate() }
Date.prototype.取月 = function () { return this.getMonth() + 1 }
Date.prototype.取年 = function () { return this.getFullYear() }
Date.prototype.取小时 = function () { return this.getHours() }
Date.prototype.取分钟 = function () { return this.getMinutes() }
Date.prototype.取秒 = function () { return this.getSeconds() }
Date.prototype.设置天 = function (天) { return this.setDate(天) }
Date.prototype.设置月 = function (月) { return this.setMonth(月) }
Date.prototype.设置年 = function (年) { return this.setFullYear(年) }
Date.prototype.设置小时 = function (小时) { return this.setHours(小时) }
Date.prototype.设置分钟 = function (分钟) { return this.setMinutes(分钟) }
Date.prototype.设置秒 = function (秒) { return this.setSeconds(秒) }
Date.prototype.设置时间戳 = function (时间戳) { return this.setTime(时间戳) }
Date.prototype.到文本 = function () { return this.toString() }
Date.prototype.到mysql时间 = function () { return this.取年() + "-" + this.取月() + "-" + this.取天() + " " + this.取小时() + ":" + this.取分钟() + ":" + this.取秒(); }
Date.prototype.取年月日 = function () { return this.toLocaleDateString() }
Number.prototype.到文本 = function () { return this.toString() }

String.prototype.数量 = this.length
String.prototype.类型 = this.constructor

String.prototype.查找 = function (字符串, 起始) {
    if (!起始) 起始 = 0
    return this.indexOf(字符串, 起始)
}
String.prototype.查找 = function (字符串, 起始) {
    if (!起始) 起始 = 0
    return this.indexOf(字符串, 起始)
}
String.prototype.倒查找 = function (字符串, 起始) {
    if (!起始) 起始 = this.length
    return this.lastIndexOf(字符串, 起始)
}

String.prototype.取中间 = function (起始位置, 结束位置) {
    if (!结束位置) {
        return this.slice(起始位置)
    } else { return this.slice(起始位置, 结束位置) }
}

String.prototype.替换全部 = function (旧字符串, 新字符串) {
    return this.replace(new RegExp(旧字符串, 'g'), 新字符串);
}

//返回分割后的数组
String.prototype.分割 = function (分割符) { return this.split(分割符) }
String.prototype.到小写 = function (字符串) { return this.toLowerCase(字符串) }
String.prototype.到大写 = function (字符串) { return this.toUpperCase(字符串) }
String.prototype.到文本 = function (字符串) { return this.toString(字符串) }
function 编码_URL编码(文本) { return encodeURIComponent(文本) }
function 编码_URL解码(文本) { return decodeURIComponent(文本) }
function 编码_转义成html(str) { var s = ""; if (str.length === 0) { return "" } s = str.replace(/&/g, "&amp;"); s = s.replace(/</g, "&lt;"); s = s.replace(/>/g, "&gt;"); s = s.replace(/ /g, "&nbsp;"); s = s.replace(/\'/g, "&#39;"); s = s.replace(/\"/g, "&quot;"); return s };
function 编码_还原成html(str) { var s = ""; if (str.length === 0) { return "" } s = str.replace(/&amp;/g, "&"); s = s.replace(/&lt;/g, "<"); s = s.replace(/&gt;/g, ">"); s = s.replace(/&nbsp;/g, " "); s = s.replace(/&#39;/g, "'"); s = s.replace(/&quot;/g, '"'); return s };
function 到数值(文本) { return Number(文本) }
function 到文本(文本) { return String(文本) }


Object.defineProperties(Array.prototype,
    {
        连接: { writable: true, enumerable: false, configurable: true, value: function (连接符) { return this.join(连接符) } },
        删除末尾: { writable: true, enumerable: false, configurable: true, value: function () { return this.pop() } },
        合并: {
            writable: true, enumerable: false, configurable: true, value: function () {
                for (var i in arguments) { this.concat(arguments[i]) }
                return this
            }
        },
        添加末尾: {
            writable: true, enumerable: false, configurable: true,
            value: function () {
                for (var i in arguments) { this.push(arguments[i]) }
                return this.length
            }
        },
        添加头部: {
            writable: true, enumerable: false, configurable: true,
            value: function () {
                for (var i in arguments) { this.unshift(arguments[i]) }
                return this.length
            }
        },
        颠倒顺序: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.reverse() }
        },
        删除第一: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.shift() }
        },
        排序: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.sort() }
        },
        删除元素: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.splice(索引, 删除数量) }
        },
        到文本: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.toString() }
        },
        取成员数: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.length }
        },
        取类型: {
            writable: true, enumerable: false, configurable: true,
            value: function () { return this.constructor }
        }
    }
);

function app运行(app名称) { return launchApp(app名称) }
function app卸载(app名称) { return uninstall(getPackageName(app名称)) }
function app打开详情页(app名称) { return openAppSetting(getPackageName(app名称)) }
function 打开网页(网址) { return app.openUrl(网址) }

function 设备取标识() { return device.brand + "|" + device.model + "|Android" + device.release + "|" + device.getAndroidId() }
function 设备常亮() { return device.keepScreenOn() }
function 设备常亮取消() { return device.cancelKeepingAwake() }
function 设备唤醒() { return device.wakeUp() }
function 设备取标识() { return device.brand + "|" + device.model + "|Android" + device.release + "|" + device.getAndroidId() }

function 目录删除(路径) { return files.removeDir(路径) }//删除文件夹，如果文件夹不为空，则删除该文件夹的所有内容再删除该文件夹，返回是否全部删除成功。
function 目录_刷新(目录) { app.sendBroadcast({ action: "android.intent.action.MEDIA_SCANNER_SCAN_FILE", data: "file://" + 目录 }) } //调用方法 目录_刷新("/sdcard/yunapp/tmp/")
function 文件_刷新(文件路径) { app.sendBroadcast(new Intent(Intent.ACTION_MEDIA_SCANNER_SCAN_FILE, android.net.Uri.fromFile(java.io.File(文件路径)))) } //调用方法 目录_刷新("/sdcard/yunapp/tmp/")

function 目录判断(路径) { return files.isDir(路径) }
function 目录判断是否为空(路径) { return files.isEmptyDir(路径) }//返回文件夹path是否为空文件夹。如果该路径并非文件夹，则直接返回false。
function 目录创建(路径) { return files.ensureDir(路径) }//创建一个文件或文件夹并返回是否创建成功。如果文件已经存在，则直接返回false。
function 文件判断(文件路径) { return files.isFile(文件路径) }
function 文件创建(文件路径) { return files.createWithDirs(文件路径) }//创建一个文件或文件夹并返回是否创建成功。如果文件所在文件夹不存在，则先创建他所在的一系列文件夹。如果文件已经存在，则直接返回false。
function 文件是否存在(文件路径) { return files.exists(文件路径) }//返回在路径path处的文件是否存在。
function 文件读取(文件路径) { return files.read(文件路径) }//读取文本文件path的所有内容并返回。如果文件不存在，则抛出FileNotFoundException。
function 文件写入(文件路径, 内容) { return files.write(文件路径, 内容) }//把bytes写入到文件path中。如果文件存在则覆盖，不存在则创建。
function 文件追加(文件路径, 内容) { return files.append(文件路径, 内容) }//把text追加到文件path的末尾。如果文件不存在则创建。
function 文件复制(原文件路径, 文件路径) { return files.copy(原文件路径, 文件路径) }//复制文件，返回是否复制成功。
function 文件重命名(原文件路径, 新文件名) { return files.rename(原文件路径, 新文件名) }//重命名文件，并返回是否重命名成功。
function 文件取文件名(文件路径) { return files.getName(文件路径) }//返回文件的文件名。例如files.getName("/sdcard/1.txt")返回"1.txt"。
function 文件删除(文件路径) { return files.remove(文件路径) }//删除文件或空文件夹，返回是否删除成功。
function 文件_下载(url, 路径) {
    var xzfh = http.get(url)
    if (xzfh.statusCode != 200) return -1
    files.writeBytes(路径, xzfh.body.bytes());
    return xzfh.headers["Content-Length"]
}

function 按键返回() { return back() }
function 按键home() { return home() }
function 按键通知栏() { return notifications() }

function 等待app出现(app名称) { return waitForPackage(getPackageName(app名称)) }
function 等待页面出现(页面Activity) { return waitForActivity(页面Activity) }

function 结束() { exit() }


function 单击_向上(搜索条件, 模糊搜索, 超时) {
    if (!超时) 超时 = 5000
    var 搜索条件分割 = 搜索条件.split("=")
    if (搜索条件分割.length !== 2) return
    var 搜索方法 = 搜索条件分割[0].replace(new RegExp(" ", 'g'), "");
    var 搜索参数 = 搜索条件分割[1].replace(new RegExp(" ", 'g'), "");
    console.log("搜索参数-->" + 搜索参数), console.log("搜索方法-->" + 搜索方法);

    if (搜索方法 == "text" && !模糊搜索) var 搜索结果 = text(搜索参数).findOne(超时)
    if (搜索方法 == "text" && 模糊搜索) var 搜索结果 = textContains(搜索参数).findOne(超时)

    if (搜索方法 == "desc" && !模糊搜索) var 搜索结果 = desc(搜索参数).findOne(超时)
    if (搜索方法 == "desc" && 模糊搜索) var 搜索结果 = descContains(搜索参数).findOne(超时)

    if (搜索方法 == "className" && !模糊搜索) var 搜索结果 = className(搜索参数).findOne(超时)
    if (搜索方法 == "className" && 模糊搜索) var 搜索结果 = classNameContains(搜索参数).findOne(超时)

    if (搜索方法 == "id" && !模糊搜索) var 搜索结果 = id(搜索参数).findOne(超时)
    if (搜索方法 == "id" && 模糊搜索) var 搜索结果 = idContains(搜索参数).findOne(超时)

    while (搜索结果) {
        if (搜索结果.clickable()) {
            搜索结果.click()
            return 搜索结果
        } else {
            搜索结果 = 搜索结果.parent()
        }
    }
}



function 单击_子元素(搜索条件, 子索引, 模糊搜索, 超时) {
    if (!超时) 超时 = 5000
    var 搜索条件分割 = 搜索条件.split("=")
    if (搜索条件分割.length !== 2) return
    var 搜索方法 = 搜索条件分割[0].replace(new RegExp(" ", 'g'), "");
    var 搜索参数 = 搜索条件分割[1].replace(new RegExp(" ", 'g'), "");
    console.log("搜索参数-->" + 搜索参数), console.log("搜索方法-->" + 搜索方法);

    if (搜索方法 == "text" && !模糊搜索) var 搜索结果 = text(搜索参数).findOne(超时)
    if (搜索方法 == "text" && 模糊搜索) var 搜索结果 = textContains(搜索参数).findOne(超时)

    if (搜索方法 == "desc" && !模糊搜索) var 搜索结果 = desc(搜索参数).findOne(超时)
    if (搜索方法 == "desc" && 模糊搜索) var 搜索结果 = descContains(搜索参数).findOne(超时)

    if (搜索方法 == "className" && !模糊搜索) var 搜索结果 = className(搜索参数).findOne(超时)
    if (搜索方法 == "className" && 模糊搜索) var 搜索结果 = classNameContains(搜索参数).findOne(超时)

    if (搜索方法 == "id" && !模糊搜索) var 搜索结果 = id(搜索参数).findOne(超时)
    if (搜索方法 == "id" && 模糊搜索) var 搜索结果 = idContains(搜索参数).findOne(超时)

    if (!子索引) {
        for (var i = 0; i < 搜索结果.childCount(); i++) {
            var child = 搜索结果.child(i);
            if (child.clickable()) {
                child.click()
                return child
            }
        }
        return false
    } else {
        if (搜索结果.childCount() - 1 >= 子索引) {
            var child = 搜索结果.child(子索引)
            if (child.clickable()) {
                child.click()
                return child
            }
        }
        return false
    }
}



function 写文本(搜索条件, 文本, 模糊搜索, 超时) {
    if (!超时) 超时 = 5000
    var 搜索条件分割 = 搜索条件.split("=")
    if (搜索条件分割.length !== 2) return
    var 搜索方法 = 搜索条件分割[0].replace(new RegExp(" ", 'g'), "");
    var 搜索参数 = 搜索条件分割[1].replace(new RegExp(" ", 'g'), "");
    console.log("搜索参数-->" + 搜索参数), console.log("搜索方法-->" + 搜索方法);

    if (搜索方法 == "text" && !模糊搜索) var 搜索结果 = text(搜索参数).findOne(超时)
    if (搜索方法 == "text" && 模糊搜索) var 搜索结果 = textContains(搜索参数).findOne(超时)

    if (搜索方法 == "desc" && !模糊搜索) var 搜索结果 = desc(搜索参数).findOne(超时)
    if (搜索方法 == "desc" && 模糊搜索) var 搜索结果 = descContains(搜索参数).findOne(超时)

    if (搜索方法 == "className" && !模糊搜索) var 搜索结果 = className(搜索参数).findOne(超时)
    if (搜索方法 == "className" && 模糊搜索) var 搜索结果 = classNameContains(搜索参数).findOne(超时)

    if (搜索方法 == "id" && !模糊搜索) var 搜索结果 = id(搜索参数).findOne(超时)
    if (搜索方法 == "id" && 模糊搜索) var 搜索结果 = idContains(搜索参数).findOne(超时)

    if (搜索结果.editable) {
        搜索结果.setText(文本)
    } else {
        return false
    }
}



function 单击_兄弟2(搜索条件, 索引增减, 模糊搜索, 超时) {
    if (!超时) 超时 = 5000
    if (!索引增减) 索引增减 = 1
    var 搜索条件分割 = 搜索条件.split("=")
    if (搜索条件分割.length !== 2) return
    var 搜索方法 = 搜索条件分割[0].replace(new RegExp(" ", 'g'), "");
    var 搜索参数 = 搜索条件分割[1].replace(new RegExp(" ", 'g'), "");
    console.log("搜索参数-->" + 搜索参数), console.log("搜索方法-->" + 搜索方法);

    if (搜索方法 == "text" && !模糊搜索) var 搜索结果 = text(搜索参数).findOne(超时)
    if (搜索方法 == "text" && 模糊搜索) var 搜索结果 = textContains(搜索参数).findOne(超时)

    if (搜索方法 == "desc" && !模糊搜索) var 搜索结果 = desc(搜索参数).findOne(超时)
    if (搜索方法 == "desc" && 模糊搜索) var 搜索结果 = descContains(搜索参数).findOne(超时)

    if (搜索方法 == "className" && !模糊搜索) var 搜索结果 = className(搜索参数).findOne(超时)
    if (搜索方法 == "className" && 模糊搜索) var 搜索结果 = classNameContains(搜索参数).findOne(超时)

    if (搜索方法 == "id" && !模糊搜索) var 搜索结果 = id(搜索参数).findOne(超时)
    if (搜索方法 == "id" && 模糊搜索) var 搜索结果 = idContains(搜索参数).findOne(超时)

    var 当前索引 = 搜索结果.indexInParent()
    var 兄弟元素 = 搜索结果.parent().child(当前索引 + 索引增减)

    if (兄弟元素.clickable()) {
        兄弟元素.click()
        return 兄弟元素
    } else {
        var 可单击子元素 = 兄弟元素.findOne(clickable());
        if (可单击子元素.clickable()) {
            可单击子元素.click()
            return 可单击子元素
        }
    }
}


function 写文本_兄弟2(搜索条件, 文本, 索引增减, 模糊搜索, 超时) {
    if (!超时) 超时 = 5000;
    if (!索引增减) 索引增减 = 1
    var 搜索条件分割 = 搜索条件.split("=")
    if (搜索条件分割.length !== 2) return
    var 搜索方法 = 搜索条件分割[0].replace(new RegExp(" ", 'g'), "");
    var 搜索参数 = 搜索条件分割[1].replace(new RegExp(" ", 'g'), "");

    if (搜索方法 == "text" && !模糊搜索) var 搜索结果 = text(搜索参数).findOne(超时)
    if (搜索方法 == "text" && 模糊搜索) var 搜索结果 = textContains(搜索参数).findOne(超时)

    if (搜索方法 == "desc" && !模糊搜索) var 搜索结果 = desc(搜索参数).findOne(超时)
    if (搜索方法 == "desc" && 模糊搜索) var 搜索结果 = descContains(搜索参数).findOne(超时)

    if (搜索方法 == "className" && !模糊搜索) var 搜索结果 = className(搜索参数).findOne(超时)
    if (搜索方法 == "className" && 模糊搜索) var 搜索结果 = classNameContains(搜索参数).findOne(超时)

    if (搜索方法 == "id" && !模糊搜索) var 搜索结果 = id(搜索参数).findOne(超时)
    if (搜索方法 == "id" && 模糊搜索) var 搜索结果 = idContains(搜索参数).findOne(超时)

    var 当前索引 = 搜索结果.indexInParent()
    var 兄弟元素 = 搜索结果.parent().child(当前索引 + 索引增减)

    if (兄弟元素.editable) {
        兄弟元素.setText(文本)
        return 兄弟元素
    } else {
        var 可编辑文本 = 兄弟元素.findOne(editable());
        if (可编辑文本.editable) {
            可编辑文本.setText(文本)
            return 可编辑文本
        }
    }
}

function Baidu_OCR(imgFile) {
    var API_Key = "uyK7qTTKh0Yt04whCvXKnhmb";
    var Secret_Key = "klSScgMdcgx9zBCBg9HEUpcwtiyCZSAr";
    access_token = http.get("https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&client_id=" + API_Key + "&client_secret=" + Secret_Key).body.json().access_token;
    url = "https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic" + "?access_token=" + access_token;
    imag64 = images.toBase64(images.read(imgFile));
    res = http.post(url, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, image: imag64, image_type: "BASE64", language_type: "JAP" });
    str = JSON.parse(res.body.string()).words_result.map(val => val.words).join('\n');
    return str;
}



function 图片上传(path) {
    var url = "https://data-bridge.wuyuan.io/custom-interface/p/17389/call/shang_chuan_wen_jian?_u_t_k_=GRHWb__nPpQbEPZZYfePV_0gSdOVBxZC&_d_b_=%7B%22default%22%3A%22__default__%22%2C%22connections%22%3A%7B%22__default__%22%3A%7B%22bridgeProtocol%22%3A%22http%22%2C%22bridgeHost%22%3A%22127.0.0.1%22%2C%22bridgePort%22%3A%225312%22%2C%22databaseType%22%3A%22mysql%22%2C%22host%22%3A%22cdb-6rc2596s.cd.tencentcdb.com%22%2C%22port%22%3A%2210069%22%2C%22database%22%3A%22yun_app%22%2C%22user%22%3A%22root%22%2C%22password%22%3A%22chengnuandi1%22%2C%22acquireTimeout%22%3A%221000%22%2C%22connectionLimit%22%3A%22100%22%2C%22queueLimit%22%3A%2220%22%2C%22timezone%22%3A%22%22%2C%22encrypt%22%3Afalse%2C%22connectionMethod%22%3A%22direct%22%7D%7D%7D&_s_v_=%7B%22BASE_URL%22%3A%22%2F%2Fpreviewer.wuyuan.io%2Fproj%2F17389%22%2C%22CURR_YEAR%22%3A2020%2C%22CURR_MONTH%22%3A2%2C%22CURR_DATE%22%3A3%2C%22CURR_TIME%22%3A1580744004520%2C%22CURR_YY%22%3A%2220%22%2C%22CURR_MM%22%3A%2202%22%2C%22CURR_DD%22%3A%2203%22%2C%22CURR_YMD%22%3A%222020-02-03%22%2C%22LAST_YEAR%22%3A2019%2C%22LAST_MONTH%22%3A1%2C%22LAST_MM%22%3A%2201%22%2C%22YESTERDAY%22%3A2%2C%22YESTERDAY_YMD%22%3A%222020-02-02%22%2C%22NEXT_YEAR%22%3A2021%2C%22NEXT_MONTH%22%3A3%2C%22NEXT_MM%22%3A%2203%22%2C%22TOMORROW%22%3A4%2C%22TOMORROW_YMD%22%3A%222020-02-04%22%2C%22USER_ID%22%3A%22zhangsan%22%2C%22USER_NAME%22%3A%22%E5%BC%A0%E4%B8%89%22%2C%22ROLES%22%3A%22%22%2C%22ROLE_DISPLAY_NAMES%22%3A%22%3C%E6%97%A0%E8%A7%92%E8%89%B2%3E%22%2C%22IP%22%3A%221.2.3.4%22%2C%22UA%22%3A%7B%22isDesktop%22%3Atrue%2C%22browser%22%3A%22enhancer_chrome%22%2C%22version%22%3A%2263.40.951%22%2C%22os%22%3A%22Windows%2010%22%2C%22platform%22%3A%22Windows%22%7D%2C%22ROLE_LIST%22%3A%5B%7B%22id%22%3A%22admin%22%2C%22display_name%22%3A%22%E7%AE%A1%E7%90%86%E5%91%98%22%2C%22description%22%3A%22%22%7D%5D%7D"
    var res = http.postMultipart(url, {
        "file": open(path),
    });
    var t = res.body.json();

    if (t.success == true) {
        return t.data.files[0].url
    } else {
        return false
    }
}


function 图片截图(保存路径) {
    var img = captureScreen();
    images.save(img, 保存路径, "jpg", 10);//把图片压缩为原来的一半质量并保存
    // images.saveImage(img, 保存路径);
    return img
}

function 图片子脚本截图(文件路径) {
    //"/sdcard/yunapp/tmp/tmp.jpg"
    files.remove(文件路径) //删除文件
    events.broadcast.emit("截图", 文件路径);

    var i = 0
    while (!files.exists(文件路径)) {
        sleep(10)
        i = i + 1
        if (i > 500) break
    }
    return files.exists(文件路径)
}



//监听say事件
events.on("参数", function (words) {

    var 异常备注 = "", 其他备注 = "", 结束 = false, 内容 = words["内容"], 任务id = words["任务id"], 链接url = words["链接"]

    if (words["类型"] == 0 || words["类型"] == 1) {
        toast("开始下载文件"), 目录删除("/sdcard/yunapp/peng_you_quan_tmp/"), 目录创建("/sdcard/yunapp/peng_you_quan_tmp/")

        //图片类型
        if (words["类型"] == 0) {
            var 图片数组 = words["图片"].分割(",")
            for (var i in 图片数组) {
                var img = images.load(图片数组[i])
                images.save(img, "/sdcard/yunapp/peng_you_quan_tmp/" + i + ".jpg", "jpg", 50);//把图片压缩为原来的一半质量并保存
                文件_刷新("/sdcard/yunapp/peng_you_quan_tmp/" + i + ".jpg")
            }
        }

        //视频类型
        if (words["类型"] == 1) { 文件_下载(words["视频"], "/sdcard/yunapp/peng_you_quan_tmp/tmp.mp4"), 文件_刷新("/sdcard/yunapp/peng_you_quan_tmp/tmp.mp4") }

        var 目录文件数组 = files.listDir("/sdcard/yunapp/peng_you_quan_tmp/");
        if (目录文件数组.length == 0) 结束 = true, 异常备注 = "无有效图片/视频.", toast("任务结束," + 异常备注)


        // 目录_刷新("/sdcard/yunapp/peng_you_quan_tmp/")
        if (!app运行("微信")) { 结束 = true, 异常备注 = "未安装微信." }

        sleep(2000)
        if (结束 == false) {
            //屏蔽升级按钮.
            var i = 0
            while (true) {
                toast("屏蔽升级提示")
                单击_向上("text=取消"), 单击_向上("text=是"), i = i + 1
                if (i > 2) break
            }

            //初始化, 判断页面是否在首页.
            while (true) {
                sleep(2000), toast("判断是否在首页")
                if (text("通讯录").find().size() > 0) { break } else { 按键返回() }
            }
        }

        if (结束 == false) {
            单击_向上("text = 发现"), sleep(2000)
            单击_向上("text = 朋友圈"), sleep(2000)
            单击_向上("desc = 拍照分享"), sleep(2000)
            单击_向上("text = 从相册选择"), sleep(2000)
            单击_向上("text = 我知道了"), sleep(2000)
            单击_向上("text = 图片和视频"), sleep(2000)
            单击_向上("text = peng_you_quan_tmp"), sleep(2000)

            className("CheckBox").find().forEach(function (w) { if (w.clickable()) w.click() });//选择图片

            sleep(2000)
            单击_向上("text = 完成", true), sleep(2000)
            写文本("text=这一刻的想法", 内容, true), sleep(2000)
            单击_向上("text = 发表"), sleep(2000)

        }

        if (图片子脚本截图("/sdcard/yunapp/tmp/tmp.jpg")) {
            sleep(500)
            完成图片 = 图片上传("/sdcard/yunapp/tmp/tmp.jpg")
        }

    }

    //  var 异常备注 = "", 其他备注 = "", 结束 = false, 内容 = words["内容"], 任务id = words["任务id"], 链接url = words["链接"]
    //假如是分享链接
    if (words["类型"] == 2) {
        if (!app运行("微信")) { 结束 = true, 异常备注 = "未安装微信." }; sleep(2000)
        if (结束 == false) {
            var i = 0; while (true) { toast("屏蔽升级提示"), 单击_向上("text=取消"), 单击_向上("text=是"), i = i + 1; if (i > 2) break }   //屏蔽升级按钮.
            while (true) { sleep(2000), toast("判断是否在首页"); if (text("通讯录").find().size() > 0) { break } else { 按键返回() } }//初始化, 判断页面是否在首页.
        }

        if (链接url == "") { 结束 = true, 异常备注 = "未提供有效链接." };

        if (结束 == false) {
            单击_向上("desc=搜索"), sleep(2000)
            写文本("text=搜索", 链接url), sleep(2000)
            单击_向上("text=搜一搜", true), sleep(5000)
            单击_向上("text=访问网页", true), sleep(10000)

            var i = 0
            while (true) { toast("延时等待中." + i), i = i + 1, sleep(2000); if (i > 5) break }

            单击_向上("desc=更多", true), sleep(2000)
            单击_向上("text=分享到朋友圈", true), sleep(2000)
            写文本("text=这一刻的想法", 内容, true), sleep(2000)
            单击_向上("text = 发表"), sleep(2000)
            while (true) { sleep(2000), toast("判断是否在首页"); if (text("通讯录").find().size() > 0) { break } else { 按键返回() } }//初始化, 判断页面是否在首页.
            单击_向上("text = 发现"), sleep(2000)
            单击_向上("text = 朋友圈"), sleep(2000)

            if (图片子脚本截图("/sdcard/yunapp/tmp/tmp.jpg")) { sleep(500), 完成图片 = 图片上传("/sdcard/yunapp/tmp/tmp.jpg"), sleep(2000) }

            while (true) { sleep(2000), toast("判断是否在首页"); if (text("通讯录").find().size() > 0) { break } else { 按键返回() } }//初始化, 判断页面是否在首页.
        }


    }



    if (异常备注) {
        异常 = 1
    } else {
        异常 = 0
    }

    var url_1 = "she_bei=" + 设备取标识() + "&ming_cheng=发朋友圈&ren_wu_id=" + 任务id + "&wan_cheng_tu_pian=" + 完成图片 + "&yi_chang=" + 异常 + "&yi_chang_bei_zhu=" + 异常备注 + "&qi_ta_bei_zhu=" + 其他备注
    var url = "https://data-bridge.wuyuan.io/custom-interface/p/17389/call/wan_cheng_ren_wu?" + url_1 + "&_u_t_k_=YimLZ_TmRZPxyiWGOONTAcY-WtXAHjlt&_d_b_=%7B%22default%22%3A%22__default__%22%2C%22connections%22%3A%7B%22__default__%22%3A%7B%22bridgeProtocol%22%3A%22http%22%2C%22bridgeHost%22%3A%22127.0.0.1%22%2C%22bridgePort%22%3A%225312%22%2C%22databaseType%22%3A%22mysql%22%2C%22host%22%3A%22cdb-6rc2596s.cd.tencentcdb.com%22%2C%22port%22%3A%2210069%22%2C%22database%22%3A%22yun_app%22%2C%22user%22%3A%22root%22%2C%22password%22%3A%22chengnuandi1%22%2C%22acquireTimeout%22%3A%221000%22%2C%22connectionLimit%22%3A%22100%22%2C%22queueLimit%22%3A%2220%22%2C%22timezone%22%3A%22%22%2C%22encrypt%22%3Afalse%2C%22connectionMethod%22%3A%22direct%22%7D%7D%7D&_s_v_=%7B%22BASE_URL%22%3A%22%2F%2Fpreviewer.wuyuan.io%2Fproj%2F17389%22%2C%22CURR_YEAR%22%3A2020%2C%22CURR_MONTH%22%3A2%2C%22CURR_DATE%22%3A5%2C%22CURR_TIME%22%3A1580884532473%2C%22CURR_YY%22%3A%2220%22%2C%22CURR_MM%22%3A%2202%22%2C%22CURR_DD%22%3A%2205%22%2C%22CURR_YMD%22%3A%222020-02-05%22%2C%22LAST_YEAR%22%3A2019%2C%22LAST_MONTH%22%3A1%2C%22LAST_MM%22%3A%2201%22%2C%22YESTERDAY%22%3A4%2C%22YESTERDAY_YMD%22%3A%222020-02-04%22%2C%22NEXT_YEAR%22%3A2021%2C%22NEXT_MONTH%22%3A3%2C%22NEXT_MM%22%3A%2203%22%2C%22TOMORROW%22%3A6%2C%22TOMORROW_YMD%22%3A%222020-02-06%22%2C%22USER_ID%22%3A%22zhangsan%22%2C%22USER_NAME%22%3A%22%E5%BC%A0%E4%B8%89%22%2C%22ROLES%22%3A%22%22%2C%22ROLE_DISPLAY_NAMES%22%3A%22%3C%E6%97%A0%E8%A7%92%E8%89%B2%3E%22%2C%22IP%22%3A%221.2.3.4%22%2C%22UA%22%3A%7B%22isDesktop%22%3Atrue%2C%22browser%22%3A%22enhancer_chrome%22%2C%22version%22%3A%2263.40.951%22%2C%22os%22%3A%22Windows%2010%22%2C%22platform%22%3A%22Windows%22%7D%2C%22ROLE_LIST%22%3A%5B%7B%22id%22%3A%22admin%22%2C%22display_name%22%3A%22%E7%AE%A1%E7%90%86%E5%91%98%22%2C%22description%22%3A%22%22%7D%5D%7D"
    var 返回内容 = http.get(url).body.string();
    var Date对象 = new Date()
    files.append("/sdcard/yunapp/log/发朋友圈_log.txt", Date对象.到mysql时间() + "url:\n " + url + "\n" + "返回内容:\n " + 返回内容 + "\n" + "\n");
    console.log("返回内容-->" + 返回内容);

    exit()
})


//保持脚本运行
setInterval(() => { }, 1000);