export default class MinHeap {
    public length: number;
    private data: number[];

    

    constructor() {
        this.length = 0;
        this.data = [];
    }

    private heapifyUp(idx: number): void {
        if(idx === 0) return;

        const p = this.parent(idx)
        const pVal = this.data[p];
        const v = this.data[idx];
        
        if(v < pVal) {
            this.data[idx] = pVal;
            this.data[p] = v;
            return this.heapifyUp(p)
        }
    }

    private heapifyDown(idx: number): void {
        if(idx >= this.length) return;
        
        const lIdx = this.lChild(idx);
        const rIdx = this.rChild(idx);

        if(lIdx >= this.length) return;

        const lVal = this.data[lIdx];
        const rVal = this.data[rIdx];
        const val = this.data[idx];

        if(lVal < rVal && val > lVal) {
            this.data[lIdx] = val;
            this.data[idx] = lVal;
            return this.heapifyDown(lIdx);
        }

        if(rVal < lVal && val > rVal) {
            this.data[rIdx] = val;
            this.data[idx] = rVal;
            return this.heapifyDown(rIdx);
        }
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number | undefined {
        console.log("length when delete call ", this.length, this.data)
        if(this.length === 0) return -1;

        const out = this.data[0];
        if(this.length ===  1) {
            console.log("length is 1 here ", out)
            this.data = []; 
            this.length--
            return out
        }

        this.length--
        this.data[0] = this.data[this.length];
        this.heapifyDown(0);
        return out
    }

    private parent(idx: number): number {
        return Math.floor((idx -1)/2);
    }

    private lChild(idx: number): number {
        return 2 * idx + 1
    }

    private rChild(idx: number): number {
        return 2 * idx + 2
    }
}

const heap = new MinHeap()
heap.insert(5);
heap.insert(3);
heap.insert(69);
heap.insert(420);
heap.insert(4);
heap.insert(1);
heap.insert(8);
heap.insert(7);

console.log(heap.length, 8, heap.length);
console.log(heap.delete(), 1, heap.length);
console.log(heap.delete(), 3, heap.length);
console.log(heap.delete(), 4, heap.length);
console.log(heap.delete(), 5, heap.length);
    console.log(heap.length, ", ", heap.length);
    console.log(heap.delete(), ", ", heap.length);
    console.log(heap.delete(), ", ", heap.length);
    console.log(heap.delete(), ", ", heap.length);
    console.log(heap.delete(), ", ", heap.length);
    console.log(heap.length, ", ", heap.length);