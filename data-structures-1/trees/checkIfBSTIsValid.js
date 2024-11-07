function checkIfBSTIsValid(root) {
  function helper(node, min = -Infinity, max = Infinity) {
    if (node === null) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  }

  return helper(root);
}

function checkIfBSTIsValid(root) {
  if (root === null) return true;

  const stack = [[root, -Infinity, Infinity]];

  while (stack.length) {
    const [node, min, max] = stack.pop();

    if (node.val <= min || node.val >= max) return false;

    if (node.right) stack.push([node.right, node.val, max]);
    if (node.left) stack.push([node.left, min, node.val]);
  }

  return true;
}
