const str = "hello world";
const char = 'o';


function characterOccurence(str,char){
 return str.split('').filter(ch=>ch===char).length

}

console.log(characterOccurence(str,char))