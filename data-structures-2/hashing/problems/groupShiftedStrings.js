function groupShiftedStrings(words) {
  const groups = {};

  for (const word of words) {
    const key = getShiftKey(word);

    groups[key] ??= [];
    groups[key].push(word);
  }

  return Object.values(groups);
}

function getShiftKey(word) {
  const keyParts = [];

  for (let i = 1; i < word.length; i++) {
    const diff = (word.charCodeAt(i) - word.charCodeAt(i - 1) + 26) % 26;
    keyParts.push(diff);
  }

  return keyParts.join(",");
}
