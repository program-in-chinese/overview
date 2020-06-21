// 其他文件里用到的函数 复制过来
export var 对象键 = 对象 => Reflect.ownKeys(对象)
export var 对象值 = 对象 => Reflect.ownKeys(对象).map(a => 对象[a])
export var 柯里调用 = 函数 => 参数数组 => 参数数组.length == 0 ? 函数 : 柯里调用(函数(参数数组[0]))(参数数组.slice(1))

// 切分
export var 数组头 = 数组 => 数组[0]
export var 数组尾 = 数组 => 数组[数组.length - 1]
export var 数组除了头 = 数组 => 数组.slice(1)
export var 数组除了尾 = 数组 => 数组.slice(0, 数组.length - 1)
export var 数组截取 = 起点 => 终点 => 数组 => 数组.slice(起点, 终点)

// 生成
export var 生成数组 = s => e => new Array(e - s).fill(null).map((v, k) => k + s)
export var 多重笛卡尔积 = n => {
    var _多重笛卡尔积 = arr => arr.reduce((as, bs) => as.map(a => bs.map(b => [...a, b])).flat(), [[]])
    var 参数组 = []
    var f = 参数 => {
        参数组.push(参数)
        if (参数组.length >= n)
            return _多重笛卡尔积(参数组)
        return f
    }
    return f
}
export var 列表生成式 = f => obj => {
    var 键 = L.对象键(obj)
    var 值 = L.对象值(obj)
    var 笛卡尔积 = L.柯里调用(多重笛卡尔积(值.length))(值)
    return 笛卡尔积.map(a => 数组叉乘(键)(a))
        .map(数组转对象通过值(v => v[0])(v => v[1]))
        .map(f)
}
export var 生成二维数组 = 宽 => 高 => 列表生成式(({ 行, 列数组 }) => 列数组.map(列 => 行 + "_" + 列))({
    行: 生成数组(0)(高),
    列数组: [生成数组(0)(宽)],
})

// 队列
export var 入队头 = 值 => 数组 => {
    var r = lodash.cloneDeep(数组)
    r.unshift(值)
    return r
}
export var 入队尾 = 值 => 数组 => {
    var r = lodash.cloneDeep(数组)
    r.push(值)
    return r
}

// 转对象
export var 数组转对象通过值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(v)] = 值(v))
    return r
}
export var 数组转对象通过键值 = 键 => 值 => 数组 => {
    var r = {}
    数组.forEach((v, k) => r[键(k)(v)] = 值(k)(v))
    return r
}

// 常用
export var 数组叉乘 = 数组 => 数组2 => 数组.map((av, ai) => [av, 数组2[ai]])

// 投射
export var 数组投射通过值 = 函数 => 数组 => 数组.map((v) => 函数(v))
export var 数组投射通过键值 = 函数 => 数组 => 数组.map((v, k) => 函数(k)(v))

export var 数组条件投射通过值 = 条件 => 函数 => 数组 => 数组.map((v) => 条件(v) ? 函数(v) : v)
export var 数组条件投射通过键值 = 条件 => 函数 => 数组 => 数组.map((v, k) => 条件(k)(v) ? 函数(k)(v) : v)

export var 二维数组投射通过值 = 函数 => 数组 => 数组.map((av, ai) => av.map((bv, bi) => 函数(bv)))
export var 二维数组投射通过键值 = 函数 => 数组 => 数组.map((av, ai) => av.map((bv, bi) => 函数([ai, bi])(bv)))

export var 二维数组条件投射通过值 = 条件 => 函数 => 数组 => 数组.map((av, ai) => 数组条件投射通过值(v => 条件(v))(bv => 函数(bv))(av))
export var 二维数组条件投射通过键值 = 条件 => 函数 => 数组 => 数组.map((av, ai) => av.map((bv, bi) => 条件([ai, bi])(bv) ? 函数([ai, bi])(bv) : bv))

// 矩阵
export var 二维数组转置 = 数组 => {
    var 原宽 = 数组最大值(数组.map(a => a.length))
    var 原高 = 数组.length

    var 新数组 = 二维数组投射通过键值(k => v => {
        if (数组[k[1]] != null)
            return 数组[k[1]][k[0]]
        return null
    })(生成二维数组(原高)(原宽))
    return 新数组
}

// 过滤
export var 数组最大值 = 数组 => 数组.reduce((s, a) => s > a ? s : a)
export var 数组最小值 = 数组 => 数组.reduce((s, a) => s < a ? s : a)

export var 数组过滤通过值 = 函数 => 数组 => 数组.filter((v, k) => 函数(v))
export var 数组过滤通过键值 = 函数 => 数组 => 数组.filter((v, k) => 函数(k)(v))

export var 二维数组过滤通过值 = 函数 => 数组 => 数组.map((av, ai) => av.filter((bv, bi) => 函数(bv)))
export var 二维数组过滤通过键值 = 函数 => 数组 => 数组.map((av, ai) => av.filter((bv, bi) => 函数([ai, bi])(bv)))

export var 数组去重 = 数组 => Array.from(new Set(数组))
