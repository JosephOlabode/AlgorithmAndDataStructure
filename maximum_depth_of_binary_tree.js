 //import { BST } from "./binary_search_tree";

  let BST = require('./binary_search_tree.js');
 // Time: O(n), Space: O(n)
 const maxDepth = function(node, currentDepth) {
     if(!node) {
         return currentDepth;
     }
     currentDepth++;

     return Math.max(maxDepth(node.left, currentDepth), maxDepth(node.right, currentDepth));
 }


 const bst = new BST();
 bst.insert(5);
 bst.insert(4);
 bst.insert(7);
 bst.insert(3);

 console.log(bst.find(7));
 console.log(maxDepth(bst.root, 0));