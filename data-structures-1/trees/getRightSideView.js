function getRightSideView(root) {
  if (root === null) return [];

  const queue = [root];
  const rightSideView = [];

  while (queue.length) {
    const currentSize = queue.length;

    for (let index = 0; index < currentSize; index++) {
      const currentNode = queue.shift();

      if (index === currentSize - 1) rightSideView.push(currentNode.val);

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }
  }

  return rightSideView;
}
