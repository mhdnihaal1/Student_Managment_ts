// class FrootShop {
//     fruits: [string, number][] = [];

//     constructor(froot: string, stock: number) {
//         this.fruits.push([froot, stock]);
//     }

//     checkFroot(froot: string, stock: number) {
//         const fruitIndex = this.fruits.findIndex(f => f[0] === froot);

//         if (fruitIndex !== -1) {
//             this.fruits[fruitIndex][1] += stock;
//         } else {
//             this.fruits.push([froot, stock]);
//         }
//     }

//     displayFruits() {
//         this.fruits.forEach(f => console.log(`${f[0]}: ${f[1]}`));
//     }
// }

// const shop = new FrootShop('grapes', 10);
// shop.checkFroot('grapes', 10);   
// // shop.checkFroot('apples', 15);
// shop.displayFruits();




interface instances{
    name:string;
    age:number;
    number:number;
}

let sample: instances={
    name:"nihal",
    age:34,
    number:4873820987
}
console.log(sample)

class  sam{
    static num:number =0;
    constructor(num:number){
        sam.num=num
    }
}
