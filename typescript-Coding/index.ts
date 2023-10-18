function canFinish(numCourses: number, prerequisites: number[][]): boolean {

    let n = prerequisites.length;
    let hashMap: { [key: number]: Array<number> } = Object.fromEntries(Array.from({ length: n }, (_, i) => [i, []]));
    // for (let i = 0; i < numCourses; i++) {
    //     hashMap[i] = [];
    // }
    for (let i = 0; i < n; i++) {
        let [firstValue, secondValue] = prerequisites[i];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        } else {
            hashMap[firstValue].push(secondValue);
        }
    }
    console.log(hashMap);
    let set: Set<number> = new Set<number>();
    const dfs = (graph: { [key: number]: Array<number> }, source: number) => {

        const stack = [source];

        while (stack.length > 0) {
            const current: number | undefined = stack.pop();
            if (current !== undefined) {
                console.log(current);
                set.add(current);
                graph[current];

                for (let neighbor of graph[current]) {
                    if (!set.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    }
    dfs(hashMap, 0);
    console.log(set);

    if (set.size === n) {
        return true;
    }

    return false;
};

console.log(canFinish(6, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4], [4, 1]]));
