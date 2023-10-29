function isCycle(source, graph, visited, path, stack) {
    stack.push(source);
    if (visited[source] === 1 && path[source] === 1) {
        stack.pop();
        return true;
    }
    visited[source] = 1;
    path[source] = 1;
    for (var _i = 0, _a = graph[source]; _i < _a.length; _i++) {
        var neighbor = _a[_i];
        var check = isCycle(neighbor.toString(), graph, visited, path, stack);
        if (check !== undefined)
            return check;
    }
    path[source] = 0;
    stack.pop();
    if (stack.length === 0)
        return false;
}
function canFinish(numCourses, prerequisites) {
    var hashMap = {};
    for (var i = 0; i < numCourses; i++) {
        hashMap[i] = [];
    }
    for (var i = 0; i < prerequisites.length; i++) {
        var _a = prerequisites[i], firstValue = _a[0], secondValue = _a[1];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        }
    }
    // console.log(hashMap);
    var visited = {};
    var path = {};
    var stack = [];
    for (var _i = 0, _b = Object.keys(hashMap); _i < _b.length; _i++) {
        var source = _b[_i];
        if (visited[source] !== 1) {
            isCycle(source, hashMap, visited, path, stack);
        }
        if (visited[source] === 1 && path[source] === 1) {
            return false;
        }
    }
    return true;
}
;
console.log(canFinish(5, [[1, 2], [2, 4], [4, 3], [3, 1]]));
