### 初级前端面试题目

- 请使用最少2种方式来实现子元素在父元素中左右垂直居中，假定父子元素均为块级元素，且大小不定。
- html中块级元素、行内元素有哪些？它们主要的不同点是？

### 中级前端面试题目
- 在一个可拖拽移动的元素上，注册了click, mousedown、mouseup、mousemove事件，当用户点在此元素上按下鼠标并拖拽移动一段距离后松开鼠标，请问依次触发上述事件的顺序是？
- 请问mouseover、mouseenter事件的主要区别？
- 请实现一个蛇形布局，假定：大概有40个节点、等高不等宽、

### 高级前端面试题目

- 请为下列函数添加 typescript 类型注释
  ```javascript
  // 交换2个元素
  const swap = ([a, b]) => {
    return [b, a];
  };
  ```
- 已知有下列 2 个接口
  ```javascript
  interface Point {
    x: number;
    y: number;
  }
  interface Point3D {
    x: number;
    y: number;
    z: number;
  }
  ```
  - 基于上述类型，请问下列 ts 代码会报错吗？
    ```javascript
    const p1: Point = { x: 100, y: 200 };
    let p2: Point3D;
    p2 = p1;
    ```
  - 基于上述类型，请问下列 ts 代码会报错吗？
    ```javascript
    let p3: Point;
    const p4: Point3D = { x: 100, y: 200, z: 300 };
    p3 = p4;
    ```
  - 基于上述Point类型，如何优化Point3D的类型注解？
- 请问以下代码会报类型错误吗？
  ```javascript
  ```