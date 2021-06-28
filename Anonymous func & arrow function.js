//Q1- Print odd numbers
//Anonymous

let  printOdd = function(n){
    (n%2 !== 0)?console.log("odd"):console.log("even");
}
printOdd(12);

//IIFE 
(function (n){
    (n%2 !== 0)?console.log("odd"):console.log("even");
})(12);

//Q2 string into uppercase

//Anonymous 

let uppercase = function (str){
    console.log(str.toUpperCase());
}
uppercase("abc");

//IIFE 

(function (str){
    console.log(str.toUpperCase());
})("abc");
//Q3- sum of all numers in array

// anonymous 

let sum =function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    console.log(sum);
}
sum([1,2,3]);

//IIFE

(function (arr){
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum +=arr[i];
    }
    console.log(sum);
})([1,2,3]);


//Q7-REMOVE DUPLICATE FROM AN ARRAY
// Anonymous
let remD =function(arr){
    let tempArr=[];
    console.log([... new Set(arr)]);
}
remD([1,2,3,4,5,4,6]);

//IIFE

(function(arr){
    let tempArr=[];
    console.log([... new Set(arr)]);
})([1,2,3,4,5,4,6]);

//Q8 - Rotate an array by k times

//Anonymous

let rotate =function (arr,k){
let tempArr = [];

for(let i=0;i<arr.length;i++){
    tempArr.splice((i+k)%arr.length,0,arr[i]);
}
console.log(tempArr);
}
rotate([1,2,3,4,5],2);

//IIFE
( function (arr,k){
    let tempArr = [];
    
    for(let i=0;i<arr.length;i++){
        tempArr.splice((i+k)%arr.length,0,arr[i]);
    }
    console.log(tempArr);
    })([1,2,3,4,5],2);
