function qs(arr: number[], lo: number, hi: number): void {

    if(lo>=hi) return;

    const ps:  number = partition(arr, lo, hi); //4
    
    qs(arr, lo, ps-1)
    qs(arr, ps+1, hi)
}

function partition (arr: number[], lo: number, hi: number): number {

    const pivot: number = arr[hi];
    let idx: number = lo - 1;

    // [420, 69] 5, 

    for(let i=lo; i<hi; ++i) {
        if(arr[i] <= pivot) {
            idx++;
            const temp: number = arr[i];
            arr[i] = arr[idx];
            arr[idx] = temp;

        }
    } 

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    // console.log("pivot is @ ", idx, " ", arr)
    return idx;
}


export default function quick_sort(arr: number[]): void {

    qs(arr, 0, arr.length -1)

}


const arr = [9, 3, 7, 4, 69, 420, 42]; //[9, 3, 7, 4, /42, 420, 69] [3, 4, 7, 9]
quick_sort(arr);
console.log(arr);
   