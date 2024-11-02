### 前端面试题目

- <details><summary>在html中，块级元素与行内元素的区别是？</summary>
    完整答案请参看：https://blog.csdn.net/weixin_47340917/article/details/120651006 <br/>
    1、设置块级元素时会独占一行，其宽度等于父级的宽度；<br/>
    2、行内元素不会独占一行，相邻的行内元素会排列在同一行里，直到超出父级的宽度，才会执行自动换行，其宽度随元素的内容而变化；<br/>
    3、块级元素可以设置 width, height属性，来调整大小；<br/>
    4、注意：块级元素即使设置了宽度，仍然是独占一行的；<br/>
    5、行内元素设置width, height无效;<br/>
    6、块级元素可以设置margin 和 padding；<br/>
    7、行内元素的水平方向的padding-left,padding-right,margin-left,margin-right有效，但是竖直方向的padding-top,padding-bottom,margin-top,margin-bottom无效，即水平方向有效，而垂直方向无效；
  </details>

- <details><summary>1个父元素有3个子元素，请使用Flex布局方式使得3个子元素在水平方向均分父元素？</summary>
  父元素：display: flex; 子元素：flex: 1 0 0;
  </details>

- <details><summary>请使用最少 2 种方式来实现子元素在父元素中水平垂直居中，假定父子元素均为块级元素，且大小不定。</summary>
  1、定位法：父元素：position: relative; ，子元素：position: absolute; left: 50%; top: 50%;transfrom: translate(-50%,-50%);<br/> 
  2、弹性布局; 父元素：display: flex；justify-content: center;align-items: center;<br/>
  3、父元素：place-content: center; 子元素：margin: 0 auto; 
  </details>

- <details><summary>在一个可拖拽移动的元素上，注册了 click, mousedown、mouseup、mousemove 事件，当用户点在此元素上按下鼠标并拖拽移动一段距离后松开鼠标，请问依次触发上述事件的顺序是？</summary>参考答案：mousedown、mousemove、mouseup、click</details>

- <details><summary>请简述 mouseover、mouseenter 事件的主要区别？</summary>
  mouseover和mouseenter都是鼠标移到元素身上就触发，区别是：<br/>
  1.mouseover经过自身盒子触发，经过子盒子也触发，用于冒泡特性<br/>
  2.mouseenter只经过自身盒子触发，没有冒泡特性  
  </details>
- <details><summary>请实现一个蛇形布局，假定：vue3组件场景下、大概有 40 个节点、等高不等宽、 每行为两端对齐、节点之间使用带箭头的线条连接</summary>
  参看答案：假定所有节点的父元素为nodes-list<br/>
  初始化时,为nodes-list设置css属性 visibility: hidden，display: flex; flex-wrap: wrap; justity-content: space-between;<br/>
  在蛇形布局成型之后再恢复为visibility: visible<br/>
  在vue3的onMounted钩子函数中计算全部节点排列的行数。<br/>
  ddd<br/>
  </details>

- 请为下列函数添加 typescript 类型注解
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
  - 基于上述 Point 类型，如何优化 Point3D 的类型注解？
- 请问以下代码会报类型错误吗？

  ```javascript

  ```

- <details><summary>在常规的vue3工程中，父子组件之间通信的方式有哪些？</summary>参考答案：1、props</details>
- <details><summary>在Javascript领域，函数的叫法有哪些？</summary>参考答案：1、function关键字声明的标准函数；2、</details>
