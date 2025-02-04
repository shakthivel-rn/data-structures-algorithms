function courseSchedule(numCourses, prerequisites) {
  const adjList = Array.from({ length: numCourses }, () => []);
  const inDegree = Array.from({ length: numCourses }, () => 0);

  for (const [course, prereq] of prerequisites) {
    adjList[prereq].push(course);
    inDegree[course] += 1;
  }

  const queue = [];
  for (let node = 0; node < numCourses; node++) {
    if (inDegree[node] === 0) {
      queue.push(node);
    }
  }

  const sortedList = [];
  while (queue.length) {
    const currentNode = queue.shift();
    sortedList.push(currentNode);

    for (const neighbor of adjList[currentNode]) {
      inDegree[neighbor] -= 1;

      if (inDegree[neighbor] === 0) {
        queue.push(neighbor);
      }
    }
  }

  return sortedList.length === numCourses ? sortedList : [];
}
