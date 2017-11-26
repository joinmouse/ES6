class Point {
  constructor() {
    // ...
  }
  toString() {
    // ...
  }
  toValue() {
    // ...
  }
}

// 上面的代码等同于
Point.prototype = {
  constructor() {},
  toString() {},
  toValue() {},
}
