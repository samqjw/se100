const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

// Write your code below

//We need to get the scratchpad to call the addition thats why we have this line
let sumOfPrices = 0;

//We create this to have a loop to run through the array with += line to sum the amount
for(let i = 0; i < MSFTStockClosingPrices.length; i++){
    sumOfPrices += MSFTStockClosingPrices[i];
}
//We need to print and concatenate the text with the total sum
console.log("The total sum of closing prices of MSFT is " + sumOfPrices);