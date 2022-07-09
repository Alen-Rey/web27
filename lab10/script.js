let input = Number(prompt("Nhập số",0))  //Hoặc input = +prompt("Nhập số",0) để chuyển dạng chuỗi về dạng số
let a=prompt("Nhập số",0)
function chanle(a){
    result = a%2;
    return result;
}
if(result = 0){
    console.log("So nay chia het cho 2");

}else{
    console.log("So nay khong chia het cho 2");
}

//if else nếu thì, nêu bỏ else thì đoạn mã chỉ thực hiện khi if đúng, còn else thì không làm gì

//nếu mưa
if(condition){
    //mang áo mưa
}else{
    ////mang mũ
}

if(condition){
    //mang áo mưa
}

if(condition){
    //mang áo mưa
}else if(condition){// nếu nắng
    // mang mũ
}else if(condition){//nếu âm u
    //mang cả áo mũ
}else{
    //không mang gì hết
}

if(isWeekend){
    if(haveMoney){
        if(haveLover){
            console.log("Rủ ny");
        }else{
            console.log("Rủ bạn");
        }
    }else{
        console.log("Ngủ");
    }
}else{
    if(isHoliday){
        if(haveMoney){
            if(haveLover){
                console.log("Rủ ny");
            }else{
                console.log("Rủ bạn");
            }
        }else{
            console.log("Ngủ");
        }
    }else{
        console.log("Keep working");
    }
}

if(isWeekend||isHoliday){
    if(haveMoney && haveLover){
        console.log("Rủ ny");
    }else if(haveMoney){
        console.log("Rủ bạn");
    }else{
        console.log("Ngủ");
    }
}else{
    console.log("Keep Working");
}

//Khi mà điều kiện không liên quan đến nhau thì tách riêng từng if else
if(isMonday){}
if(isTuesday){}

//Khi mà điều kiện liên quan đến nhat => kiểm tra điều kiện nhỏ nhất trước ( biến/ tập giá trị nhỏ nhất)

//Kết hợp các điều kiện cho cấu trúc gọn gàng tối ưu

//Nếu condition là biểu thức thì nên tính toán trước rồi gán vào biến để dễ đọc

function isOddNumber(number){
    result=number % 2;
    return result
}
if( result=1){
    console.log("Đây là số lẻ");
}else{
    console.log("Đây không phải số lẻ");
}