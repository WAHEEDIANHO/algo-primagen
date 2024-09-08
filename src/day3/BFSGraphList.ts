// const list2: WeightedAdjacencyList = [];

//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)
// list2[0] = [
//     { to: 1, weight: 3 },
//     { to: 2, weight: 1 },
// ];
// list2[1] = [
//     { to: 4, weight: 1 },
// ];
// list2[2] = [
//     { to: 3, weight: 7 },
// ];
// list2[3] = [ ];
// list2[4] = [
//     { to: 1, weight: 1 },
//     { to: 3, weight: 5 },
//     { to: 5, weight: 2 },
// ];
// list2[5] = [
//     { to: 2, weight: 18 },
//     { to: 6, weight: 1 },
// ];
// list2[6] = [
//     { to: 3, weight: 1 },
// ];

// declare type GraphEdge = { to: number; weight: number };
// declare type WeightedAdjacencyList = GraphEdge[][];


export default function bfs(graph: WeightedAdjacencyList, source: number, needle: number): number[] | null {


    const seen = new Array(graph.length).fill(false);
    seen[source] = true;
    const prev = new Array(graph.length).fill(-1);
    const q = [source];

    do {
        const curr = q.shift() as number;
        if(curr === needle) break;

        const edges = graph[curr];
        for(let i=0; i<edges.length; i++) {
            const to = edges[i].to;
            if(seen[to]) continue;
            prev[to] = curr;
            seen[to] = true;
            q.push(to);
        }

    }while(q.length);

    if(prev[needle] === -1) return null;

    let curr = needle;
    const out: number[] = [];
    while(prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]
    }

    if (out.length) return [source].concat(out.reverse());
    return [];
}


// console.log(bfs(list2, 0, 6));