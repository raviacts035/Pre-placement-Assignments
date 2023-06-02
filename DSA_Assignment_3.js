// Javascript Solutions
// Quetion 1

var threeSumClosest = function(A, target) {
    A.sort((a, b) => a - b);
    
    let closestSum = 0;
    let minSoFar = Infinity;

    for(let i = 0; i <A.length -2; i++) {
        let j = i + 1;
        let k = A.length - 1;
        
        while(j < k) {
            const sum = A[i] + A[j] + A[k];
            
            const diff = Math.abs(sum - target);
			//If minimum is found, update it in "minSoFar".
            if (diff < minSoFar) {
                minSoFar = diff;
                closestSum = sum;
            } 
            
            if(sum < target) {
               j++;
             } else {
                k--;
            }
        }
    }
    
    return closestSum;
};


//---------------------------------
// Quetion 2

var fourSum = function(nums, tar) {

    nums = nums.sort((a, b) => { return a - b })
    
    let arr =[]
    for (let k = 0; k < nums.length-3; k++) {
            for (let i = k + 1; i < nums.length-2; i++) {
    
    
                    let target = tar - nums[i] - nums[k],
                        a = i + 1,
                        b = nums.length - 1;
                    while (a < b) {
                        let q=nums[a],w=nums[b],ss=q+ w; 
                        if (ss < target) a++;
                        else if (ss > target) b--;
                        else {
                            let aa = [nums[k], nums[i], q, w]
                            console.log(aa)
                            arr.push(aa);
                            while (a < b && q === nums[a + 1]) a++;
                            while (a < b && w === nums[b - 1]) b--;
                            a++;
                            b--;
                        }
                    }
                    while(nums[i]===nums[i+1]) i++;    
            }
            while(nums[k]===nums[k+1]) k++;
    }
        return arr;
    };
    


// ----------------------------------------
// Quetion-3 

// Into 4 pices functions

    // mutative!
function swapValuesByIndex(array, index1, index2){
    let value1 = array[index1];
    array[index1] = array[index2];
    array[index2] = value1;
}

// mutative! 
function reversePartOfArray(array, startIndex, endIndex){
    while(startIndex < endIndex){
        swapValuesByIndex(array, startIndex, endIndex);
        startIndex += 1;
        endIndex -= 1;
    }
}

function findLastIndexWhere(array, callbackFn){
    for(let i = array.length - 1; i >= 0; i--){
        if(callbackFn(array[i], i)) return i;
    }
}

// mutative!
function nextPermutation(nums){
    const firstIndex = findLastIndexWhere(nums, (num, i) => nums[i+1] !== undefined && num < nums[i+1]);

    if(firstIndex === undefined){
        reversePartOfArray(nums, 0, nums.length - 1);
        return;
    }

    const secondIndex = findLastIndexWhere(nums, (num, i) => num > nums[firstIndex]);
    swapValuesByIndex(nums, firstIndex, secondIndex);
    reversePartOfArray(nums, firstIndex + 1, nums.length - 1);
};



// -------------------------------------------
// Quetion-4

var searchInsert = function(nums, target) {
    nums.push(target)
    let sortedArray = nums.sort((a, b) => a - b);
    return sortedArray.indexOf(target);
};

//----------------------------------------------
// Quetion - 5

var plusOne = (digits)=>{
    let answer = ""; 
    digits.forEach((num) => {
        answer = answer + num.toString() 
    })
    answer = (parseInt(answer) + 1).toString()
    let result = []
    for (let i = 0; i < answer.length; i++) {
        result.push(parseInt(answer[i]))
    }
    return result 
};


//--------------------------------------------
// Quetion - 6

var singleNumber = function(nums) {
    nums.sort()
 
 for(let i=0;i<nums.length;i++){
     if(nums[i]==nums[i+1]){
         i++
     }else{
         return nums[i]
     }
 }
 };
 
//--------------------------------------------
// Quetion - 7

function printMissing(ar, low, high) {
    let hs = new Set();

    for (let i = 0; i < ar.length; i++)
      hs.add(ar[i]);
   
    for (let i = low; i <= high; i++) {
      if (!hs.has(i)) {
        document.write(i + " ");
      }
    }
  }
  
//--------------------------------------------
// Quetion -8 

