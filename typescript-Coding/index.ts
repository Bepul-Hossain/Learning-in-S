function isCycle(source: string, graph: { [key: string]: Array<number> }, visited: { [key: string]: number }, path: { [key: string]: number }, stack: Array<string>): boolean | undefined {

    stack.push(source);
    if (visited[source] === 1 && path[source] === 1) {
        stack.pop();
        return true;
    }
    visited[source] = 1;
    path[source] = 1;

    for (let neighbor of graph[source]) {
        let check = isCycle(neighbor, graph, visited, path, stack);
        if (check !== undefined) return check;
    }

    path[source] = 0;
    stack.pop();

    if (stack.length === 0) return false;

}

function canFinish(numCourses: number, prerequisites: number[][]): boolean {

    let hashMap: { [key: number]: Array<number> } = {};
    for (let i = 0; i < numCourses; i++) {
        hashMap[i] = [];
    }

    for (let i = 0; i < prerequisites.length; i++) {
        let [firstValue, secondValue] = prerequisites[i];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        }
    }
    // console.log(hashMap);

    const visited: { [key: string]: number } = {};
    const path: { [key: string]: number } = {};
    const stack: Array<string> = [];

    for (let source of Object.keys(hashMap)) {
        if (visited[source] !== 1) {
            isCycle(source, hashMap, visited, path, stack);
        }

        if (visited[source] === 1 && path[source] === 1) {
            return false
        }
    }

    return true;
};


console.log(canFinish(5,[[1,2],[2,4],[4,3],[3,1]]));
