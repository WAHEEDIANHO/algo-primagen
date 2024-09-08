type Node<T> = {
    val: T,
    next?: Node<T>
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T> | undefined;
    private tail?: Node<T> | undefined; 
    

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        //for an empty queue
        this.length++
        const node = { val: item } as Node<T>;
        if(!this.tail || !this.head) {
            this.head = this.tail = node;
            return;
        }
        
        this.tail.next = node;  
        this.tail = node;


    }

    deque(): T | undefined {
        if(!this.head) return undefined;

        const head = this.head;
        this.head = this.head?.next;

        head.next = undefined;
        this.length--
        if(this.length == 0) this.tail = undefined;
        return head.val;
    }
    peek(): T | undefined {
        return this.head?.val;
    }
}