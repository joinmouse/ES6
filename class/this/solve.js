/*------------------构造方法中绑定this------------------------*/

class Logger {
  constructor() {
    //构造方法中绑定this，这样就不会找不到print方法了！！耶耶
    this.printName = this.printName.bind(this)
  }

  printName(name = 'constructor') {
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger()
const { printName } = logger
console.log(printName())


/*------------------箭头函数解决this指向--------------------------*/

class Logger2 {
  constructor() {
    this.printName2 = (name = 'arrow') => {
      this.print(`Hello ${name}`)
    }
  }

  print(text) {
    console.log(text)
  }
}

const logger2 = new Logger2()
const { printName2 } = logger2
console.log(printName2())