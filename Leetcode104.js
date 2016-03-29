/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// Given a binary tree, find its maximum depth.

// The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  var depth =0;
  var left = 0;
  var right =0;
  var helperfunc = function(node , depth) {
    if (node.val === null) {
      return depth;
    }
    if(node.left !== null){
     left++;
     depth=left;
     left = helperfunc(node.left ,depth);
    }

     if(node.right !== null){
     right++;
     depth=right;
     right = helperfunc(node.fight ,depth);
    }
  };

  helperfunc(root , 0);
  return left > right ? left :right ;

    
};

