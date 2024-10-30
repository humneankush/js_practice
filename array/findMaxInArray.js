const arr = [1,6,8,9,6,5,4,6,3]


const max = arr.reduce((accumlator,current)=>{
    if(accumlator<current){
        accumlator = current
    }
    return accumlator
},0)

console.log(max)