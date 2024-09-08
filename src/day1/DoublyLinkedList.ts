type Node<T> = {
    val: T,
    prev?: Node<T> | undefined,
    next?: Node<T> | undefined
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head: Node<T> | undefined;
    private tail: Node<T> | undefined;


    

    constructor() {
        this.length = 0;
        this.head = this.tail = undefined;
    }

    prepend(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>; 
        if(!this.head) {
            this.head = this.tail = node;
            return;
        }


        node.next = this.head;
        this.head.prev = node;
        this.head = node
    }
    insertAt(item: T, idx: number): void {

        if(idx > this.length) throw new Error('oh no you can\'t');
        if(idx === 0) {
            this.prepend(item);
            return;
        }
        if(idx === this.length) {
            this.append(item);
            return;
        }

        // const head =  this.head;
        this.length++
        let curr =  this.getAtIndex(idx) as Node<T>//


        // current element here implies the element after our insertion
        const node = { val: item } as Node<T>;
        node.next = curr;
        node.prev = curr.prev

        if(curr.prev) curr.prev.next = node;
        curr.prev = node;
    }

    append(item: T): void {
        this.length++;
        const node =  { val: item } as Node<T>;
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }

        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;

    }

    remove(item: T): T | undefined {

        let curr = this.head;


        for(let i=0; curr && i<this.length; i++) {
            if(curr.val == item) break;
            curr = curr.next;
        }

        if(!curr) return undefined;
        return this.removeNode(curr);
    }
    get(idx: number): T | undefined {

        return this.getAtIndex(idx)?.val;
    }
    removeAt(idx: number): T | undefined {

        const node =  this.getAtIndex(idx);
        if(!node) return undefined;
        return this.removeNode(node);
    }

    private getAtIndex(idx: number): Node<T> | undefined  {

        let curr =  this.head;

        for(let i=0; curr && i<idx; ++i) curr = curr.next; //
        return curr;
    }

    private removeNode(node: Node<T>): T | undefined {
        
        this.length--
        if(this.length === 0) {
            const out = this.head?.val
            this.head =  this.tail = undefined;
            return out;
        }
        if(node.next) node.next.prev = node.prev;
        if(node.prev) node.prev.next = node.next;


        if(node === this.head) this.head = node?.next;
        if(node === this.tail) this.tail = node?.prev;

        node.prev = node.next = undefined;
        return node.val    }
 }