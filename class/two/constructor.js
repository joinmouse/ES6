class Point {
}

/* 等同于
class Point {
  constructor() {}
}
*/


/*----------------------------------*/
class Foo {
  //constructor方法默认返回实例对象(即this)
  constructor() {
    return Object.create(null)
  }
}

//constructor函数返回一个全新的对象，结果实例对象不是Foo类的实例
console.log(new Foo() instanceof Foo)  //false 


