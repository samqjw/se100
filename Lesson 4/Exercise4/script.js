const MSFTStockClosingPrices = [
    {
        Monday: 254.12,
        Tuesday: 253.12,
        Wednesday: 256.97,
        Thursday: 257.52,
        Friday: 258.93
    },
    {
        Monday: 292.20,
        Tuesday: 289.73,
        Wednesday: 291.04,
        Thursday: 294.55,
        Friday: 296.29
    }]
    
    // Write your code below

let i = 0;
let sumOfPrices = 0

while(i < MSFTStockClosingPrices.length){
    for (let day in MSFTStockClosingPrices[i]){
        sumOfPrices += MSFTStockClosingPrices[i][day]
    }
    i++
};

console.log(sumOfPrices);