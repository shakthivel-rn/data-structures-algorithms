function kthSmallestBST(root, k) {
  function inorder(node) {
    if (node === null) return [];

    const nodeVal = node.val;
    const leftTree = inorder(node.left);
    const rightTree = inorder(node.right);

    return leftTree + [nodeVal] + rightTree;
  }

  const list = inorder(root);
  return list[k - 1];
}

function kthSmallestBST(root, k) {
  let currentNode = root;
  let smallestCount = 0;

  while (currentNode) {
    if (currentNode.left === null) {
      smallestCount += 1;

      if (smallestCount === k) return currentNode.val;
      currentNode = currentNode.right;
    } else {
      const inorderPredNode = this.getInorderPredecessor(currentNode);
      inorderPredNode.right = currentNode;
      const tempNode = currentNode;
      currentNode = currentNode.left;
      tempNode.left = null;
    }
  }

  return -1;
}

function getInorderPredecessor(node) {
  let leftNode = node.left;

  while (leftNode.right) leftNode = leftNode.right;

  return leftNode;
}
