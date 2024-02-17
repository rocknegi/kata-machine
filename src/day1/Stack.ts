type Node<T> = {
    value: T;
    prev: Node<T>;
}
export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const newNode = { value: item } as Node<T>;
        if (!this.head)
            this.head = newNode;
        else {
            newNode.prev = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop(): T | undefined {
        if (!this.head)
            return undefined;

        const head = this.head;
        if (this.length > 0) {
            this.head = this.head?.prev;
            this.length--;
        }
        else {
            this.head = undefined;
        }
        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;

    }
}