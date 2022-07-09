//bai1
function printNumber(a,b){
    for(i=a;i<=b;i=i+1){
        console.log(i);
    }
}
console.log(printNumber(1,7));

//bai2

function printNumber(a,b){
    for(i=b;i>=1;i=i-1){
        console.log(i);
    }
}
console.log(printNumber(1,7));


//bai3
function sumOfOddNumbers(a,b){
    let total=0
    if(a<b){
        for(i=a;i<=b;i=i+1){
            if(i%2!=0) total += i ;
        }
        return total;

    }else{
        for(i=b;i<=a;i=i+1){
            if(i%2!=0) total += i ;
        }
        return total;
    }
}
console.log(sumOfOddNumbers(10,1));


function sumOfOddNumbers(a,b){
    let total=0;

    let min = a,
    max = b;

    if(a>b){
        min=b;
        max=a;
    }
    for(let i = min; i<=max;i++){
        if(i%2!=0) total +=i;
    }
    return total;
}
console.log(sumOfOddNumbers(10,1));


//bai4
function divisor(number){
    for(let i=1;i<=number;i++){
        if(number%i==0) console.log(i);
    }
}
divisor(20);

//bai5
function factorial(number){
    let total=1;
    for(let i=2;i<=number;i++){
        total*=i;
    }
    return total;
}
console.log(factorial(4));

//bai6
function countFolding(thickness){
    thickness*=1000; // đôi m sang mm
    let count=0;
    let currentThickness = 0.1;

    // khi mà độ dày chưa đạt mức mong muốn
    while(currentThickness<thickness){
        currentThickness *=2; //gấp đôi tờ giấy
        count ++; //đếm 1 lần
    }
    return count;
}
console.log(countFolding(1));

//bài 7
function countYears(dad, son){
    let year=0;
    while(son*2 != dad){
        son+=1;
        dad+=1;
        year++;

    }
    return year;
}
console.log(countYears(40,8));

//bài 8
function numOfLegs(){
    const CHICK_LEGS = 2;
    const DOG_LEGS = 4;

    let chicken =1;
    let dog=36-chicken;

    while(chicken*CHICK_LEGS +dog*DOG_LEGS !=100){
        chicken++;
        dog--;
    }
    console.log("Số gà là: ",chicken);
    console.log("Số chó là: ",dog);
}
numOfLegs();