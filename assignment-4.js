/* 
    Problem no: 1 
*/ 
// function declaration
function seerToMon(seer) {
    let mon = seer / 40; 
    return mon;
}
// call function
let totalMon = seerToMon(120);
// console.log(totalMon);



/* 
    Problem no: 2 
*/
// function declaration
function totalSales(shirtQuantity, pantQuantity, shoeQuantity) {
    // price
    let parShirtPrice = 100;
    let parPantPrice = 200;
    let parShoePrice = 500;
    // calculate
    let totalShirtPrice = shirtQuantity * parShirtPrice;
    let totalPantPrice = pantQuantity * parPantPrice;
    let totalShoePrice = shoeQuantity * parShoePrice;
    // all price add
    let totalSalesPrice = totalShirtPrice + totalPantPrice + totalShoePrice;
    return totalSalesPrice;
}
// call function
const total = totalSales(1, 1, 1);
// console.log(total)



/* 
    Problem no: 3
*/
// function declaration
function deliveryCost(deliveryQuantity) {
    // delivery cost
    let first100DeliveryCost = 100;
    let second100deliveryCost = 80;
    // condition declaration
    if(deliveryQuantity <= 100){
        let count = deliveryQuantity * first100DeliveryCost;
        // return 
        return count;
        // second 100 delivery cost calculate
    } else if(deliveryQuantity <= 200) {
        const firstDeliveryCostCount = 100 * first100DeliveryCost;
        const restDeliveryQuantity = deliveryQuantity - 100;
        const secondDeliveryCount = restDeliveryQuantity * second100deliveryCost;
        const totalDeliveryCost = firstDeliveryCostCount + secondDeliveryCount;
        // return
        return totalDeliveryCost;
        // third 100 delivery cost calculate
    } else {
        let firstDeliveryCostCount = 100 * first100DeliveryCost;
        let thirdDeliveryCount = 100 * second100deliveryCost;
        let restDeliveryQuantity = deliveryQuantity - 200;
        let restDeliveryCost = restDeliveryQuantity * 50;
        let totalDeliveryCost = firstDeliveryCostCount + thirdDeliveryCount + restDeliveryCost;
        // return
        return totalDeliveryCost;
    }
}
// function declaration
let totalPrice = deliveryCost(201);
// console.log(totalPrice);



/* 
    Problem no: 4
*/
// friend name list in array
let friendNames = ['abul', 'kabul',  'mahfuj', 'monsur', 'monirul', 'torikul'];
// function declaration
function perfectFriend(names) {
    let unique = [];
    for(let element of names) {
        if(element.length == 5) {
            // console.log(element);  
        }
    }
    // return
    return unique;
}
// call function 
let unique = perfectFriend(friendNames);
console.log(unique);