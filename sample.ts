// import { resolve } from "path";

// interface User{
// name:string;
// age:number;
// }

// function sample(user:User):Promise<User|void>{
//     if(user){
//         return  Promise.resolve(user)
//         }else{
//         return Promise.resolve();
//     }
// }
// const user:User ={
//     name:'nihal',
//     age:20
// }
// sample(user).then((user:User|void)=>console.log(user))

// /=======================================================

// const user ={
//     admin:['create','read','update','delete'],
//     user :['read','update']
// }

// function action(role:keyof typeof user,actions:string){
//     if(user[role].includes(actions)){
//         console.log(`access allowed ${role} for ${actions} `)
//     }else{
//         console.log(`access not allowed ${role} for ${actions} `)
//     }
// }
//  action('user','create')
// 

//=====================================

// class Sample{
//     private number :number=0;

//     constructor(number:number){
//         this.number = number
//     }

//     samp(){
//       return this.number
//     }

// }
// const cla = new Sample(23)
// console.log(cla.samp())
//--------------------------------
// interface sam{
//     name:string;
//     fun():void;
// }
// interface sam{
//     age:string
// }
// interface sam{
//     place:string
// }

// const user :sam={
//     name:'nihal',
//     age:'20',
//     place:'calicut'
// }
//---------------------------------------

// class curr implements sam{
//     name:string;
//     constructor(name:string){
//       this.name=name
//     }
// fun(){
// console.log(123)
// }
// }
// console.log(user.place)
//----------------------------------
// abstract class cley{
// abstract clu():number;
// abstract name:string;
// }
// class sam implements cley{
// clu(): number {
//     return 12
// }
// name = 'kdsfgksd' 
// }
//---------------------------------------

// interface sample{
//     gender:'string';

// }
// type gender = ['male','female']
// const party:sample={
//     gender:"string"
// }

//----------------------------------------

// class sample{
//     add(num1:number,num2:number):number;
//     add(num1:number,num2:number,num3:number):number;

//     add(num1:number,num2:number,num3?:number):number{
//         if(num3 == undefined){
//             return num1+num2
//         }else{
//             return num1+num2+num3
//         }
//     }
// }
// const sa = new sample()
// console.log(sa.add(1,2,3))

//-----------------------------------

// class first{
//   sound():void{
//     console.log('first')
//   }
// }
// class second extends first{
// sound():void{
//     console.log('second')
// }
// }
// const sa = new second()
// sa.sound()

//-----------------------------------

// type gender = 'male'|'female';
// const sa :gender="male";
// console.log(sa)

