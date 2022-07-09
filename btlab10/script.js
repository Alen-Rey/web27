
function isOddNumber(number){
    return number%2 !=0;
}
if(isOddNumber(1)){
    console.log("1 là số lẻ");
}else{
    console.log("1 là số chẵn");
}

console.log(isOddNumber(2));


function maxOfTwo(a,b){
    if(a>b){
        return a;
    }else{
        return b;
    }
}
console.log(maxOfTwo(3,4));


function divisibleByThreeAndFive(number){
    if(number % 3 == 0){
        if(number % 5 == 0){
            return true;
        }else{
            return false;
        }

    }else{
        return false;
    }
}
console.log(divisibleByThreeAndFive(15));

function divisibleByThreeAndFive(number){
    return number % 3 == 0 && number % 5 == 0;
}
console.log(divisibleByThreeAndFive(15));

function season(month){
    month=Number(month);
    return month;
    
}
if(season(1)==1||season(1)==2||season(1)==12){
    console.log("winter");
}else if(season(1)==3||season(1)==4||season(1)==5){
    console.log("Spring");
}else if(season(1)==6||season(1)==7||season(1)==8){
    console.log("Summer");
}else if(season(1)==9||season(1)==10||season(1)==11){
    console.log("Fall");
}else{
    console.log("no");
}

function trafficLight(light){
    if(light === "Red"){
        console.log("Dừng lại");
    }else if(light === "Yellow"){
        console.log("Giảm tốc độ và dừng lại");
    }else if(light === "Green"){
        console.log("Được phép di chuyển");
    }else{console.log("none");}
}
console.log(trafficLight("Red"));

function calcCommissions(totalSales){
    totalSales=Number(totalSales);
    if(totalSales>100000000){
        if(totalSales>300000000){
            console.log("Hoa hồng là 20%");
        }else{
            console.log("Hoa hồng là 10%");
        }
    }else{
        console.log("Hoa hồng là 5%");
    }
}
console.log(calcCommissions(250000000));

function calcCommissions(totalSales){
    if(totalSales <= 100_000_000) return totalSales*0.05;
    else if (totalSales <= 300_000_000) return totalSales*0.1;
    else return totalSales*0.2;
}
console.log(calcCommissions(250000000));

function isLeafYear(year){
    if(year%400===0) return true;
    else if(year%4===0&&year%100!=0) return true;
    else return false;
}
console.log(isLeafYear(2020));