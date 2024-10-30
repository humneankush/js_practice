const str = 'jdbc'.split('')


for(let i = 0;i<=Math.floor(str.length)/2;i++){
    let temp = str[i]
    str[i]= str[str.length-i-1]
    str[str.length-i-1] = temp
}

console.log(str.join(''))