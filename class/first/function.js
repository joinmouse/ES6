/*原生function 生成实例对象*/
function Point(x, y) {
  this.x = x
  this.y = y
}

Point.prototype.toString = function() {
  return '(' + this.x + ',' + this.y + ')'
}

var p = new Point(1,2)
console.log(p.toString())


/******定义类******/
// this关键字表示实例对象
class Point2 {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  toString() {
    return '(' + this.x + ',' + this.y + ')'
  }
}

var classP = new Point2(3,3)
console.log(classP.toString())

//类的数据类型就是函数，类的本身就是指向构造函数
console.log(typeof Point)  //function
console.log(Point === Point.prototype.constructor) //true
