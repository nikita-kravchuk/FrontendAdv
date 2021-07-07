// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

function isValid(s) {
    const arr = [];
    const pair = {
        ')':'(',
        ']':'[',
        '}':'{'
    }
    for(i = 0; i<s.length; i++) {
        if(s[i] === '(' || s[i] === '{' || s[i] === '[') {
            arr.push(s[i]);
        } else {
            const fst = arr.pop(s[i]);

            const sec = pair[s[i]];

            if(fst !== sec) {
                return false;
            }
        }
    }
    return arr.length === 0;
}