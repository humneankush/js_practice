const a = [1,2,3,[4,[5,[6]],7,8]]

function flattenArray(arr){
    return arr.reduce((acc,curr)=>{
        if(Array.isArray(curr)){
            console.log("new flatten array")
            acc.push(...flattenArray(curr))
        }else{
            acc.push(curr)
        }
        return acc
    },[])
}

const newArr = []
function flatArray(arr){
    arr.forEach(element => {
        if(Array.isArray(element)){
            flatArray(element)
        }else{
            newArr.push(element)
        }
    });
}
flatArray(a)
console.log(newArr)