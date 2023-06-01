// Quetion-1:
// nums is array
//------------------------------------------
var arrayPairSum= function(nums){
    nums.sort();

    let result=0;
    numLength=nums.length;
    for (let i=0;i<numLength;i+=2){
        result+=nums[i];
    }

    return result
}


//-------------------------------------------

// Quetion-2

var distributeCandies = function(candyType) {
    const n = candyType.length >> 1;
    const set = new Set(candyType);
    return set.size > n ? n : set.size;
};

// ---------------------------------------
// Quetion-3
 
 var findLHS = function(nums) {
    let map= {};
    let maxResultLength = 0;
    
    for (let num of nums) {
        map[num] = (map[num] || 0) + 1;
    }
    
    for (const [key, value] of Object.entries(map)) {
        if (map[key - 1]) {
            maxResultLength = Math.max(maxResultLength, map[key - 1] + value);
        }
    }
    
    return maxResultLength; 
};

//-------------------------------------
// Quetion- 4



var canPlaceFlowers = function (flowerbed, n) {
  const len = flowerbed.length;
  if (n === 0 || (n === 1 && flowerbed[0] === 0 && len === 1)) {
    return true;
  }

  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 1) continue;

    const c1 = i === 0 && i + 1 < len && flowerbed[i + 1] === 0;
    const c2 = i === len - 1 && i - 1 >= 0 && flowerbed[i - 1] === 0;
    const c3 = i > 0 && i < len - 1 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0;

    if (c1 || c2 || c3) {
      flowerbed[i] = 1;
      n--;
    }

    if (n === 0) return true;
  }

  return false;
};

//------------------------------------------------
// Quetion 5 

var maximumProduct = function(nums) {
    nums = nums.sort((a,b) => a-b);
    let len = nums.length
    let max = nums[len-1]* nums[len-2]*nums[len-3];
    let max2 = nums[0]* nums[1]*nums[len-1];
    return Math.max(max, max2)
};

//------------------------------------------------
// Quetion 6

const binarySearch = (arr,x) => {
    let start = 0
    let end = arr.length-1
   
    while (start<=end) {
        let mid = Math.floor((start+end)/2)
if (arr[mid] === x) return true;
        else if (arr[mid] > x) {
            end = mid-1
        } else if (arr[mid] < x) {
            start = mid+1
        }
    }
    return false
    
}
let arr = [1,3,5,6,7,8]
let x = 3
binarySearch(arr,x)

// ------------------------------------------
// Question 7

var isMonotonic = function(nums) {
    let inc = true, dec = true;
    for (let i=1; i<nums.length; i++) {
        if (nums[i-1] < nums[i]) inc = false
        if (nums[i-1] > nums[i]) dec = false
    }

    return inc || dec
};


//------------------------------------------
// Quetion 8


var smallestRangeI = function(nums, k) {

  let max = Math.max(...nums)
  let min = Math.min(...nums)
  if(min + k < max - k) return (max - k) - (min + k)
  else return 0
};

