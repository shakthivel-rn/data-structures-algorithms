function closestBSTree(root, target) {
  let closestNode = root,
    smallestDiff = Infinity,
    tempNode = root;

  while (tempNode) {
    const currentDiff = Math.abs(tempNode.val - target);

    if (
      currentDiff < smallestDiff ||
      (currentDiff === smallestDiff && tempNode.val < closestNode.val)
    ) {
      closestNode = tempNode;
      smallestDiff = currentDiff;
    }

    if (target < tempNode.val) {
      tempNode = tempNode.left;
    } else {
      tempNode = tempNode.right;
    }
  }

  return closestNode.val;
}
