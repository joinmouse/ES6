class A {}

// B的构造函数super(),代表调用父类的构造函数[必须的]
class B extends A {
  constructor() {
    super()
  }
}

/*------------------------------------------*/
//1、super作函数，只能在子类的构造函数中
class A1 {
  constructor() {
    console.log(new.target.name)  //new.target指向当前正在执行的函数
  }
}

// super虽然代表父类A的构造函数，但返回子类B的实例
class B1 extends A1 {
  constructor() {
    //super相当于：A1.prototype.constructor.call(this)
    super()
  }
}
new A1()  // A1
new B1()  // B


/*-------------------------------------------*/
//2、super作对象，指向父类的原型对象
class A2 {
  p() {
    return 2
  }
}

class B2 extends A2 {
  constructor() {
    super()
    console.log(super.p())  //2
  }
}

let b = new B2()


/*--------------------------------------------*/
//super调用父类方法，方法内部的this指向子类
class A3 {
  constructor() {
    this.x = 1;
  }
  print() {
    console.log(this.x);
  }
}

class B3 extends A3 {
  constructor() {
    super();
    this.x = 3;
  }
  m() {
    super.print();
  }
}

let b3 = new B3();
b3.m()   // 3