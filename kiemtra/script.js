// Bài 1 number tính thể tích hình cầu
function hinhcau(r){
    return result = 4*Math.PI*Math.pow(r,3);
}
console.log(hinhcau(3));

//Bài 2 number
function sumBetween(a,b){
    let total = 0;
    for(let i=a+1;i<b;i++){
        total+=i;
    }return total;
}
console.log(sumBetween(2,6));

//Bài 3 number
function tongUoc(a){
    let total = 0;
    for(let i=1;i<=a;i++){
        if(a%i==0){
            total +=i;
        }
    }return total;
}
console.log(tongUoc(10));
console.log(tongUoc(12));

//Bài 4 number
function isPrime(number){
    if(number<2) return false;

    for(let i=2;i<number;i++){
        if(number%i==0) return false;
    } 
return true;
}
console.log(isPrime(11));
//Bài 5 number
function sumOfPrimes(a){
    let total=0;
    for(let i=2;i<=a;i++){
        if(isPrime(i)==true){
            total+=i;
        }
    }return total;    
}
console.log(sumOfPrimes(11));


//Bài 1 chuỗi
function title(str) {
    let arr = str.split(" ");
    for (let i = 0; i < arr.length; i++) {
        
        let firstChar = arr[i].slice(0, 1);
        let secondChar = arr[i].slice(1);
      
        firstChar = firstChar.toUpperCase();
        secondChar = secondChar.toLowerCase();
      
        arr[i]= firstChar.concat(secondChar);
      
        
    }
    return (str = arr.join(" "));
}
console.log(title(" xin chào "));
console.log(title(" helLo GUy "));

//Bài 2 chuỗi
function spinCase(str){
    str = str.toLowerCase();
    str = str.replaceAll(' ','-');
    return str;
}
console.log(spinCase("AnH tRai mƯa"));

//Bài 3 chuỗi
function doiXung(str){
    let result=true;
    str = str.toLowerCase();
    str = str.replaceAll(' ','');
    for(let i=0;i<str.length;i++){
        if(str.charAt(i)!=str.charAt(str.length-1-i)){
            return result = false;
        }
    }return result;
}
console.log(doiXung("Race car"));
console.log(doiXung("Raabar"));

//Bài 4 chuỗi
function testString(str1,str2){
    let result = true;
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for(let i=0;i<str2.length;i++){
        if(str1.includes(str2.charAt(i))){
            str1 = str1.replace(str2.charAt(i),'');
        }else{
            return result = false;
        }
    }return result;
}
console.log(testString("How long", "no"));
console.log(testString("How long", " Nooo"));

//Bài 1 mảng

function delFalse(arr){
    let arrnew = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=false && arr[i]!=null && arr[i]!=undefined && arr[i]!=NaN && arr[i]!=0 && arr[i]!=""){
            arrnew.push(arr[i]);
        }
    }return arrnew;
}
console.log(delFalse(["1",0,null,"2","5"]));

//Bài 2 mảng
function longest(arr){
    let arrnew = [];
    let maxlength = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i].length >maxlength){
            maxlength = arr[i].length;
        }
    }
    console.log("abc",maxlength);
    arrnew = arr.filter(value => value.length == maxlength );

    return arrnew;

}
console.log(longest(['aba', 'aa', 'ad', 'c', 'vcd']));

//Bài 3 mảng
function difference(arr1, arr2){
    let arrnew=[];
    arrnew = arr1;
    for(let i=0;i<arrnew.length;i++){
        arrnew.find(function(number){
            if(number==arr2[i]){
                arrnew.splice(i);
                return true;
            }else return false;
        });
    }return arrnew;
}
console.log(difference([1,2,3],[2,3,4,5]));


//Bài 4 mảng
function matrix( rows, cols){

    var arr = [];
    let value = 1
    for(var i=0; i < rows; i++){
        arr.push([]);
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++){
          arr[i][j] = value;
          value++;
        }
    }
  
  return arr;
  }
  console.log("matrix", matrix(3,4));
  

//Bài 1 obj
const sinhvien =  [
    {name: "Huy", age: 20},
    {name: "An", age: 27},
    {name: "Lan", age: 22},
];
function avgAge(arr){
    let totalAge = 0;
    for(let i=0;i<arr.length;i++){
        totalAge+=arr[i].age;

    }return totalAge / arr.length;
}
console.log(avgAge(sinhvien));

//Bài 2 obj
function sortAge(arr){
    arr.sort((a,b) =>{return a.age - b.age; });
    return arr;
}
console.log(sortAge(sinhvien));

//Bài 3 obj
function sortName(arr){
    arr.sort((a,b) => {
        let fa = a.name.toLowerCase(),
            fb = b.name.toLowerCase();
    
        if (fa < fb) {
            return -1;
        }
        if (fa > fb) {
            return 1;
        }
        return 0;
    });
    return arr;
}
console.log(sortName(sinhvien));

//Bài 4 pbj

console.log(filterName(sinhvien));

function filterName(arr){
    arr.filter(function(x){
        return x.name.charAt(0) == "H" ;
    })
}
console.log(filterName(sinhvien));