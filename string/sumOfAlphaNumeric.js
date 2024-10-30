const str = "a1b2c3";

let sum = 0;

for (let i = 0; i < str.length; i++) {
  if (!isNaN(str[i])) sum = sum + parseInt(str[i]);
}
console.log(sum)