function findOrder(numCourses, prerequisites) {
  const adjList = Array.from({ length: numCourses }, () => []);
  const inDegree = Array.from({ length: numCourses }, () => 0);

  for (const [course, prereq] of prerequisites) {
    adjList[prereq].push(course);
    inDegree[course] += 1;
  }

  const queue = [];
  for (let node = 0; node < numCourses; node++) {
    if (inDegree[node] === 0) queue.push(node);
  }

  const sortedOrder = [];
  while (queue.length) {
    const node = queue.shift();
    sortedOrder.push(node);

    for (const neighbor of adjList[node]) {
      inDegree[neighbor] -= 1;

      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  if (sortedOrder.length !== numCourses) return [];

  return sortedOrder;
}
