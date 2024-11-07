function buildFromPreAndInOrder(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;

  const node = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(preorder[0]);

  node.left = this.buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  node.right = this.buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

  return node;
}
