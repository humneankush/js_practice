let str = 'javascript'.split('')

let newStr = ''
for(let i = 0 ;i<str.length;i++){
    if(i===0){
       newStr+= str[i].toUpperCase()
    }else{

        newStr+=str[i]
    }
}

console.log(newStr)