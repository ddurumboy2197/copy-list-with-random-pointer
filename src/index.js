class Node {
    constructor(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    }
}

function copyList(head) {
    if (!head) return null;

    let oldToNew = new Map();
    let current = head;

    while (current) {
        oldToNew.set(current, new Node(current.val, current.next, current.random));
        current = current.next;
    }

    current = head;

    while (current) {
        if (current.next) {
            current.next = oldToNew.get(current.next);
        }
        if (current.random) {
            current.random = oldToNew.get(current.random);
        }
        current = current.next;
    }

    return oldToNew.get(head);
}
