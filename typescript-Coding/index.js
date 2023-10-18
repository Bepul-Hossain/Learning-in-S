function canFinish(numCourses, prerequisites) {
    var n = prerequisites.length;
    var hashMap = Object.fromEntries(Array.from({ length: n }, function (_, i) { return [i, []]; }));
    // for (let i = 0; i < numCourses; i++) {
    //     hashMap[i] = [];
    // }
    for (var i = 0; i < n; i++) {
        var _a = prerequisites[i], firstValue = _a[0], secondValue = _a[1];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        }
        else {
            hashMap[firstValue].push(secondValue);
        }
    }
    console.log(hashMap);
    var set = new Set();
    var dfs = function (graph, source) {
        var stack = [source];
        while (stack.length > 0) {
            var current = stack.pop();
            if (current !== undefined) {
                console.log(current);
                set.add(current);
                graph[current];
                for (var _i = 0, _a = graph[current]; _i < _a.length; _i++) {
                    var neighbor = _a[_i];
                    if (!set.has(neighbor)) {
                        stack.push(neighbor);
                    }
                }
            }
        }
    };
    dfs(hashMap, 0);
    console.log(set);
    if (set.size === n) {
        return true;
    }
    return false;
}
;
console.log(canFinish(6, [[0, 1], [0, 2], [1, 3], [1, 4], [3, 4], [4, 1]]));
