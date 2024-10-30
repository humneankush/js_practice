const str = 'jahaj'

let isPalindrome  = true;

for(let i = 0;i<=Math.floor(str.length)/2;i++){
    if(str[i]!==str[str.length-i-1]){
        isPalindrome = false
    }
}

console.log(isPalindrome)