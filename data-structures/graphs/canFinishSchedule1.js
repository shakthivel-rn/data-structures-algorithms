function canFinishSchedule(numCourses, prerequisites) {
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

  let processedNode = 0;
  while (queue.length) {
    const node = queue.shift();
    processedNode += 1;

    for (const neighbor of adjList[node]) {
      inDegree[neighbor] -= 1;

      if (inDegree[neighbor] === 0) queue.push(neighbor);
    }
  }

  return processedNode === numCourses;
}
