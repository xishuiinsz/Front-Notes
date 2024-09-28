// 交换2个元素
const swap = <T, U>([a, b]: [T, U]) => {
  return [b, a];
};

interface Point {
  x: number;
  y: number;
}
interface Point3D {
  x: number;
  y: number;
  z: number;
}

const p1: Point = { x: 100, y: 200 };
let p2: Point3D;
p2 = p1;

let p3: Point;
const p4: Point3D = { x: 100, y: 200, z: 300 };
p3 = p4;
