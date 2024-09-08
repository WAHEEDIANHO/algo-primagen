export default function bubble_sort(arr: number[]): void {
    // for(let i=0; i<arr.length; ++i)
    //     for(let j=0; j<arr.length-1-i; ++j)
    //         if(arr[j] > arr[j+1]){
    //             let temp = arr[j];
    //             arr[j] = arr[j+1];
    //             arr[j+1] = temp;
    //         }


    for (let i=1; i<arr.length; ++i) {
        const key = arr[i];
        let j = i-1

        while(j>=0 && arr[j] > key){
            arr[j+1]=arr[j];
            j-=1
        }
        arr[j+1] = key
    }
}
// const arr = [9, 3, 7, 4, 69, 420, 42]
// bubble_sort(arr);
// console.log(arr)

// linklist API
interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T) : void;
    prepend(item: T): void;
    get(index: number): T | undefined
}