const compare=(a,b)=>{
    return a+b // decending order
}
const add=(a,b)=>{
    return a+b
}
arr=[1,33,51,12,1,4,3]
// console.log(arr.sort(compare))
a=arr.flatMap(compare)
console.log(arr)
// for (key of a){
//     console.log(key[0])
// }
console.log(a)