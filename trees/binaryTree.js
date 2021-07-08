/**
 * Tree which have at most two children are called Binary tree.
 */

// Tree Nodes
class TreeNode {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

/**
 * Binary Tree
 */

const rootA = new TreeNode("A");
const rootB = new TreeNode("B");
const rootC = new TreeNode("C");

// Associate children with nodes;
rootA.children.push(rootB, rootC);
console.log(rootA);

// **** Full binary Tree **** //

`
                         (A)
                        /   \
                       (B)  (C) 
                            /  \
                           (E) (F)     
                           
                     FULL BINARY TREE
                      `;
/**
 * Binary tree that have exactly zero or 2 nodes ( but never 1 )
 */

// create nodes
const fullBtRootNode = new TreeNode("A");
const fullBtRootB = new TreeNode("B");
const fullBtRootC = new TreeNode("C");
const fullBtRootD = new TreeNode("D");
const fullBtRootE = new TreeNode("E");

// Associate children
fullBtRootNode.children.push(fullBtRootB);
fullBtRootNode.children.push(fullBtRootC);

fullBtRootC.children.push(fullBtRootD);
fullBtRootC.children.push(fullBtRootE);

console.log(fullBtRootNode);

// **** Complete binary Tree **** //

`
                         (A)
                        /   \
                       /     \
                     (B)     (C) 
                    /          \
                   /            \
                  (D)           (E)     
                        
                  COMPLETE BINARY TREE
                      `;

/**
 * When all levels except the last one are full with nodes
 */

// create nodes
const completeBtRootNode = new TreeNode("A");
const completeBtRootB = new TreeNode("B");
const completeBtRootC = new TreeNode("C");
const completeBtRootD = new TreeNode("D");
const completeBtRootE = new TreeNode("E");
// Associate children
completeBtRootNode.children.push(completeBtRootB);
completeBtRootNode.children.push(completeBtRootC);

completeBtRootB.children.push(completeBtRootD);

completeBtRootC.children.push(completeBtRootE);

console.log(completeBtRootNode);
