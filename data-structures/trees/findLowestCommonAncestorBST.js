function findLowestCommonAncestorBST(root, p, q) {
  const rootValue = root.val;
  const pValue = p.val;
  const qValue = q.val;

  if (pValue > rootValue && qValue > rootValue)
    return this.findLowestCommonAncestorBST(root.right, p, q);
  if (pValue < rootValue && qValue < rootValue)
    return this.findLowestCommonAncestorBST(root.left, p, q);
  return root;
}

function findLowestCommonAncestorBST(root, p, q) {
  let node = root;

  while (node) {
    if (p.val > node.val && q.val > node.val) node = node.right;
    else if (p.val < node.val && q.val < node.val) node = node.left;
    else return node;
  }
}
