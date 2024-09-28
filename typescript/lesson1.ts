// 交换2个元素
const swap = <T, U>([a, b]: [T, U]) => {
  return [b, a];
};

//#region 类型扩容与收窄
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
//#endregion

//#region 提取类型
type Props = {
  onClick: (e: MouseEvent) => void;
  onDrag: (e: DragEvent) => void;
  new1Types: string;
  class2Name: string;
};

type T1 = keyof Props; // T1类型的提示：type T1 = keyof Props
type T2 = keyof Props & {}; // T2类型的提示：type T2 = "onClick" | "onDrag" | "new1Types" | "class2Name"
type T3 = keyof Props & `on${string}`; // T3的类型提示：type T3 = "onClick" | "onDrag"

//#endregion

//#region string类型  与   string字面量类型
const routes = {
  home: "/",
  admin: "/admin",
  user: "/user",
} as const;

const goToRoute = (r: "/" | "/admin" | "/user") => {};
goToRoute(routes.admin);

type ValueOf<T> = T[keyof T];

type RoutePath = ValueOf<typeof routes>;

//#endregion
