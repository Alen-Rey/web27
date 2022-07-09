function logData(data){
    console.log(data);
}

function  duy(callback) {
    console.log("duy đi mua bò húc");
    let bohuc = "Red bull";
    requester(bohuc);
}

function ba(bohuc){
    console.log("uống",bohuc);
    console.log("chưa trả tiền");
}
///

let arr = ["Sang","Tuấn","Đạt","Thuần"]
//Cách bthg
for(let name of arr) console.log(name.toUpperCase());
//Cách dùng for each
function logUpperName(name){
    console.log(name.toUpperCase());
}
arr.forEach(logUpperName)
//Khai báo trực tiếp hàm trong for each
arr.forEach(function(name){
    console.log(name.toUpperCase());
})

//in tên
function logConsole(name){
    console.log(name);
}
arr.forEach(logConsole)

//Truyền cả value.index,arr
arr.forEach(console.log)
//tương đương
for(let i=0;i<arr.length;i++){
    console.log(arr[i],i,arr);
}

//tìm 1 tên bắt đầu bằng T
let namee;
for(let i=0;i<arr.length;i++){
    if(arr[i].startsWith('T')){
        namee = arr[i];
        break;
    }
}
//dùng find tìm
arr.find(function(name){
    if(name.startsWith('T')) return true;
    else return false;
})

//tìm tất cả tên bắt đầu bằng T
result = [];
for(let index = 0; index<arr.length;index ++){
    if(arr[index].startsWith('T')) result.push(arr[index]);
}
//dùng filter
arr.filter(function(name){
    return name.startsWith('T');
})

//lấy kí tự đầu của mỗi tên
result = [];
for(let index = 0; index<arr.length;index ++){
    result.push(arr[index].charAt(0));
}
//dùng map
arr.map(function(name){
    return name.charAt(0);
})



result = [];
for(let index = 0; index<arr.length;index ++){
    result.push(arr[index].length);
}
console.log(result);

arr.map(function(name){
    return name.length;
})

x=10;
let arr1 = [3,4,5,6];
arr1.reduce(function(total,number){
    total+=number;
    return total;
},x);
//cộng tổng thêm giá trị x, x sẽ là điểm cộng khởi đầu


arr2 = [{a:10, b:10}, {a:15, b:50}]
arr.reduce(function(result,object,index){
    result['a_'+index] = object.a;
    result['b_'+index] = object.b;

    return result;
},{});

arr3 = [2,4,6,12]
arr3.sort(function(number1, number2){
    if(number1 < number2) return -1;
    else return 1;
})

cong = {
    name:'Công',
    age:24,
    weight:80
}
sang = {
    name:'Sang',
    age:27,
    weight:60
}
dat = {
    name:'Dạt',
    age:23,
    weight:45
}
tuan = {
    name:'Tuấn',
    age:23,
    weight:70
}
let student=[cong,sang,dat,tuan]

student.sort(function(student1,student2){
    if(student1.weight<student2.weight) return -1;
    else return 1;
})

student.sort(function(student1,student2){
    if(student1.age<student2.age) return -1;
    else return 1;
})


student.sort(function(student1,student2){
    if(student1.name.charAt(0)<student2.name.charAt(0)) return -1;
    else return 1;    
})


//bài 1 array 
function max(arr){
    let max = arr[0];
    for( let number of arr) if (number > max) max = number;
    return max;
}
max([1,5,3,2,4])

//bài 2 array
function minMax(arr){
    let min = max = arr[0];
    for( let number of arr){
        if (number > max) max = number;
        if (number < min) min = number;
    }
    return [min,max];
}
minMax([1,5,3,2,4])

//bài 3 array
function avg(arr){
    let total = arr.reduce(function(sum,number){
        sum+=number;
        return sum;
    })
    return total / arr.length;
}
avg([1,5,3,2,4])

//bài 4
function swap(arr,a,b){
    let tempt = arr[a];
    arr[a] = arr[b];
    arr[b] = tempt;
}

//bài 6
function mix(arr1,arr2){
    let result = [];
    for(let index = 0; index<arr1.length; index ++){
        result.push(arr1[index],arr2[index]);
    }
    return result;
}

//bài 7
function shuffle(arr){
    for(let index = 0; index < arr.length -1; index++){
        const randomIndex = Math.floor(Math.random() * (arr.length -index -2)) +index + 1;
        swap(arr,index,randomIndex);
    }
    return arr;
}

console.log(shuffle([1,2,3,4,5]));

//Bài 8
function intersection(arr1, arr2){
    let arr8 =[];
    for( let i=0;i<arr1.length;i++){
        arr2.find(function(number){if(number == arr1[i]){                
            arr8.push(number);
            return true;
        }else return false;})
    }return arr8;
}
console.log(intersection([1,2,3],[2,3,4,5]));

//Bài 9
function difference(arr1, arr2){
    let arr9=[];
    arr9.concat(arr1,arr2);
    for(let i=0;i<arr9.length;i++){
        arr9.find(function(number){
            if(number==arr9[i]){
                arr9.splice(i);
                return true;
            }else return false;
        })
    }return arr9;
}
console.log(difference([1,2,3],[2,3,4,5]));

//Bài 10
function removeDuplicate(arr){
    let arr10=[arr[0]];
    for(let i=1;i<arr.length;i++){
        if(arr10.includes(arr[i])==false){
            arr10.push(arr[i]);
        }
    }return arr10;
}
console.log(removeDuplicate([1,2,3,3,4,4,5]));

//Bài 11
function filterRange(arr, a, b){
    arr.filter(function(number){
        return number>=a&&number<=b;
    });
}
console.log(filterRange([1,2,3,4,5], 2, 4));

//Bài 12
const users1 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
   ];
function getNames(users){
    users.map(function(name){
        return name;
    });
}
console.log(getNames(users1));

//Bài 13 
const users2 = [
    { name: "John", surname: "Smith", id: 1 },
    { name: "Pete", surname: "Hunt", id: 2 },
    { name: "Mary", surname: "Key", id: 3 }
   ];
function mapFullname(users){
    users.map(function(fullname){
        return fullname=users.name+users.surname;
    });
    delete users.name;
    delete users.surname;
    return users;
}
console.log(mapFullname(users2));

//Bài 14
const users3 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
   ];
function greaterThan(users, age){
    number = age;
    arr.filter(function(age){
        return age>=number;
    });
}
console.log(greaterThan(users3,29));

//Bài 15
let users15 = [
    { name: "John", age: 25 },
    { name: "Pete", age: 30 },
    { name: "Mary", age: 28 }
   ];
function avgAge(users){
    const total = users.reduce(function(total,user){
        return total+=user.age;
    },0);
    return total / users.length;
}
console.log(avgAge(users15));

//Baif 7 date
function humanize(date){
    const now = new Date();

    const diff = Math.floor((now.getTime() - date.getTime())/1000);

    if(diff<5) return "Just now";
    else if (diff<60) return `${diff} seconds ago`;
    else if (diff<3600) return `${Math.floor(diff/60)} minutes ago`;
    else if (diff<86400) return `${Math.floor(diff/3600)} hours ago`;
    else if (diff<2592000) return `${Math.floor(diff/86400)} days ago`;
    else if (diff<946080000) return `${Math.floor(diff/2592000)} months ago`;
    else return "Long time ago";
}

const now = new Date();
console.log(humanize(now));

now.setSeconds(now.getSeconds()-3);
console.log(humanize(now));

now.setSeconds(now.getSeconds()-40);
console.log(humanize(now));

now.setMinutes(now.getMinutes()-10);
console.log(humanize(now));
