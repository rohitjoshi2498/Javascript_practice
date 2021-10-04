// console.log('Hello');
// var x='a';
// var y='b';
// console.log(x+y,'are the two variables')
// var a=10;
// var b=20;
// a>b ? console.log('True'):console.log("false")
// var NAme1=" $$jon\"snow\" ";  //escape sequences
// console.log(NAme1);




// 8) Write a JavaScript program to find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number. Go to the editor

// Input: numbers= [10,20,10,50,60,70,40], target=50
// Output: 2, 3

// var numbers= [10,20,10,40,50,60,70]
// var sum=50;
// for(var i=0;i<numbers.length ;i++){
//   for(var j=i+1;j<numbers.length;j++){
//     if(numbers[i] + numbers[j]==sum){
//       if(i==j){
//         continue;
//       }
//       console.log(i,j)
//     }
//   }
// }




// 9)  Write a JavaScript program which iterates the integers from 1 to 100. 
// But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz".
//  For numbers which are multiples of both three and five print "FizzBuzz"
// for (var i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//         console.log('FizzBuzz')
//     }
//     else if (i % 3 == 0) {
//         console.log('Fizz')
//     }
//     else if (i % 5 == 0) {
//         console.log('Buzz')
//     }
//     else {
//         console.log(i)
//     }
// }



// *****************************************
// Functions
// function f1(x){    //here x is a parameter
//     console.log('Hello '+x)
// }

// f1('rohit')//here we are calling the function 
//here rohit is an argument

//Rest Operator  
//these are used when we dont know the number of arguments the user will enter
// function rs(...args){
//     // console.log(args)
//     var sum=0;
//     var total;
//     // var prices=args
//     for(var i=0;i<=args.length-1;i++){
//         sum+=args[i]
//     }
//     total=sum+(sum*0.18)
//     console.log('before return')
//     return total
//     console.log('after return')//after return statement no more lines can be executed ini a function

// }
// rs(50,60,80)
// rs(100,200,30,40,50)
// rs(50,50,50,50)
// rs(100)
// var totalasreturn=rs(10,20)// we are storing the function call in a variable named as totalasreturn
// console.log(totalasreturn)


//*************************
//Scopes,Local and global

// var x=10   //here x is global variable 
// function f1(){
//     var y=20 ///this is local varibale and cannot be accesed outside the function
//     console.log(y+' y is printing inside the f1')
//     console.log(x+' x printing in f1 because its global')
//     function f2(){
//         var z=40
//         console.log(z,' z printing inside f2')
//         console.log(x,' x printing inside f2')
//         console.log(y,'y inside f2')

//     }
//     console.log(x,y)
//     f2()
// }
// f1()
// // console.clear()
// console.log(x)
// console.log(y)
// console.log(z)

// console.log('line 1')
// console.log('line 2')
// console.log('line 3')
// console.log('line 4')


// ***************************************************************


// Q. Find the mising number in an array of 1 to 100
// var arr1=[0,1,2,3,5,7,8,9,10]
// // for(var i=1;i<=100;i++){
// //     arr1.push(i)
// // }
// // console.log(arr1)
// for(var i=0;i<=arr1.length;i++){
//     if(i==arr1.length-1){
//         break;
//     }

//         if (arr1[i]+1==arr1[i+1]){

//         }
//         else{
//             console.log(arr1[i]+1 +' is missing')
//         }

//     }


//********************* */
// to find the duplicate elements in an array
// var arr=[1,2,4,3,5,7,8,4,3,1,10,77,4,88,9]
// arr.sort()
// var ele=4
// var count=0;
// console.log(arr)
// for(var i=0;i<arr.length;i++){
//     if(arr[i]==ele){
//         count+=1
//     }
// }
// console.log(count)

/********************* */
// Q find largest and smallest in an  unsorted array 
// var arr = [2, 4, 3, 5, 7, 8, 4, 3, 10, 77, 4, 88, 9]
// var smallest = Infinity
// var largest = 0
// for (var i = 0; i <= arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i]
//     }
//     if (arr[i] > largest) {
//         largest = arr[i]
//     }
// }
// console.log(smallest + ' is the smallest')
// console.log(largest + ' is the largest')
//************************************** */
// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

// var arr=[1, 2, 3, 4, 5, 4, 1, 3]
// var ps=[]
// var ele=44
// for(var i=0;i<arr.length-1;i++){
//     if(arr[i]==ele){
//         ps.push(i)
//     }
// }
// if(ps.length==0){
//     console.log(-1)
// }
// else if(ps.length==1){
//     console.log(ps[0])
// }else{
//     console.log(ps)
// }


//**************************************** */
//Print the pattern
// 54321
// 5432
// 543
// 54
// 5
// for(var i=1;i<=5;i++){
//     var nu=''
//     for(var j=5;j>=i;j--){
//         nu+=j
//     }
//     console.log(nu)
// }

//*********************************************** */
//check if the string is anagram or not
// var str1='SILENT'
// var str2='LISTEN'
// var a=str1.split('').sort().join('')
// var b=str2.split('').sort().join('')
// console.log(a,b)
// if(a==b){
//     console.log('Its Anagram')
// }
// else{
//     console.log('Its not an anagram')
// }

// SWAP
// var a=10
// var b=20
// var c;
// c=a
// a=b
// b=c
// console.log(a,b)


// var ar=[1,2,3,4]
// var s=''
// console.log(ar.join(','))

//Reverse a string
var str='Hello'
var rev=''
for(var i=str.length-1;i>=0;i--){
    rev+= str.charAt(i)
}
console.log(rev)

var count=[1,,3];
for(var i=0;i<=count.length;i++){
    console.log(count[i])
}