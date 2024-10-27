const sentence = "The quick brown fox jumped over the lazy dog";


function longestWord(sentence){
    return sentence.split(' ').reduce((acc,curr)=>(curr.length>acc?curr.length : acc),0)
}


console.log(longestWord(sentence))
