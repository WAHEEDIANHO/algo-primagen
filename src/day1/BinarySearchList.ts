export default function bs_list(haystack: number[], needle: number): boolean {

    let left = 0;
    let right = haystack.length;
    while(left < right){
        const mid: number = Math.floor(left + (right - left)/2);

        if (haystack[mid] == needle) return true;
        else if (haystack[mid] > needle) right = mid;
        else left = mid + 1
    }

    return false;
}