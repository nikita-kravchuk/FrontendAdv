var str = "",
  inclStr = "",
  i, 
  start = 0;

function includes(str, inclStr, start) {
  str = str.toLowerCase().split('');
  inclStr = inclStr.toLowerCase().split('');
  console.log(str, inclStr);

  for (i = start; i < inclStr.length; i += 1) {
    if (str[i] === inclStr[i]) {
      console.log("есть элемент в строке" + " " +`${str}`);
    } else {
      console.log("элемента нет");
    }
  }
}

includes("Hello world", "world", 6);
