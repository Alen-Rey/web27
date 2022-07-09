// lắp từ 1-10

for(let i = 1; i < 11; i = i + 1){
    console.log(i);
}

// in số chẵn từ 1-100

for(let i = 1; i<101; i=i+1){
    if(i % 2 ==0) console.log(i);
}

// in bảng cửu chương của 3

for(let i = 1; i<11 ; i = i+1){
    console.log("3*"+i+"="+i*3)
}

//in các số lẻ trong khoảng 1-100 giảm dần

for(let i = 100; i>0 ; i=i-1){
    if(i % 2 !=0) console.log(i);
}


//while loop
let accept = false;

while (accept ==false){
    accept = confirm("Love me");
}
console.log("let's go");

const user = {
    username:"abc",
    password:"123",
}
let username;
let password;

while(username !=user.username && password != user.password){
    username = prompt("Tên tài khoản");
    password = prompt("Mật khẩu");
}
console.log("Chào mừng " + user.username + " quay trở lại");


const girls = ["xinh", "xấu","xấu","xinh", "xấu"];
for(let each of girls){
    if(each != "xinh"){
        continue;
    }
    console.log("a");
    console.log("b");
    console.log("c");
    console.log("d");
    console.log("e");
}