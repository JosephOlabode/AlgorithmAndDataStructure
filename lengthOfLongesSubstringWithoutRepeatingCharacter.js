/*
    Given a string, find the length of the longest substring
     without repeating characters.
     
*/

// "abcbdca"

// Time: O(n ^ 3 logn), Space: O(n)
function lengthOfLongestSubStringWithoutRepetition(string){
    let longestSubstring = 0;
    let substring = []; // O(n)

    if(string.length <= 1) {
        return string.length;
    }

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

const string = "abcbdc";
console.log(lengthOfLongestSubStringWithoutRepetition(string));