// Quetion-1

function findCommon(ar1, ar2, ar3)
      {
        let n1=ar1.length
        let n2=ar2.length 
        let n3=ar3.length
        
        var i = 0,
          j = 0,
          k = 0;
        while (i < n1 && j < n2 && k < n3)
        {
          if (ar1[i] == ar2[j] && ar2[j] == ar3[k])
          {
            document.write(ar1[i] + " ");
            i++;
            j++;
            k++;
          }
 
          else if (ar1[i] < ar2[j]) i++;
           
          else if (ar2[j] < ar3[k]) j++;
           
          else k++;
        }
      }


var findDifference = function(nums1, nums2) {
    let result = [[],[]]
    nums1 = [...new Set(nums1)]
    nums2 = [...new Set(nums2)]
    for(let val of nums1) {
        if(!nums2.includes(val)) {
            result[0].push(val)
        }
    }
    for(let val of nums2) {
        if(!nums1.includes(val)) {
            result[1].push(val)
        }
    }
    return result
};

//-----------------------------------
// Quetion 3


var transpose = function(matrix) {
    let arr=[];
    for(let j=0;j<matrix[0].length;j++){ // iterate over columns first
        arr.push(new Array(matrix.length)); // initialize inner arrays with the correct size
        for(let i=0;i<matrix.length;i++){ // iterate over rows next
            arr[j][i] = matrix[i][j]; // transpose by swapping i and j indices
        }
    }
    
    return arr
    };


    // --------------------------------
    // Quetion 4

    var arrayPairSum = function(nums) {
        nums = nums.sort((a,b) => a-b)
        let sum = 0;
        for(let i=0; i<nums.length; i++){
           if(i%2 == 0) sum += nums[i]
        }
        return sum
    };

    //Quetion 5 
    // ---------------------------------

var arrangeCoins = function(n) {
    let sum = 0
    for(var i = 0; i < n + 1; i++) {
        sum += i;
        if(n === sum) {
            return i;
        }
        if(n < sum) {
            return i - 1;
        }
    }
};

//-----------------------------------
// Quetion 6

var sortedSquares = function(nums) {
    return nums.map(v=>v*v).sort((a,s)=>a-s)
};


//--------------------------------
//Quetion 7


//--------------------------------
//Quetion 8

var shuffle = function(nums, n) {
    let arr = []
    
    for (let i=0; i<n; i++) {
        arr.push(nums[i])
        arr.push(nums[n+i])
    }
    return arr
};