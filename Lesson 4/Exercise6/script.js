const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];
const AAPLStockClosingPrices = [256.45, 255.25, 259.10, 260.75, 261.88];


// Write your code below

function getBetween(closingPrices, stockName) {
    let count = 0;
    for (price of closingPrices){
        if (price > 254 && price < 257){
            count += 1;
        }
    }
    console.log("Closing price of " + stockName + "between 254 and 257: " + count)
};

getBetween(MSFTStockClosingPrices);
getBetween(AAPLStockClosingPrices);