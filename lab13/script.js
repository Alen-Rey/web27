
//Bài 1
let str = " hello world";

function capitalize(str){
    let trimmed = str.trim();

    let firstChar = trimmed.slice(0,1);
    let secondChar = trimmed.slice(1);

    firstChar = firstChar.toUpperCase();
    secondChar = secondChar.toLowerCase();

    let result = firstChar.concat(secondChar);

    return result;
}

console.log(capitalize(str));

//Bài 2
let str1 = " heLlo wOrld"


let arr = ["Jan","Feb","Mar","Apr","May"] ;
for(let i=0; i<arr.length;i++){
    console.log(arr[i]);
}

for(let i of arr){
    console.log(i);
}

for(let char of "Hello"){
    console.log(char);
}

arr.join();
arr.toString();
'Jan,Feb,Mar,Apr,May'.split(",");

for(let word of "Nguyễn Ba".split(" ")) console.log(word);


let array = ["Linh", "Nhi", "Hùng", "Hà", "Mai Anh"];

console.log(array);

console.log(array.length);
console.log(array[0]);
console.log(array[2]);
console.log(array[array.length - 1]);
console.log(array[-1]);

for(let i of array){
    console.log(i);
}

for(let i of array){
    console.log(array.indexOf(i) +" " + i);
}

for(let i=array.length-1;i>=0;i--){
    const arraynew = array[i];
    console.log(i, arraynew);
}
array.push("Ba");
console.log(array);


let array1 =["Thảo"];
array = array.concat(array1);
console.log(array);