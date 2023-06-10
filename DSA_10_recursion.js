/** 
* Q1. Given an integer `n`, return *`true` if it is a power of three. Otherwise, return `false`*.
* An integer `n` is a power of three, if there exists an integer `x` such that `n == 3x`.
*/

function isSquare(n){
    if (n!=0 && n%3==0) return true
    return false
}
// console.log(isSquare(27))
// false

/**
 * Q2. You have a list `arr` of all integers in the range `[1, n]` sorted in a strictly increasing order. Apply the following algorithm on `arr`:
 * Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.
 */

var lastRemaining = function(n) {
    if (n==1) {
        return 1
    }

    return 2* (Math.floor(n/2)- lastRemaining(Math.floor(n/2))+1)
};

/**
 * Q3. 
 */

function helper(arr, ans, l, r, sum){
    if (l>r) {
        ans.push(sum);
        return
    }
    helper(arr,ans, l+1, r, sum+arr[l]) // present
    helper(arr,ans, l+1, r, sum) // absent
}

function subsetSums(arr,n){
   //code here
   let ans=[];
   helper(arr, ans, 0, n-1, "");
   return ans.sort(function(a, b){return a-b})
}
// console.log(subsetSums("abc",3))
// [ “”, “a”, “b”, “c”, “ab”, “ac”, “bc”, “abc”]

/**
 * 
 * Q4. 
 */
function recStrLen(str)
{
    if (str == "")
        return 0;
    else
        return recStrLen(str.slice(1,)) + 1;
}

// console.log(recStrLen("abcd"))
// 4

/**
*Q5. We are given a string S, we need to find count of all contiguous substrings starting and ending with same character.
 */

function contigSubStr(str, l=0,r=str.length-1, n=str.length){
    if (n==1) return 1
    if (n<=0) return 0
    let count =contigSubStr(str, l+1,r, n-1) + contigSubStr(str, l,r-1, n-1) -contigSubStr(str, l+1,r-1, n-2)
    if (str[l]==str[r]) count++

    return count
}

// console.log(contigSubStr("abcab"))

/**
 * Q6. 
 */

/**
 * Q7. Given a string str, the task is to print all the permutations of str. A permutation is an arrangement 
 * of all or part of a set of objects, with regard to the order of the arrangement.
 */
