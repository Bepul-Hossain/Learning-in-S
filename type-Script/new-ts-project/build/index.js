"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const world = 'world';
console.log(world);
function hello(who = world) {
    return `Hello ${who}! `;
}
exports.hello = hello;
