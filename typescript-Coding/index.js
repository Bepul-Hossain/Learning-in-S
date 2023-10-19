var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function canFinish(numCourses, prerequisites) {
    var isExistCycle = function (source, graph, visited) {
        var stack = [];
        stack.push(source);
        while (stack.length > 0) {
            var current = stack.pop();
            if (current !== undefined) {
                if (visited[current] === true) {
                    return true;
                }
                visited[current] = true;
                for (var _i = 0, _a = graph[current]; _i < _a.length; _i++) {
                    var neighbor = _a[_i];
                    stack.push(neighbor);
                }
            }
        }
        return false;
    };
    var n = prerequisites.length;
    if (numCourses > n)
        return false;
    var hashMap = {};
    for (var i = 0; i < numCourses; i++) {
        hashMap[i] = [];
    }
    for (var i = 0; i < n; i++) {
        var _a = prerequisites[i], firstValue = _a[0], secondValue = _a[1];
        if (hashMap[firstValue]) {
            hashMap[firstValue].push(secondValue);
        }
    }
    var initialVisited = {};
    for (var key in hashMap) {
        initialVisited[key] = false;
    }
    for (var key in hashMap) {
        var visited = __assign({}, initialVisited);
        if (isExistCycle(Number(key), hashMap, visited)) {
            return true;
        }
    }
    return false;
}
;
console.log(canFinish(2, [[1, 0]]));
