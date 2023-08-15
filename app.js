var num1Ele = document.getElementById("num1");
var num2Ele = document.getElementById("num2");
var btnEle = document.querySelector("button");
var numResult1 = [];
var stringResult1 = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
btnEle.addEventListener('click', function () {
    var num1 = num1Ele.value;
    var num2 = num2Ele.value;
    var numResult = add(+num1, +num2);
    numResult1.push(numResult);
    var stringResult = add(num1, num2);
    stringResult1.push(stringResult);
    printResult({ val: stringResult, timestamp: new Date() });
    console.log(numResult1, stringResult1);
});
