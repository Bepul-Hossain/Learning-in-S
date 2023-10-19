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
function main() {
    var graph = {
        "0": ["1", "2"],
        "1": ["3"],
        "2": [],
        "3": [],
        "4": [],
    };
    var initialVisited = {};
    for (var key in graph) {
        initialVisited[key] = false;
    }
    for (var key in graph) {
        var visited = __assign({}, initialVisited);
        if (isExistCycle(key, graph, visited)) {
            return true;
        }
    }
    return false;
}
console.log(main());
