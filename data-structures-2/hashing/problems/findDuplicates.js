function findDuplicates(root) {
  const subtreeCount = new Map();
  const duplicates = [];

  function serializeTree(node) {
    if (!node) return "#";

    const subtree = `${node.val},${serializeTree(node.left)},${serializeTree(
      node.right
    )}`;
    subtreeCount.set(subtree, (subtreeCount.get(subtree) || 0) + 1);

    if (subtreeCount.get(subtree) === 2) {
      duplicates.push(node);
    }

    return subtree;
  }

  serializeTree(root);
  return duplicates;
}
