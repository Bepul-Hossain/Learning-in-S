function canFinish(numCourses: number, prerequisites: number[][]): boolean {


    const isExistCycle = (source: number, graph: { [key: number]: Array<number> }, visited: { [key: string]: boolean }): boolean => {

        let stack: Array<number> = [];
        stack.push(source);
    
        while (stack.length > 0) {
            let current: number | undefined = stack.pop();
            if (current !== undefined) {
                if (visited[current] === true) {
                    return true;
                }
                visited[current] = true;
                for (let neighbor of graph[current]) {
                    stack.push(neighbor);
                }
            }
        }
    
        return false;
    }

    let n = prerequisites.length;
    if (numCourses > n) return false;

    let hashMap: { [key: number]: Array<number> } = {};
    for (let i = 0; i < numCourses; i++) {
        hashMap[i] = [];
    }
    for (let i = 0; i < n; i++) {
        let [firstValue, secondValue] = prerequisites[i];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        }
    }
    let initialVisited: { [key: number]: boolean } = {};
    for (let key in hashMap) {
        initialVisited[key] = false;
    }

    for (let key in hashMap) {
        let visited = { ...initialVisited }

        if (isExistCycle(Number(key), hashMap, visited)) {
            return true;
        }
    }

    return false;
};

console.log(canFinish(2, [[1,0]]));
