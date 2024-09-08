import { tree } from "__tests__/tree";

function search(curr: BinaryNode<number> | null, needle: number): boolean {
    if(!curr) return false;
    if(curr.value === needle) return true;

    if(curr.value < needle) return search(curr.right, needle);

    return search(curr.left, needle);
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    return search(head, needle);
}

console.log("the three return ", dfs(tree, 45))
console.log("the three return ", dfs(tree, 7))
console.log("the three return ", dfs(tree, 69))


