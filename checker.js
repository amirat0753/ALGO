function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Convert to lowercase and remove non-alphanumeric characters
    if (s.length <= 1) {
        return true;
    } else {
        if (s[0] === s[s.length - 1]) {
            return isPalindrome(s.slice(1, -1));
        } else {
            return false;
        }
    }
}


const word = "A man a plan a canal Panama";
if (isPalindrome(word)) {
    console.log(`'${word}' is a palindrome.`);
} else {
    console.log(`'${word}' is not a palindrome.`);
}
