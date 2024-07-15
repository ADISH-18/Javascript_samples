
// multiples of 3 and 5
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("FizzBuzz");
    }
    else if (i % 3 == 0) {
        console.log("Fizz");
    }
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//palindrome
let str = prompt("Give the word to check Palindrome or not");
let rev = "";
for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
}
if (str == rev) {
    console.log("Palindrome");
}
else {
    console.log("Not a palindrome");
}

//largest number in an array
let arr = [1, 2, 3, 4, 5, 6];
let max = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}
console.log("Largest element in the array is: " + max);

//function that takes string and returns an object with each character as key and its number of occurence as the value
function count(str) {
    let obj = {};
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]] == undefined) {
            obj[str[i]] = 1;
        }
        else {
            obj[str[i]] += 1;
        }
    }
    return obj;
}
console.log(count("Hello Friends"));

//longest word in the sentence
let string=prompt("Enter A Sentence and I'll find the longest word");
let temp=string.split(" ");
let maximum=0;
let word="";
for(let i of temp){
    if (i.length>maximum){
        maximum=i.length;
        word=i;
    }
}
console.log(word);

//factorial of a number
function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n*factorial(n-1);
    }
}
console.log(factorial(Number(prompt("Enter the number and I can return the Factorial"))));

//celsius to fahrenheit
function celsiusToFahrenheit(celsius){
    return (celsius*9/5)+32;
    }
    console.log(celsiusToFahrenheit(Number(prompt("Enter the degree in celsius: "))));

// //missing number in an array
function missingNumber(arr) {
    let n = arr.length;
    let sum = (n * (n + 1)) / 2;
    let sum1 = 0;
    for (let i of arr) {
        sum1 += i;
    }
    return sum - sum1;
}
console.log(missingNumber([0,1,2,3,4,5,6,8]));