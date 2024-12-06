function logger(timestamp, message) {
  const map = new Map();

  if (map.has(message)) {
    const nextValidTimeStamp = map.get(message) + 10;
    if (timestamp < nextValidTimeStamp) {
      return false;
    }
  }

  map.set(message, timestamp);
  return true;
}
