// Given a list arr of N integers, print sums of all subsets in it.

// solution
class Solution {
    sumSubset(arr, ans, l, r, sum){
        if (l>r) {
            ans.push(sum);
            return
        }
        this.sumSubset(arr,ans, l+1, r, sum+arr[l]) // present
        this.sumSubset(arr,ans, l+1, r, sum) // absent
    }
    
    subsetSums(arr,n){
       //code here
       let ans=[];
       this.sumSubset(arr, ans, 0, n-1, 0);
       return ans.sort(function(a, b){return a-b})
    }
}