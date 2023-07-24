const world = 'wod';
console.log(world);

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}