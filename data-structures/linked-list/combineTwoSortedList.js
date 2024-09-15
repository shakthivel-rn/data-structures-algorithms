function combineTwoSortedList(list1, list2) {
    let tempNode = new ListNode()
    const dummyHead = tempNode

    while (list1 && list2) {
        if (list1.val <= list2.val) {
            tempNode.next = list1
            list1 = list1.next
        } else {
            tempNode.next = list2
            list2 = list2.next
        }
        tempNode = tempNode.next
    }

    tempNode.next = list1 ? list1 : list2

    return dummyHead.next
}