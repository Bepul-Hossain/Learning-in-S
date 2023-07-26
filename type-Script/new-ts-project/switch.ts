// interface Circle {
//     kind: "circle";
//     radius: number;
//   }
   
// interface Square {
//     kind: "square";
//     sideLength: number;
//   }
// interface Triangle {
//     kind: "triangle";
//     sideLength: number;
//   }
   
// type Shape = Circle | Square | Triangle | any;
   
// function getArea(shape: Shape) {
//     switch (shape.kind) {
//       case "circle":
//         return Math.PI * shape.radius ** 2;
//       case "square":
//         return shape.sideLength ** 2;
//       case "triangle":
//         return shape.sideLength ** 2;
//       default:
//         const _exhaustiveCheck: any = shape;
//         return _exhaustiveCheck;
//     }
// }

// function assertion(shape: never){
//     throw new Error("Can not reach")
// } 

// console.log(getArea({kind: "triangle", sideLengt: 3}));
