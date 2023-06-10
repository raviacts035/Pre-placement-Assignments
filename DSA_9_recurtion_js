/*
Given an integer `n`, return *`true` if it is a power of two. Otherwise, return `false`*.
An integer `n` is a power of two, if there exists an integer `x` such that `n == 2x`.
*/

function isSquare(n){
    if (n!=0 && n%2==0) return true
    return false
}

// console.log(isSquare(15))
// true

// Q2. Given a number n, find the sum of the first natural numbers.

function sumOfNatural(n){
    if (n==1) return 1;

    return n+ sumOfNatural(n-1)
}

// console.log(sumOfNatural(5))
// 15

/* 
Q3. Given a positive integer, N. Find the factorial of N. 
*/
function factorialOfNatural(n){
    if (n==1) return 1;

    return n * factorialOfNatural(n-1)
}

// console.log(factorialOfNatural(5))
// 120


/*
Q4. Given a number N and a power P, the task is....
*/
function exponentialOfN(n,p){
    if (p==1) return n

    return n * exponentialOfN(n,p-1)
}

// console.log(exponentialOfN(5,2))
// 25

/*
Q5. Given an array of integers arr, the task is to find maximum ele....
*/
function maxNumOfArr(arr, index=0){
    if (index==arr.length-1) return arr[index];

    return Math.max(arr[index], maxNumOfArr(arr, index+1))
}
// console.log(maxNumOfArr([1, 4, 3, -5, -4, 8, 6]))
// 8

/* 
Q6. Given first term (a), common difference (d) and a integer N of
the Arithmetic Progression series, the task is to find Nth term of the series.
*/
function nThTerm(a,d, n){
    if (n==1) return a;
    
    return  nThTerm(a+d,d,n-1)
}
// console.log(nThTerm(5,2,10))
// 23

// Q7. Given a string S, the task is to write a program to print all permutations of a given string.
function allPermu(str, l=0, r=str.length-1)
{
    // swap function
    function swap(a, i, j)
    {
        let temp;
    let charArray = a.split("");
    temp = charArray[i] ;
    charArray[i] = charArray[j];
    charArray[j] = temp;
    return (charArray).join("");
    }

    // main code
    if (l == r)
            console.log(str);
        else
        {
            for (let i = l; i <= r; i++)
            {
                str = swap(str, l, i);
                allPermu(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
}

// allPermu("ABC")

// Q8. Given an array, find a product of all array elements.
function sumOfArr(arr, index=0){
    if (index==arr.length-1) return arr[index]

    return arr[index] * sumOfArr(arr, index+1)
}
// console.log(sumOfArr([1, 2, 3, 4, 5]))
// 120
