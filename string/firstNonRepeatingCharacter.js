const inputStr = "swiss";

function firstNonRepeatingCharacter(str) {
    const charCount = {};

    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    console.log(charCount,"charCount")

    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null; 
}



console.log(firstNonRepeatingCharacter(inputStr))