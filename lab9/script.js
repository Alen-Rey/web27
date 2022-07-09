/*alert("Hello Alen");*/
//alert(Hello Java Script) - để hiển thị một thông báo trên trình duyệt 
//alert(message); kết thúc bằng dấu ; (không bắt buộc nhưng nên có dấu ;)

console.log("Hello Alen");

//console.log(data) - hiển thị một nội dung trên console để developer kiểm tra
//var,let,const 3 keyword để khai báo biến
//Cú pháp: keyword variableName = value ;

//Khai báo với let và const chỉ khai báo một lần

//Khai báo biến kèm giá trị
let myName = "Sang";
let myAge ="27";
let myHobby =  "Food";

//Khai báo biến không kèm giá trị
let myPhoneNumber;

//Biến giống như một hộp cho phép đựng giá trị bên trong

myPhoneNumber = "0988897xxx";

//Thay đổi dữ liệu của biến
myHobby ="Music"
console.log(myName);
console.log(myAge);
console.log(myHobby);
console.log(myPhoneNumber);

//const sử dụng cho những giá trị xác định được từ đàu và không thể thay đổi

//var let trường hợp đặc biệt vấn đúng - var là mã cũ

// "" dùng để ghi chuỗi, còn kí tự thì không cần

//kiểu nguyên thủy- kiểu cơ bản
//Số - sử dụng kí tự số để biểu diễn giá trị
let todayLuckyNumber = 68;
let myHeight = 1.65;
//Chuỗi - sử dụng kí tự bất kì nhưng phải đặt trong "" '' ``
let myJob = "aaa";
//Logic(Boolean) - chỉ có 2 hằng số true/false
let amIHandsome = true; //1
let amIRich = false; //0
//undefined - đại diện một giá trị chưa được xác định
let something; //undefined
//null - đại diện cho một biến không có giá trị
let abc = null;



//object,function - kiểu phức hợp - cho phép lưu trữ nhiều giá trị trong một biến duy nhất và mỗi giá trị(value) được ánh xạ với 1 khóa(key/property)
let sang = {
    //key:value và các giá trị ngăn cách bởi dấu phẩy
    name: "Sang",
    age: 27,
    job: "aaa",
    hobby:"Music",
    isHandsome: true,
};
//in ra toàn bộ giá trị console.log(...data:sang)
console.log(sang);
//cú pháp để truy cập từng giá trị đơn lẻ obj.key(dot notation)
console.log(sang.name);

console.count("123");
console.count("123");
console.count("123");
console.warn("haha");

//typeof kiểm tra kiểu
//kết quả là một chuỗi đại diện cho kiểu
console.log(typeof sang);
console.log(typeof myAge);
console.log(typeof myHeight);
console.log(typeof myHobby);
console.log(typeof myJob);
console.log(typeof myName);
console.log(typeof myPhoneNumber);

//function là cách để cấu trúc mã (gói các đoạn mã vào trong block/khối mã)
//giúp tái sử dụng mã

//function là 1 chương trình
//cú pháp function funcName() {}
//input của hàm được khai báo bên trong () parameters
function greeting(name) {
    //sử dụng , cho phép in hàng loạt nhiều giá trị
    console.log("Hàm nhận vào tham số name có giá trị là:",name);
    //Sử dụng cú pháp nối chuỗi
    console.log("Chào mừng " + name + " đến với trang web!");
}

//gọi hàm funcName()
//truyền input vào cho hàm - arguments (đối số)
//input truyền vào theo thứ tự tương ứng trong khai báo
greeting("Ba"); //name= "Ba"
greeting("Đạt"); //name="Đạt"
greeting("Sang"); //name="Sang"

//1 - thực hiện tác vụ/ công việc nào đó


//2 - hàm tính toán và trả về kết quả
function add(a,b){
    let result = a + b;
    return result ;
}
const result = add(1, 2);
console.log("Kết quả phép tính 1+2= " +result);

//sub(a,b) thực hiện trừ a và ba trả lại kết quả
function sub(a,b){
    let result = a - b;
    return result ;
}
console.log("Kết quả phép tính 7-5= " +sub(7,5));

//chia
function div(a,b){
    let result = a / b;
    return result ;
}
const result2 = div(10, 2);
console.log("Kết quả phép tính 10/2= " +result2);

//nhân
function mul(a,b){
    let result = a * b;
    return result
}
const result3 = mul(2,5);
console.log("Kết quả phép tính 2*5=" +result3)

//alert("")
//console.log(data)

//Với toán tử +
//Nếu có 1 toán hạng là chuỗi sẽ ưu tiên chuyển toán hạng còn lại thành chuỗi -> phép nối chuỗi
//còn lại tất cả các trường hợp khác chuyển thành số -> phép cộng số

//với tất cả các toán tử khác - / * % ** chuyển thành số -> tính toán số

//NaN nếu là cộng chuỗi-> chuỗi, còn các phép khác ->NaN


function greeting(username){
    username = username || "Alen" // Hàm || chọn phần tử đúng, nếu username trống- false sẽ chọn Alen
    console.log("Chào mừng " + name + " đến với trang web!");

}

isAdmin = true
if(isAdmin){
    console.log("Hello quan tri vien");
}else{
    console.log("Go away!");
}

//Hàm confirm - hàm lựa chọn 
confirm("Do you like that?"); //true
let agree = confirm("Do you like that?");
agree //true - theo giá trị lựa chọn của confirm

//Hàm input - nhập
let input = prompt("Nhập số",0)
input //123
// Nếu người dùng bấm cancel--> null
//kết quả trả về khi người dùng nhập giá trị -> string