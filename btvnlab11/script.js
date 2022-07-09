//Bai 1 Kiem tra so nguyen to
function isPrime(number){
    let prime=true;
    let i=2;
    if(number<2){
        return prime=false;
    }else if(number==2){ return prime=true;
    }else{
        
        while(i<number){
            if(number%i==0){
                prime=false;
                break;
            }
            i++;
        }
    }
    console.log(prime);
}
isPrime(11);
isPrime(15);

//Bai 1 chua
function isPrime(number){
    if(number<2) return false;

    for(let i=2;i<number;i++){
        if(number%i==0) return false;
    } 
return true;
}
//Bai 2 cong tong so nguyen to

function sumOfPrimes(a,b){
    let total=0;
    for(let i=a;i<=b;i++){
        if(isPrime(i)==true){
            total+=i;
        }
    }return total;
    
}
console.log(sumOfPrimes(1,10));

//Bai 2 chua
function sumOfPrimes(a,b){
    let total=0; // lập biến tính tổng
    for(let i=a;i<=b;i++){ //lặp qua các số trong khoảng a-b , kiểm tra i có phải số ngto k
        if(isPrime(i)) total+=i; //nếu ngto cộng vào total
    }
    return total; // trả về tổng
}
console.log(sumOfPrimes(1,10))

// Bai 3

function fibonacci(n){
    let f0=0;
    let f1=1;
    let fn=1;
    let count=0
    if(n==0||n==1){return n;}
    else{
        for(let i=2;i<n;i++){
            f0 = f1;
            f1 = fn;
            fn = f0 + f1;
            console.log(fn);
        }
    }
}
console.log(fibonacci(5));

//Bai 3 chua

function fibonacci(n){
    let a=0;
    let b=1;
    let c;

    for(let i=1;i<=number;i++){
        if(i==1) {console.log(a);
            continue;
        }
        if(i==2) {console.log(b);
            continue;
        }

        c=a+b;
        console.log(c);
        a=b;
        b=c;
    }
}

//Bai 4
function isPalindrome(number){
    let rest; //giữ phần dư
    let reverseNumber = 0; // số đảo ngược
    let copy = number; // sao chép số ra, giữ nguyên số ban đầu

    while(number>0){
        rest = number % 10; // lấy số đơn vị cuối cùng
        reverseNumber = reverseNumber *10 + rest; //tính tổng cộng đếm vào reverse

        copy=(copy - rest) / 10; // giảm số ban đầu đi 1 hàng đơn vị
    }
    return number == reverseNumber;
}