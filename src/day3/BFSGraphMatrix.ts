export default function bfs(graph: WeightedAdjacencyMatrix, source: number, needle: number): number[] | null {

    const seen: boolean[] = new Array(graph.length).fill(false);
    seen[source] = true
    const prev: number[] =  new Array(graph.length).fill(-1)
    const q: number[] = [source];
    
    do{
        const curr = q.shift() as number;
        if(curr === needle) break;

        seen[curr] = true; 
        const adjs = graph[curr];
        for(let i=0; i<adjs.length; i++) {
            if(seen[i] || adjs[i] === 0) continue;

            prev[i] = curr;
            seen[i] = true;
            q.push(i) 
        }

    }while(q.length);

    if(prev[needle] === -1) return null;

    // navigating back form our finds

    let curr = needle;
    const out: number[] = [];

    while(prev[curr] !== -1) {
        out.push(curr)
        curr = prev[curr]
    }

    if (out.length) {
        return [source].concat(out.reverse());
    }

    return null;
}

