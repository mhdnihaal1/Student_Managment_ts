//----------------------Basics-------------------------
// let name: string = "John";
// let age: number = 25;
// let isStudent: boolean = true;
// let numbers: number[] = [1, 2, 3, 4, 5];
// let number :[number,number][]=[[1,2],[3,4],[5,6]]
// let num :(number|string)[]=[1,'dfg']
// let person: [string, number] = ["Alice", 30];

//---------------------function----------------
// function greet(name: string): string {
//     return `Hello, ${name}!`;
//   }
//   let greeting: string = greet("Alice");

//------------union types

// let value: string | number;
// value = "Hello";
// value = 42;

//--------optional 
// interface Car {
//     make: string;
//     model: string;
//     year?: number; 
//   }
//   let myCar: Car = { make: "Toyota", model: "Camry" };

  
// ==========interface======================
// interface Person {
//     name: string;
//     age: number;
//   }
//   let user: Person = { name: "John", age: 25 };
  
//====================overloading======================
// class Class{
//    add(num1:number,num2:number):number;
//    add(num1:number,num2:number,num3:number):number;
//     add(num1:any,num2:any,num3?:any):any{
    
//         if(num3 !== undefined){
//             return num1+num2+num3
//         } else{
//             return num1+num2
//         }
//    }
// }
// const k = new Class()
// console.log(k.add(2,6,6))
// ------------------------overriding------------------------------
// class Car{
//     sound():void{
//         console.log('takakakaka')
//     }
// }
// class Cars extends Car{
//     sound():void{
//         console.log('trunununun')
//     }
// }
// const ne = new Cars()
// ne.sound()

//==========================return promise in typescript===========================================
// function fetchData(): Promise<string> {
//     return new Promise((resolve, reject) => {
//             resolve("Data received");
//     });
// }
// fetchData().then(data => console.log(data));

//-----------------------------enums-------------------------------------------
// enum Direction {
//     Up,
//     Down,
//     Left,
//     Right
// }
// const move = Direction.Up;
// console.log(move); 

//==========================access modifiers===================================
// class Person {
//     public name: string;
//     private age: number;
  
//     constructor(name: string, age: number) {
//       this.name = name;
//       this.age = age;
//     }
//     getAge(): number {
//       return this.age;
//     }
//   }
//   let john = new Person("John", 30);
//   console.log(john.name); 
//   console.log(john.getAge());

//--------------------------------generics-----------
// function identity<T>(arg: T): T {
//     return arg;
//   }
//   let output1 = identity<string>("Hello");
//   let output2 = identity<number>(42);

    //=====================interface with class
    // interface Drivable {
    //     drive(): void;
    // }
      
    //   class Car implements Drivable {
    //     drive(): void {
    //       console.log("The car is driving");
    //     }
    //   }
    //   let myCar = new Car();
    //   myCar.drive();

//--------------------readonly
// class Person {
//     readonly name: string;

//     constructor(name: string) {
//       this.name = name;
//     }
//   }
//   let john = new Person("John");
//   let johns = new Person("Joh");

//   console.log(johns.name="shdh")

//===============intersection type
// interface Name {
//     name: string;
//   }
//   interface Age {
//     age: number;
//   }
//   type PersonDetails = Name & Age;
//   let person: PersonDetails = { name: "John", age: 30 };
//   console.log(person)
  //==========================utility operators========================

//---extract
//   type Colors = "red" | "green" | "blue";
// type PrimaryColors = Extract<Colors, "red" | "blue">; 


//----Exclude
// type Colors = "red" | "green" | "blue";
// type PrimaryColors = Exclude<Colors, "green">; // "red" | "blue"

//-----record
// type UserRoles = "admin" | "user" | "guest";

// const roles: Record<UserRoles, string> = {
//   admin: "Administrator",
//   user: "Regular User",
//   guest: "Guest User"
// };

//-----omit
// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
//   type UserWithoutEmail = Omit<User, "email">;
//   const user: UserWithoutEmail = { name: "John", age:20 };
  
//-----pick
// interface User {
//     name: string;
//     age: number;
//     email: string;
//   }
//   type UserNameAndEmail = Pick<User, "name" | "email">;
//   const user: UserNameAndEmail = { name: "John", email: "john@example.com" };

//-----readonly
// interface User {
//     name: string;
//     age: number;
//   }
//   const user: Readonly<User> = { name: "John", age: 25 };
  
//----required
// interface User {
//     name?: string;
//     age?: number;
//   }
//   const user: Required<User> = { name: "John", age: 25 };
  
//-----partial
// interface User {
//     name: string;
//     age: number;
//   }
//   const updateUser = (user: User, updates: Partial<User>) => {
//     return { ...user, ...updates };
//   };
//   let user = { name: "John", age: 25 };
//   let updatedUser = updateUser(user, { age: 26 });
  
//------------------conditional types
// function isSampleArray<T>(value: T): Sample<T> {
//     return Array.isArray(value) as Sample<T>;
// }

// console.log(isSampleArray([1, 2, 3]));
// console.log(isSampleArray(42));


//----------------as string
// let x: unknown = 'hello';
// console.log((x as string).length);
//----------type assertion 
// let someValue: any = "This is a string";
// let strLength: number = (someValue as string).length;
// console.log(strLength); 
//---------------------------

// let samp :unknown = '1234';
// let sa:number = (samp as string).length;

// console.log(typeof sa,typeof samp)

