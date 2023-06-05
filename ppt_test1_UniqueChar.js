function firstUniqueChar(str){
    for (let i=0;i<str.length; i++){
        if (str.slice(i+1).indexOf(str[i])==-1)
            return i
    }
    return -1
}

let str="loveleetcode";
console.log(firstUniqueChar(str))