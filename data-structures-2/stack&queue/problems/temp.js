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
