class Logger {
  printName(name = 'there') {
    //this默认指向类的实例，单独使用this会指向该方法运行时的环境，找不到print而报错
    this.print(`Hello ${name}`)
  }

  print(text) {
    console.log(text)
  }
}

const logger = new Logger()
const { printName } = logger

//TypeError: Cannot read property 'print' of undefined
console.log(printName()) 