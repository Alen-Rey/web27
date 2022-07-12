const guess_list = {
    Randy: "Germany",
    Karla: "France",
    Wendy: "Japan",
    Norman: "England",
    Sam: "Argentina"
   };
function  greeting(name){
    for(let key in guess_list){
        if(key == name) {
           return console.log("Hi, I am"+key+" , and I am from "+guess_list[key])
        }else return console.log(" Hi! I'm a guess.");
    }
}
console.log(greeting("Randy"));
console.log(greeting("Jane"));