var 斐波那契 = function(数) {
  if (数 < 2) {
    return 1;
  } else {
    return 斐波那契(数 - 2) + 斐波那契(数 - 1);
  }
};

for (var 索引 = 1; 索引 <= 16; 索引++) {
  console.log(斐波那契(索引));
}