var str = "",
  inclStr = "",
  i, 
  j,
  start = 0;

function includes(str, inclStr) {
  str = str.toLowerCase().split('');
  inclStr = inclStr.toLowerCase().split('');
  console.log(str, inclStr);

  for (i = 0; i < inclStr.length; i += 1) {
    for(j = 0; j <  str.length; j += 1){
      if (inclStr[i] === str[j]) {
        console.log("есть элемент в строке " +`${str[j]}`);
      } else {
        console.log("элемента нет");
      }
    }
  }
}

includes("Hello world", "world");
