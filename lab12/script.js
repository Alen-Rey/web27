

 
 //Dot notation => ưu tiên sử dụng
 //obj.key obj.method()

 //Bracket notation => thường sử dụng cho biến
 //obj["key"]  obj["method"]()

 //Tên thuộc tính không bị giới hạn như là tên biến => lưu theo dạng chuỗi
 

 //Mỗi một loại đối tượng có sẵn trong java script sẽ có propotype riêng và thông qua propotype thì cung cấp các phương thức để làm việc với nó 

let obj = {
    a:1,
    b:2,
    c:3,
    d:4,
}

//obj[key]


let mySelf = {
    name: "Sang",
    born:"1995",
    hobby:"Music",
    gender:"male",
    savemoney: function(){
        console.log("Save money");
    },
    paidmoney: function(){
        console.log("Paid money");
    },

    eat(){   //rút gọn
        console.log("eat")
    },
};
let key = prompt("What you want to know");
console.log(mySelf[key]);

console.log(mySelf);
 console.log(mySelf.name); //truy cập thuộc tính obj.key
 mySelf.savemoney(); // truy cập phương thức obj.method()


 delete mySelf.born;
// dùng in
 console.log("name" in mySelf); //true // tìm kiems thuộc tính

 for(let key in mySelf){
    console.log(key); //in ra key
 }
 for(let key in mySelf){
    console.log(mySelf[key]); // in ra value
 }
 for(let key in mySelf){
    console.log(key + ":" + mySelf[key]); 
 }


 let ba={
    name:"Ba",
    speak(){
        console.log("Hello I'm "+this.name);
    }
 }
 let sang={
    name:"Sang",
 }

 sang.speak = ba.speak;
 ba.speak(); // this=ba
 sang.speak(); //this=sang

 // this là đối tượng ở trước dấu. 
 //this dùng để truy cập đến các thuộc tính của đối tượng

 let dog={
    name:"red",
    age:1,
    breed:"Corgi",
    leg:4,
 bark(){
    console.log(this.name + "is barking");
 },
 run(){
    console.log(this.name + "is running on " + this.leg + "leg");
 },
 crazy(){
    this.bark();
    this.run();
 },
 //tự động gọi khi chuyển đối tượng về dạng nguyên thủy string-chuỗi, valuaOf- dạng số
 toString(){
    return this.name;
 },
 valueOf(){
    return this.age;
 }
}

console.log(String(dog));
console.log(dog -1);


function Book(isbn, author, title, page){
    this.isbn = isbn;
    this.author = author;
    this.title = title;
    this.page = page;
}

const book1 = new Book("1","Ba","Java","10");
const book2 = new Book("2","Bon","Java","100");
const book3 = new Book("3","Bao","Java","10");
const book4 = new Book("4","Bac","Java","100");
const book5 = new Book("5","Bang","Java","100");
const book6 = new Book("6","Bach","Java","100");

console.log(book1);
console.log(book2);
console.log(book3);
console.log(book4);
console.log(book5);
console.log(book6);


function Weapon(name, type, damage, speed){
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.speed = speed;
}
Weapon.prototype.throw = function(){
    console.log(this.name + " is coming !");
}
Weapon.prototype.slash = function(){
    console.log(this.name + " is slashing !");
}

const weapon1 = new Weapon("Scimitar","Near","10","Medium");
const weapon2 = new Weapon("Bow","Far","5","Fast");
const weapon3 = new Weapon("Dagger","Near","8","Fast");
const weapon4 = new Weapon("Hammer","Near","12","Slow");



function Character(name, hp, armor, level, weapon){
    this.name = name;
    this.hp = hp;
    this.armor = armor;
    this.level = level;
    this.weapon = weapon;
}

Character.prototype.attack = function(other){
    const damaged = this.weapon.damage - other.armor;
    other.hp -= damaged;
};
Character.prototype.changeWeapon = function(newWeapon){
    this.weapon = newWeapon ;
};

const yi = new Character("Yi","20","5","10","Scimitar");
const vi = new Character("Vi","25","7","12","Hammer");

console.log(yi);
console.log(vi);

yi.changeWeapon(weapon4);

console.log(yi);

yi.attack(vi);

console.log(vi);



const scrore={ 

};
function findScore(name){
    //Lắp qua từng chữ cái trong name
    for(let char of name){
        //chuyển từng chữ cái thành dạng viết hoa
        char = char.toUpperCase();
        //lấy điểm tương ứng trong score
        const point = scrore[char];
        //cộng dồn
        totalPoint += point;
    }
    //sau khi có tổng điểm thì so sánh với bảng kết quả và in ra kết quả
    if(totalPoint<60) console.log("not too good");
    else if(totalPoint<300) console.log("pretty good");
    else if(totalPoint<600) console.log("good");
    else console.log("very good");

}