 // Time: O(n), Space: O(n)
 const maxDepth = function(node, currentDepth) {
     if(!node) {
         return currentDepth;
     }
     currentDepth++;

     return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
 }