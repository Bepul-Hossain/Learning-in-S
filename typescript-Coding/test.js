function dfs(source, graph, visited, path, stack) {
    // console.log("call----------");
    stack.push(source);

    if (visited[source] === 1 && path[source] === 1) {
        stack.pop();
        return "Cycle";
    }

    visited[source] = 1;
    path[source] = 1;

    console.log(source);

    for (let neighbor of graph[source]) {
        let check = dfs(neighbor, graph, visited, path, stack);
        if (check !== undefined) return check;
    }

    path[source] = 0;
    stack.pop();

    if (stack.length === 0) {
        return "No cycle";
    }

}


function main() {
    //driver code

    // const graph = {'1': [1,1]} // cycle
    // const graph = { '1': [0],'0':[1] }; //cycle
    // const graph = { '1': []}; //no-cycle
    // const graph = { '1': [2, 3], '2': [4], '3': [4], '4': [] }; //no-cycle
    // const graph = { '1': [2], '2': [4], '4': [3], '3': [1] }; // cycle
    // const graph = {'1':[2], '2':[3,9], '3':[4],'4':[5,6], '5':[7], '7': [8], '8':[], '6':[7], '9': [10], '10':[11], '11':[9]} //cycle
    // const graph = { '0': [10], '10': [], '3': [18], '18': [], '5': [5], '6': [11], '11': [14], '14': [], '13': [1], '15': [1], '1': [], '17': [4], '4': [] } // cycle
    const graph = { '5': [5] };

    const visited = [];
    const path = [];
    const stack = [];

    for (let source of Object.keys(graph)) {
        if (visited[source] !== 1) {
            dfs(source, graph, visited, path, stack);
        }
        if (visited[source] === 1 && path[source] === 1) {
            console.log("cycle");
            return true
        }
    }

    return false;

}
console.log(main());

// console.log(dfs(1, graph, visited, path, stack))
