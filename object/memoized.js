const map = new Map()
function memoized(fn) {

    return function(...args){
        const key = JSON.stringify(args)
        if(map.has(key)){
            return map.get(key)
        }
        const result = fn(...args)
        map.set(key,result)
        return result
    }
}

const add = (a,b)=> a+b
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
const memoizedFactorial = memoized(factorial);
const memoizedAddition = memoized(add);

console.log(memoizedFactorial(5));
console.log(memoizedAddition(5,5));

