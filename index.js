function isPalindrome(word) {
    const reversedWord = reverse(word)
    if (word !== reversedWord) {
        return false
    }
    return true
}

function reverse(word) {
    let newsplit = word.split('')
    let newreverse = newsplit.reverse()
    let reverseSplit = newreverse.join('')
    return reverseSplit
}
// console.log(reversing('Abdi'))


// You can run `node index.js` to view these console logs
if (require.main === module) {
    // add your own custom tests in here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));

    console.log("");

    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));

    console.log("Expecting: true");
    console.log("=>", isPalindrome("a"));

    console.log("");
    console.log("Expecting: true");
    console.log("=>", isPalindrome(""));
}

module.exports = isPalindrome;