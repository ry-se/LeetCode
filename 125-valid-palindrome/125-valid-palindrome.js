/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase();
    let regex = /[^a-z0-9]/gi;
    let cleaned = str.replace(regex, "");
    let noSpace = cleaned.replace(" ", "");
    let reversed = noSpace.split('').reverse('').join('');
    console.log(noSpace, reversed)
    return noSpace == reversed ? true : false
};