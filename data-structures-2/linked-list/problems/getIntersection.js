function getIntersection(headA, headB) {
  const seen = new Set();

  while (headB) {
    seen.add(headB);
    headB = headB.next;
  }

  while (headA) {
    if (seen.has(headA)) {
      return headA;
    }

    seen.add(headA);
    headA = headA.next;
  }

  return null;
}

function getIntersection(headA, headB) {
  let pointerA = headA,
    pointerB = headB;

  while (pointerA !== pointerB) {
    pointerA = pointerA ? pointerA.next : headB;
    pointerB = pointerB ? pointerB.next : headA;
  }

  return pointerA;
}
