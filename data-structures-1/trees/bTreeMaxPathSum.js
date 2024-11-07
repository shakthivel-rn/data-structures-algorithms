function bTreeMaxPathSum(root) {
  let maxSum = -Infinity;

  function helper(node) {
    if (node === null) return 0;

    const leftTree = Math.max(helper(node.left), 0);
    const rightTree = Math.max(helper(node.right), 0);

    maxSum = Math.max(maxSum, node.val + leftTree + rightTree);

    return node.val + Math.max(leftTree, rightTree);
  }

  helper(root);
  return maxSum;
}
