interface runnable {
    run: Function
}
class Person{

}

class Son extends Person implements runnable{
    run(){
        console.log("run")
    }
}

let p: Person = new Person();
p = new Son();

let r: runnable = new Son();

export default {}