var str = "",
  inclStr = "",
  i, 
  start = 0;

function includes(str, inclStr, start) {
  str = str.toLowerCase().split('');
  inclStr = inclStr.toLowerCase().split('');
  console.log(str, inclStr);

  for (i = 0 + start; i < inclStr.length + start; i += 1) {
    if (str[i] === inclStr[i]) {
      console.log("есть элемент в строке" + " " +`${str[i]}`);
    } else {
      console.log("элемента нет");
    }
  }
}

includes("Hello world", "world", 6);
