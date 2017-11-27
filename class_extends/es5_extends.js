//定义Person类
function Person(name, sex) {
  this.name = name
  this.sex = sex
}

Person.prototype.printName = function() {
  console.log(this.name)
}


//定义Male类
function Male(name,sex,age) {
  //继承Person的属性
  Person.bind(this)(name, sex)
  this.age = age
}

//Object.create()继承Person方法
//相当于Male.prototype.__proto__ = Person.prototype
Male.prototype = Object.create(Person.prototype)
Male.prototype.constructor = Male

Male.prototype.printAge = function() {
  console.log(this.age)
}
Male.prototype.printSex = function() {
  console.log(this.sex)
}

//Person实例
var p = new Person('wuqi')
console.log(p.printName())

//Male实例
var m = new Male('wu','man',18)
console.log(m.printAge())
console.log(m.printSex())
//方法继承自Person
console.log(m.printName())



//hasOwnProperty