class B {}
let b = new B()

//b是B类的实例,它的constructor方法就是B类原型的constructor方法
console.log(b.constructor === B.prototype.constructor)

/*-----------------------------------------------*/

class Point {
  constructor(x, y) {
  }
  todo(){}
  say(){}
}

//类的方法定义在prototype对象上，通过Object.assign方法像类添加prototype对象上
Object.assign(Point.prototype, {
  toString(){},
  toValue(){}
})

//类内部定义的方法，都是不可枚举的(no-enumerable)
let a1 = Object.keys(Point.prototype)
console.log(a1)

//所有类原型链上的方法
let a2 = Object.getOwnPropertyNames(Point.prototype)
console.log(a2)


/*---------------------------------------------------*/

let Point2 = function(x, y) {
}

Point2.prototype.toString = function(){}

//用ES5的写法，toString方法是可枚举的
console.log(Object.keys(Point2.prototype))
console.log(Object.getOwnPropertyNames(Point2.prototype))
