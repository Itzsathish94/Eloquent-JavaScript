// Define the function min that takes two arguments and returns their minimum.

// function min(a,b){
//     return a <= b ? a : b;
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// We’ve seen that we can use % (the remainder operator) to test whether a number
// is even or odd by using % 2 to see whether it’s divisible by two. Here’s another
// way to define whether a positive whole number is even or odd:
// • Zero is even.
// 53
// • One is odd.
// • For any other number N, its evenness is the same as N - 2.
// Define a recursive function isEven corresponding to this description. The
// function should accept a single parameter (a positive, whole number) and return
// a Boolean.
// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
// way to fix this?

// function isEven(num){
//     if(num<0) return `Input number greater than 0`
//     if(num===0) return true;
//     if(num === 1) return false;
//     return isEven(num-2);
// } 

// console.log(isEven(-1))

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Bean counting
// You can get the Nth character, or letter, from a string by writing [N] after the
// string (for example, string[2]). The resulting value will be a string containing
// only one character (for example, "b"). The first character has position 0, which
// causes the last one to be found at position string.length - 1. In other words,
// a two-character string has length 2, and its characters have positions 0 and 1.
// Write a function called countBs that takes a string as its only argument and
// returns a number that indicates how many uppercase B characters there are in
// the string.
// Next, write a function called countChar that behaves like countBs, except
// it takes a second argument that indicates the character that is to be counted
// (rather than counting only uppercase B characters). Rewrite countBs to make
// use of this new function.

// function countBs(str,index=str.length-1,count=0){
//     if(index <0) return count;
//     return str[index] === 'B' ? countBs(str,index-1,count+1) : countBs(str,index-1,count);
// }

// console.log(countBs('BARBB'))

// function countChar(str,index=str.length-1,countB=0,char=0){
//     if(index <0) return `B's => ${countB} , Chars => ${char}`;
//     return str[index] === 'B' ? countChar(str,index-1,countB+1,char+1) : countChar(str,index-1,countB,char+1);
// }

// console.log(countChar('BARBB'))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

