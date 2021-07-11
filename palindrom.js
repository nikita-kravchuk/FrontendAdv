var str = 'RoTOr';
var newStr = str.toLowerCase();
var arr = newStr.split('');
console.log(arr);

function compare(arr) {
    var i;
    for(i = 0; i < arr.length/2; i += 1){
        if(arr[0] === arr[arr.length-1]){
            return true;
        } return false;
    }
}
console.log(compare(arr));