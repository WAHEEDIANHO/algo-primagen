declare type WeightedAdjacencyList = GraphEdge[][];
declare type GraphEdge = { to: number; weight: number };


const list1: WeightedAdjacencyList = [];

//      (1) --- (4) ---- (5)
//    /  |       |       /|
// (0)   | ------|------- |
//    \  |/      |        |
//      (2) --- (3) ---- (6)
list1[0] = [
    { to: 1, weight: 3 },
    { to: 2, weight: 1 },
];
list1[1] = [
    { to: 0, weight: 3 },
    { to: 2, weight: 4 },
    { to: 4, weight: 1 },
];
list1[2] = [
    { to: 1, weight: 4 },
    { to: 3, weight: 7 },
    { to: 0, weight: 1 },
];
list1[3] = [
    { to: 2, weight: 7 },
    { to: 4, weight: 5 },
    { to: 6, weight: 1 },
];
list1[4] = [
    { to: 1, weight: 1 },
    { to: 3, weight: 5 },
    { to: 5, weight: 2 },
];
list1[5] = [
    { to: 6, weight: 1 },
    { to: 4, weight: 2 },
    { to: 2, weight: 18 },
];
list1[6] = [
    { to: 3, weight: 1 },
    { to: 5, weight: 1 },
];

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity )
}

function getLowUnvisited (seen: boolean[], dists: number[]): number {
    let idx: number = -1;
    let lowest = Infinity;

    for(let i=0; i<seen.length; i++) {
        if(seen[i]) continue;

        if(lowest > dists[i]) {
            lowest = dists[i]
            idx = i;
        }
    }
    // console.log("the idx is ", idx, seen[0],  dists[0])
    return idx;
}

export default function dijkstra_list(source: number, sink: number, arr: WeightedAdjacencyList): number[] | null {

    const seen = new Array(arr.length).fill(false);
    const dists = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1);

    dists[source] = 0;

    while(hasUnvisited(seen, dists)) {
        const curr = getLowUnvisited(seen, dists);

        seen[curr] = true;
        const edges = arr[curr];
        for (let i=0; i<edges.length; i++) {
            const to = edges[i].to;
            if(seen[to]) continue;


            const d = dists[curr] + edges[i].weight;
            if(d < dists[to]) {
                prev[to] = curr;
                dists[to] = d; 
            }
        }
    }

    if(prev[sink] === -1)  return null;
    let curr = sink as number;
    const out: number[] = [];

    while(prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr]
    }

    if(!out.length) return [];
    return [source].concat(out.reverse());
}

dijkstra_list(0, 6, list1)


