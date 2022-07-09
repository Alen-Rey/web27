//Bài 1
let str = " hello world";

function capitalize(str) {
  let trimmed = str.trim();

  let firstChar = trimmed.slice(0, 1);
  let secondChar = trimmed.slice(1);

  firstChar = firstChar.toUpperCase();
  secondChar = secondChar.toLowerCase();

  let result = firstChar.concat(secondChar);

  return result;
}

console.log(capitalize(str));

//Bài 2

function title(str) {
  let arr = str.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = capitalize(arr[i]);
    return arr;
  }
  return (str = arr.join(" "));
}
console.log(title(" xin chào "));

//Bài 3
function protectEmail(email) {
  let firstChar = email.slice(0, email.length - 10);
  let seconChar = firstChar.slice(2, firstChar.length);
  return (result = email.replaceAll(seconChar, "..."));
}
console.log(protectEmail("banx2x@gmail.com"));

//Bài 4
function reverse(str) {
  let array = str.split("");
  array = array.reverse();
  str = array.join();
  return str;
}
console.log(reverse("abc de"));

//Bài 5
function countVowel(str) {
  let array = str.split("");
  let count = 0;
  for (let i = 0; i < array.length; i++) {
    if (
      array[i] == "a" ||
      array[i] == "e" ||
      array[i] == "i" ||
      array[i] == "o" ||
      array[i] == "u"
    ) {
      count = count + 1;
    }
  }
  return (result = count);
}
console.log(countVowel("hello"));

//Bài 6
function reverseWords(str) {
  let words = str.split(" ");
  words = words.reverse();
  str = words.join(" ");
  return str;
}
console.log(reverseWords("anh hai"));

//Bài 7

//Bài 8
function parameterize(str) {
  let array = str.split(" ");
  strnew = array.join("-");
  strnew = strnew.toLowerCase();
  return (result = strnew);
}
console.log(parameterize("Hello mn"));

//Bài 9
function isPalindrome(str) {
  let trimmed = str.trim();
  let array = trimmed.split("");
  array = array.reverse();
  strnew = array.join("");
  if (str == strnew) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("abcba"));