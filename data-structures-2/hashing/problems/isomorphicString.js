function checkIsomorphicString(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sToTMap = new Map();
  const tToSMap = new Map();

  for (let index = 0; index < s.length; index++) {
    const charS = s[index];
    const charT = t[index];

    if (
      (sToTMap.has(charS) && sToTMap.get(charS) !== charT) ||
      (tToSMap.has(charT) && tToSMap.get(charT) !== charS)
    ) {
      return false;
    }

    sToTMap.set(charS, charT);
    tToSMap.set(charT, charS);
  }

  return true;
}
