const num1Ele=document.getElementById("num1") as HTMLInputElement;
const num2Ele=document.getElementById("num2") as HTMLInputElement;
const btnEle=document.querySelector("button")!;

const numResult1: number[]= [];
const stringResult1: string[]= [];

type numOrstring= number|string
type Result= {val:number; timestamp:Date}

interface ResultObj{
    val:number;
    timestamp:Date
}


function add(num1 : numOrstring, num2: numOrstring) {
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2
    }else if(typeof num1 === 'string' && typeof num2 === 'string'){
        return num1 + ' '+ num2;
    }
    return +num1 +  +num2;
}

function printResult(resultObj:ResultObj){
    console.log(resultObj.val);
}



btnEle.addEventListener('click', function () {
    var num1 = num1Ele.value;
    var num2 = num2Ele.value;
    const numResult = add(+num1, +num2);
    numResult1.push(numResult as number)
    const stringResult=add(num1, num2)
    stringResult1.push(stringResult as string)
    printResult({val: stringResult as number, timestamp:new Date()})
    console.log(numResult1, stringResult1)
});


