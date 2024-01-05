/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
};

function isValid(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) {
            stack.push(char); // Push opening brackets onto the stack
        } else {
            const last = stack.pop(); // Pop the last opening bracket from the stack
            if (pairs[last] !== char) {
                return false; // If the corresponding closing bracket does not match, return false
            }
        }
    }

    return stack.length === 0; // If there are remaining opening brackets in the stack, return false
}

// Test cases
console.log(isValid("()")); // Output: true
console.log(isValid("()[]{}")); // Output: true
console.log(isValid("(]")); // Output: false

module.exports = { isValid };


