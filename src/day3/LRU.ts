declare interface ILRU<K, V> {
    update(key: K, value: V): void;
    get(key: K): V | undefined;
}

type Node<T> = {
    val: T,
    prev?: Node<T>,
    next?: Node<T>
}

function createNode<V>(val: V): Node<V> {
    return { val };
}

export default class LRU<K, V> {
    private length: number;
    private head?: Node<V>;
    private tail?: Node<V>;
    private lookup: Map<K, Node<V>>;
    private reverseLookup: Map<Node<V>, K>;

   
    constructor(private capacity: number) {
        this.length = 0;
        this.head = this.tail = undefined;
        this.lookup = new Map<K, Node<V>>();
        this.reverseLookup = new Map<Node<V>, K>();
    }

    update(key: K, value: V): void {
        let node = this.lookup.get(key);
        if(!node) {
            node = createNode(value);
            console.log(this.length, " length")
            this.length++
            this.prepend(node);
            this.trimCache();
            // this.length++
            // this.prepend(node);

            this.lookup.set(key, node);
            this.reverseLookup.set(node, key);
            console.log(this.length, "after length")
        }else {
            this.detach(node);
            this.prepend(node);

            this.reverseLookup.delete(node);
            
            node.val = value;
        }
        
    }
    get(key: K): V | undefined {
        // check if node exist 
        const node = this.lookup.get(key);
        if(!node) return undefined;

        this.detach(node);
        this.prepend(node);

        return node.val;
    }


    private detach(node: Node<V>): void {
        if(node.prev) node.prev.next = node.next;
        if(node.next) node.next.prev = node.prev;
        if(this.length === 1) this.head = this.tail = undefined;
        if(this.head == node) this.head = this.head.next;
        if(this.tail == node) this.tail = this.tail.prev; 

        node.next = node.prev = undefined;
    }

    private prepend (node: Node<V>): void {
        if(!this.head) {
            this.head = this.tail = node;
            return;
        }

        node.next =this.head;
        this.head.prev = node; 
        this.head = node;
    }

    private trimCache(): void {
        if(this.length <= this.capacity) return;

        const tail = this.tail as Node<V>;
        this.detach(this.tail as Node<V>);

        const key = this.reverseLookup.get(tail) as K;
        this.lookup.delete(key);
        this.reverseLookup.delete(tail);
        this.length--
    }
}


const lru = new LRU<string, number>(3) as ILRU<string, number>;
lru.update("foo", 69);
lru.update("bar", 420);
lru.update("baz", 1337);
lru.update("ball", 69420);
console.log(lru.get("foo"), " should undefined")