function getLevelOrderTraversal(root) {
  if (root === null) return [];

  const queue = [root];
  const levelOrder = [];

  while (queue.length) {
    const currentSize = queue.length;
    const currentLevel = [];

    for (let index = 0; index < currentSize; index++) {
      const currentNode = queue.shift();
      currentLevel.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    levelOrder.push(currentLevel);
  }

  return levelOrder;
}
