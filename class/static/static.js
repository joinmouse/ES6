class Foo {
  static classMethod() {
    return 'hello'
  }
}

//直接通过类来调用，加上static表示该方法不会被实例继承
console.log(Foo.classMethod())  // 'hello'


/*--------------------------------------------*/
//静态方法包含this关键字，this指向类，而不是实例
class Foo2 {
  static bar() {
    this.baz()
  }

  static baz() {
    console.log('wuqi')
  }
  
  baz() {
    console.log('heihei')
  }
}

console.log(Foo2.bar()) //


/*----------------父类静态方法，可以被子类继承----------------------*/
class Father {
  static classMethod() {
    return 'miss-huang'
  }
}

class Child extends Father {
}

console.log(Child.classMethod())  //'miss-huang'