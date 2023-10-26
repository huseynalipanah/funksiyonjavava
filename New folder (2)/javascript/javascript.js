// let x = prompt()
// let y = prompt()
// let z = prompt()

// if ( x> y-z && x<= y+z) {
//     console.log("Terefleridir")
// }
// else {
//     console.log(" Terefleri deyil ")
// }
// let x = prompt()

// if (x%3===0 && x%2===0) {
//     console.log("true")
// }
// else {
//     console.log(" false")
// }
// const arr = [31, 32, 33, 34, 4];
// for (let i = 0; i < arr.length; i ++) {
//   console.log(i + "-" + arr[i]);
// }
// let i = 0
// while (i < arr.length) {
//   console.log(i + "-" + arr[i])
//  i++
// }

// let sum = 0;
// for (let i = 0; i <= 100 ; i++) {
//   if (i % 2 === 1) {
//     sum += i;
//   }

// }
// console.log(sum)
// let sum = 0;
// for (let i = 0; i < 100 ; i++) {
//   if (i % 2 === 0) {
//     sum += 1;
//   }

// }

// console.log(sum)
// let a = 10;
// let b = 20;

// [a, b] = [b, a];

// console.log("a deyisheni: " + a);
// console.log("b deyisheni: " + b);

// let a = prompt();
// let sum = 1;

// for (let i = 1; i <= a; i++) {
//   sum = sum * i;
// }
// console.log(sum);

// const arr = [20 , 34 , 203 , 400];

// for(let i = 0 ; i<5 ; i ++ ){
// if (arr[i]%2 == 0 ){
//   console.log(arr[i]);
// }

// }

// let arr = [20 , 34 , 203 , 400];

// for(let i = 0 ; i<5 ; i ++ ){
//   if (arr[i] > 200 ){
//   console.log("true");
//   }

//   else{
//     console.log("false")
//   }

// }
// let sum=0;
// let edediOrta=0;
// let arr = [5, 6, 7];
// for (let i = 0; i < arr.length; i++) {
// sum+=arr[i];
// edediOrta=sum/arr.length;
// }
// console.log(edediOrta)
// const arr = [1 , 2 , 3 ,32 , 4 , 51 ,5 ]
// for (let i = 0; i < arr.length; i++){
//   if (i % 2 == 0 ){
//     console.log(arr[i]);
//   }
// }

// const arr = [1 , 2 , 3 ,32 , 4 , 51 ,5 ]
// let max = arr[0]
// for (let i = 0; i < arr.length; i++){
//   if(arr[i] > max ){
//     max = arr[i]
//   }
// }
// console.log(max);

// expression
// const x = function (a, b , c) {return a + b + c}
// console.log( x (1, 2 ,3) );

// Arrow
// const x = (a, b, c) => a * b * c;
// console.log(x(1, 2, 3));

// function edediOrta(...params) {
//   let sum = 0;
//   for (let i = 0; i < params.length; i++) {
//     sum += params[i];
//   }
//   return sum / params.length;

// }

// console.log(edediOrta(1, 2, 3, 4, 5));

// function enboyuk(...params) {
//   let max = params[0];
//   for (let i = 1; i < params.length; i++) {
//     if (params[i] > max) {
//       max = params[i];
//     }
//   }
//   return max;
// }
// let params = [1, 2, 3, 4, 32];
// console.log(enboyuk(...params));

// function enboyuk(...params) {
//   let min = params[0];
//   for (let i = 1; i < params.length; i++) {
//     if (params[i] < min) {
//       min = params[i];
//     }
//   }
//   return min;
// }
// let params = [1, 2, 3, 4, 32];
// // console.log(enboyuk(...params));

// function include(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === val) {
//       return true;
//     }
//   }
//   return false;
// }

// let arr = [1, 2, 3, 4, 5];
// console.log(include(arr, 2));
// // console.log(include(arr, 6));

// Task 12
// function task12(text) {
//   text = text.toString()
//   const arr = []
//   for (let i = 0; i < text.length; i++) {
//     arr.push(text[i])

//   }
//   return arr
// }
// console.log(task12(123));

// Task 13

// function task13(text) {
//   text = text.toString();
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     arr.push(text[i]);
//   }

//   let max = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     if (max < arr[j]) {
//       max = arr[j];
//     }
//   }
//   return max;
// }
// console.log(task13(123));

// Task 14

// function task14(text) {
//   text = text.toString();
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     arr.push(text[i]);
//   }

//   let min = arr[0];
//   for (let j = 0; j < arr.length; j++) {
//     if (min > arr[j]) {
//       min = arr[j];
//     }
//   }
//   return min;
// }
// console.log(task14(123));

// Task 15

// function task15(text) {
//   text = text.toString();
//   const arr = [];
//   for (let i = 0; i < text.length; i++) {
//     arr.push(text[i]);
//   }

//   let sum = 0;
//   let vur = 1;
//   let edort = 0;
//   for (let j = 0; j < arr.length; j++) {
//     sum += +arr[j];
//     vur *= +arr[j];
//   }
//   edort = sum / arr.length;

//   console.log(sum, vur, edort);
// }
// console.log(task15(123));

// Task 16
// function task16(num) {
//   const arr = [];
//   for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push[i];
//     }
//   }
//   console.log(arr)
// }
// console.log(task16(4));
