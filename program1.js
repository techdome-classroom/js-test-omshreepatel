/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const pairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (pairs[char]) {
            stack.push(char); 
        } else {
            const last = stack.pop(); stack
            if (pairs[last] !== char) {
                return false; // If the corresponding closing bracket does not match, return false
            }
        }
    }

    return stack.length === 0
};

module.exports = { isValid };
