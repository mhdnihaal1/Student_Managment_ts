
// class  sample{

//     method():void{
// console.log()
//     }
// }

// class second extends sample{
//     name:string

// constructor(name:string,age:number){

// super.method()
// }

// method(){
//     console.log(`${name}`)
// }

// }

// class first{
//     rank():void{
//         console.log('first')
//     }
// }

// class second extends first{
//     rank():void{
//         console.log('second')
//     }
// }

// const sam = new second()
// sam.rank()


// class sample{
//     private name:string='Hello';

//     constructor(name:string){
//         this.name=name
//     }

//     get(){
//         console.log(`${this.name}`)
//     }
// }
// class second extends sample{
//     constructor(name:string){
//         super(name)
//     }
// }

// const samp = new sample('hi')
// samp.get()

function sample<t>(name:t):t{
return name
}

console.log(sample<string>("Hello"))
console.log(sample<number>(123))
console.log(sample<boolean>(true))
