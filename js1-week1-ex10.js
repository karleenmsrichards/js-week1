//Increase by Half Function together with Pence to Pounds Function
const pocketMoney = 413;

function increaseByHalf(pocketMoney) {
    return pocketMoney / 2 + pocketMoney
}

function formatPenceToPounds(pocketMoney) {
    return pocketMoney / 100;
}

const result = increaseByHalf(pocketMoney);

console.log("£" + formatPenceToPounds(result));