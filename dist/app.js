"use strict";
// const num1Ele=document.getElementById("num1") as HTMLInputElement;
// const num2Ele=document.getElementById("num2") as HTMLInputElement;
// const btnEle=document.querySelector("button")!;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const numResult1: Array<number>= [];
// const stringResult1: string[]= [];
// type numOrstring= number|string
// type Result= {val:number; timestamp:Date}
// interface ResultObj{
//     val:number;
//     timestamp:Date
// }
// function add(num1 : numOrstring, num2: numOrstring) {
//     if(typeof num1 === 'number' && typeof num2 === 'number'){
//         return num1 + num2
//     }else if(typeof num1 === 'string' && typeof num2 === 'string'){
//         return num1 + ' '+ num2;
//     }
//     return +num1 +  +num2;
// }
// function printResult(resultObj:ResultObj){
//     console.log(resultObj.val);
// }
// btnEle.addEventListener('click', function () {
//     var num1 = num1Ele.value;
//     var num2 = num2Ele.value;
//     const numResult = add(+num1, +num2);
//     numResult1.push(numResult as number)
//     const stringResult=add(num1, num2)
//     stringResult1.push(stringResult as string)
//     printResult({val: stringResult as number, timestamp:new Date()})
//     console.log(numResult1, stringResult1)
// });
// const myPromise=new Promise<string>((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('it worked')
//     }, 1000)
// })
// myPromise.then((result)=>{
//     console.log(result.split('w'))
// })
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(2100);
