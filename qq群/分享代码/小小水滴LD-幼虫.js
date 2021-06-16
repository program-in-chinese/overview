// js  

function 当前时间() {
  const 现在 = new Date();
  const 年 = 现在.getFullYear();
  const 月 = 现在.getMonth() + 1;
  const 日 = 现在.getDate();
  const 时 = 现在.getHours();
  const 分 = 现在.getMinutes();
  const 秒 = 现在.getSeconds();
  return `${年}-${月}-${日} ${时}:${分}:${秒}`;
}

// 测试 1
console.log(当前时间());

function 格式化(值) {
  if (值 > 8) {
    return "优秀";
  } else if (值 > 6) {
    return "良好";
  }
  return "差";
}

// 测试 2
console.log(格式化(6));
