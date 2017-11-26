// 定义类
class Point {
  constructor(x,y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ',' + this.y + ')'
  }
}

let point = new Point(2, 3)
let a = point.toString()
console.log(a) //(2, 3)


//x和y都是实例对象point自身的属性(定义在this变量上)，hasOwnProperty方法返回true
//toString是原型对象上的方法，所以返回false，与ES5行为保持一致
console.log(point.hasOwnProperty('x'))  //true
console.log(point.hasOwnProperty('y'))  //true
console.log(point.hasOwnProperty('toString'))  //false
console.log(point.__proto__.hasOwnProperty('toString'))  //true


/*--------------------------------------------*/
let p1 = new Point(2, 3)
let p2 = new Point(3, 2)

//原型都是Point.prototype
console.log(p1.__proto__ === p2.__proto__) //true

//p1.__proto__ == Point.prototype
p1.__proto__.printName = function() {
  return 'Oops'
}

console.log(p1.printName())   // 'Oops'
console.log(p2.printName())   // 'Oops'

let p3 = new Point(4, 2)
console.log(p3.printName())   // 'Oops'

