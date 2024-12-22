function canVisitAllRooms(rooms) {
  const queue = [...rooms[0]];
  const visited = new Set([0]);

  while (queue.length) {
    const key = queue.shift();
    if (!visited.has(key)) {
      visited.add(key);
      queue.push(...rooms[key]);
    }
  }

  return visited.size === rooms.length;
}

function canVisitAllRooms(rooms) {
  const visited = new Set();

  const dfs = (room) => {
    if (visited.has(room)) return;

    visited.add(room);
    for (const key of rooms[room]) {
      dfs(key);
    }
  };

  dfs(0);

  return visited.size === rooms.length;
}
