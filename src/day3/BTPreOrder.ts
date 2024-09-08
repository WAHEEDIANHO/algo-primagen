function walk(node: BinaryNode<number> | null, path:  number[]): void {

    //base case 
    if(!node) return

    //pre
    path.push(node.value);
    //recurse
    walk(node.left, path);
    walk(node.right, path);
    //post

}


export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];

    walk(head, path);

    return path;

}