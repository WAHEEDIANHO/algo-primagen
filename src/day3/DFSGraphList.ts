function walk(graph: WeightedAdjacencyList, curr: number, needle: number, seen: boolean[], path: number[]): boolean {
    if(seen[curr]) return false;

    seen[curr] = true;

    path.push(curr);
    if(curr === needle) return true

    const edges = graph[curr];
    for(let i=0; i<edges.length; i++) {
        if(seen[edges[i].to]) continue;

        if(walk(graph, edges[i].to, needle, seen, path)) return true;
    }
    
    path.pop();
    return false

}


export default function dfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {


    const seen = new Array(graph.length).fill(false);
    const path: number[] = [];
    
    walk(graph, source, needle, seen, path);

    if(!path.length) return null;

    return path
    

}