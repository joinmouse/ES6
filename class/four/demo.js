//Me只在Class内部代码可用，指当前类
const MyClass = class Me {
  getClassName() {
    return Me.name
  }
}

let inst = new MyClass()
console.log(inst.getClassName())  //Me

/*----------------------------------------*/
let person = new class {
  constructor(name) {
    this.name = name
  }

  sayName() {
    console.log(this.name)
  }
}('张三')

console.log(person.sayName())  //'张三' 
