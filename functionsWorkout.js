//01/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Define the function min that takes two arguments and returns their minimum.

// function min(a,b){
//     return a <= b ? a : b;
// }

//02////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//03///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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


//04////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to and including end.

// function buildArray(start,end){
//     let arr = [];
//     for(let i=start;i<=end;i++){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(buildArray(1,10))

//05////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Next, write a sum function that takes an array of numbers and returns the
// sum of these numbers. Run the example program and see whether it does
// indeed return 55.

// function sumArray(arr){
//     let sum=0
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     return sum;
// }

// console.log(sumArray(buildArray(1,10)))

//06////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// As a bonus assignment, modify your range function to take an optional third
// argument that indicates the “step” value used when building the array. If no
// step is given, the elements should go up by increments of one, corresponding
// to the old behavior. The function call range(1, 10, 2) should return [1,
// 3, 5, 7, 9]. Make sure this also works with negative step values so that
// range(5, 2, -1) produces [5, 4, 3, 2].

// function buildArray(start,end,step=0){
//     let arr = [];
//     for(let i=start;i<=end;i=i+step){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(buildArray(1,10,2))

///07//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// For this exercise, write two functions, reverseArray
// and reverseArrayInPlace. The first, reverseArray, should take an array as its
// argument and produce a new array that has the same elements in the inverse
// order. The second, reverseArrayInPlace, should do what the reverse method
// does: modify the array given as its argument by reversing its elements. Neither
// may use the standard reverse method.

// function reverseArray(arr){
//     let reversedArr = [];
//     for(let i=arr.length-1;i>=0;i--){
//         reversedArr.push(arr[i]);
//     }
//     return reversedArr;
// }

// console.log(reverseArray([1,2,3,4]))

// function reverseArrInPlace(arr,left=0,right=arr.length-1){
//     while(left<=right){
//         [arr[left],arr[right]] = [arr[right],arr[left]]
//         left++
//         right--
//     }
//     return arr;
// }

// console.log(reverseArrInPlace([1,2,3,4]))

///08//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function arrayToList(arr){
    let list = null;
    for(let i=arr.length-1;i>=0;i--){
        list = {value:arr[i],rest:list};
    }
    return list;
}

console.log(arrayToList([1,2,3,4]))

function listToArray(list){
    let arr=[];
    while(list!==null){
        arr.push(list.value);
        list = list.rest;
    }
    return arr;
}

function prepend(element, list) {
    return { value: element, rest: list }; 
}

