function serializeBTree(root) {
  if (root === null) return "";

  const queue = [root];
  const result = [];

  while (queue.length) {
    const node = queue.shift();

    if (node) {
      result.push(node.val);

      queue.push(node.left);
      queue.push(node.right);
    } else {
      result.push("#");
    }
  }

  return result.join(",");
}

function deserializeBTree(data) {
  if (!data || !data.length) return null;

  const values = data.split(",");
  let index = 1;

  const root = new TreeNode(parseInt(values[0]));
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();

    if (values[index] !== "#") {
      node.left = new TreeNode(values[index]);
      queue.push(node.left);
    }
    index += 1;

    if (values[index] !== "#") {
      node.right = new TreeNode(values[index]);
      queue.push(node.right);
    }
    index += 1;
  }

  return root;
}
