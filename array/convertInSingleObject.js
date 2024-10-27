const items = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' }
];


function convertInSingleObject(items,key){
    return items.reduce((acc,curr)=>{
        acc[curr[key]] = curr
        return acc
    },{})
}

console.log(convertInSingleObject(items,'id'))