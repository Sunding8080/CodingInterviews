/**
题目描述:
请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy.则经过替换之后的字符串为We%20Are%20Happy。
**/

// 方法一：暴力破解
function replaceSpace(s) {
  let result = '';
  for(let i = 0;i < s.length;i++) {
    if(s[i] === ' ') {
      result += '%20';
    } else {
      result += s[i];
    }
  }
  return result;
}

// 方法二：使用字符串的replace方法，将正则对象作为参数传入replace方法
function replaceSpace(s) {
  let regx = new RegExp(' ', 'g');
  return s.replace(regx, '%20');
}

// 方法三：将字符串以空格作为分隔符使用split()转成数组，然后对数组使用join()方法
function replaceSpace(s) {
    return s.split(' ').join('%20');
}

// 方法四：将字符串使用扩展运算符转成数组，然后使用数组的map方法
function replaceSpace(s) {
  let arr = [...s].map(item => {
    return item === ' ' ? '%20' : item;
  });
  return arr.join('');
}