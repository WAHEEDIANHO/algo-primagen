type Node<T> = {
    val: T,
    prev?: Node<T> | undefined
}

export default class Stack<T> {
    public length: number;
    private prev: Node<T> | undefined;
    private head: Node<T> | undefined;

    

    constructor() {
        this.length = 0;
        this.prev = this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        if(!this.head) return
        console.log("initial lenght ", this.length)
        // this.length--
        this.length = Math.max(0, this.length-1);
        const head = this.head as Node<T>;

        if(this.length === 0) {
            this.head = undefined;
            return head.val
        }

        this.head = head.prev;
        return head?.val

    }
    peek(): T | undefined {
        return this.head?.val;
    }
}

const list = new Stack<number>();
list.push(5);
list.push(7);
list.push(9);
list.push(11);

console.log(list.length)

console.log(list.pop(), " ", list.length)
console.log(list.pop(), " ", list.length)
console.log(list.pop(), " ", list.length)
console.log(list.pop(), " ", list.length)
console.log(list.pop(), " ", list.length)

