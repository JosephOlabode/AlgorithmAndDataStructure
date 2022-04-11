/*
    Given a string, find the length of the longest substring
     without repeating characters.
     
*/

// "abcbdca"

// Time: O(n ^ 3 logn), Space: O(n)
function lengthOfLongestSubStringWithoutRepetition(string) {
    let longestSubstring = 0;
    let substring = []; // O(n)

    if(string.length <= 1) return string.length;

    for(let i = 0; i < string.length; i++) { // O(n)
        for(let j = i; j < string.length; j++) { // O(n)
            
            if(substring.includes(string[j])) { // O(nlogn)
                if(substring.length > longestSubstring){
                    longestSubstring = substring.length;
                }
                substring = [];
                break;
            } else {
                substring.push(string[j]);
                if(substring.length > longestSubstring){
                    longestSubstring = substring.length;
                }
            }
            
        }
    }

    return longestSubstring;
}

// Time: O(n ^ 2), Space: O(n) cos of seenChar
function lengthOfLongestSubStringWithoutRepetition2(string) {
    if(string.length <= 1) return string.length;

    let longest = 0;
    for (let left = 0; left < string.length; left++) { // O(n)
        let seenChar = {}, currentlength = 0;
        for(let right = left; right < string.length; right++){ // O(n)
            const currentChar = string[right];
            if(!seenChar[currentChar]) {
                currentlength++;
                seenChar[currentChar] = true;
                longest = Math.max(longest, currentlength);
            } else {
                break;
            }
        }
    }
    return longest;
}

//Time: O(n), Space: O(n)
function lengthOfLongestSubStringWithoutRepetition3(string) {
    if(string.length <= 1) return string.length;
    let seenChars = {}
    let left = 0, longest = 0;

    for(let right = 0; right < string.length; right++) {
        const currentChar = string[right];
        let prevSeenChar = seenChars[currentChar];

        if(prevSeenChar >= left) {
            left = prevSeenChar++;
        }
        seenChars[currentChar] = right;
        longest = Math.max(longest, (right-left))
    }

    return longest;
}

const string = "abcbdca";
console.log(lengthOfLongestSubStringWithoutRepetition3(string));