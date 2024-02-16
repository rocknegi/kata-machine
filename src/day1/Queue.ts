type Node<T> = {
    value?: T;
    next?: Node<T>;
}
export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = { value: item };
        this.length++;
        console.log('h')
        if (!this.tail) {
            this.tail = this.head = newNode;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
    }

    deque(): T | undefined {
        if (!this.head)
            return undefined;

        const head = this.head;

        //This condition to check when you remove every node from the Queue
        if (this.length === 1) {
            this.head = this.tail = undefined;
            this.length--;
            return head.value;
        }
        // 
        else {
            this.length--;
            this.head = this.head.next;
            return head.value;
        }
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}