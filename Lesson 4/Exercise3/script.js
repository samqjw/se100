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
let sumOfPrices = 0

//This is a let to call data wihin the array (let of)
for(let weeklyPrice of MSFTStockClosingPrices){
    //This is a nested let to call data within the object (let in)
    for(let day in weeklyPrice){
        //These two lines are to check if we correctly called Day and Price
        console.log('Day: ' +day)
        console.log('Price: ' +weeklyPrice[day])
        sumOfPrices += weeklyPrice[day]
    }
};

console.log(sumOfPrices);