function goodNodesInBTree(root) {
  function helper(node, maxValue) {
    if (node === null) return 0;

    const count = node.val >= maxValue ? 1 : 0;
    const newMaxValue = Math.max(maxValue, node.val);

    return (
      count + helper(node.left, newMaxValue) + helper(node.right, newMaxValue)
    );
  }

  return helper(root, root.val);
}
