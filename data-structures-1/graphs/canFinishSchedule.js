// Topological Sort
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

// DFS Detect Cycle
function canFinishSchedule(numCourses, prerequisites) {
  const STATE = {
    unvisited: 0,
    visited: 1,
    processed: 2,
  };

  const adjList = Array.from({ length: numCourses }, () => []);
  const visited = Array.from({ length: numCourses }, () => STATE.unvisited);

  for (const [course, prereq] of prerequisites) {
    adjList[course].push(prereq);
  }

  function hasCycle(node) {
    if (visited[node] === STATE.visited) return true;
    if (visited[node] === STATE.processed) return false;

    visited[node] = STATE.visited;
    for (const neighbor of adjList[node]) {
      if (hasCycle(neighbor)) return true;
    }
    visited[node] = STATE.processed;

    return false;
  }

  for (let node = 0; node < numCourses; node++) {
    if (hasCycle(node)) return false;
  }

  return true;
}
