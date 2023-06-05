function zerosToEnd(arr){
    
    // holds the last index of 1st 0th element
    let leftIndex=0;
    for (let i=0;i<arr.length; i++){
        if(i==leftIndex || arr[i]==0){
            continue
        }
        let empty=arr[leftIndex]
        arr[leftIndex]=arr[i];
        arr[i]=empty;
        leftIndex++;
    }
    
    return arr
}


let arr=[0,1,0,3,12]
zerosToEnd(arr)
console.log(arr)