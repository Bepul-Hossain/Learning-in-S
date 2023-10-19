const isExistCycle = (source: string, graph: { [key: string]: Array<string> }, visited: { [key: string]: boolean }): boolean => {

    let stack: Array<string> = [];
    stack.push(source);

    while (stack.length > 0) {
        let current: string | undefined = stack.pop();
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

function main(): boolean {
    let graph: { [key: string]: Array<string> } = {
        "0": ["1", "2"],
        "1": ["3"],
        "2": [],
        "3": [],
        "4": [],
    }
    let initialVisited: { [key: string]: boolean } = {};
    for (let key in graph) {
        initialVisited[key] = false;
    }

    for (let key in graph) {
        let visited = { ...initialVisited }

        if (isExistCycle(key, graph, visited)) {
            return true;
        }
    }
    return false;
}

console.log(main());
