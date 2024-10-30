const arr = [[1,22,3],[4,5,6],[7,8,9]]

let largest = arr[0][0]


for(let i=0;i<arr.length;i++){
    for(let j =0 ;j<arr[i].length;j++){
        if(arr[i][j]>largest){
            largest = arr[i][j]
        }
    }
}
console.log(largest,"largest")



