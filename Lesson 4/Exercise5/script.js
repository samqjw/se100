
	const MSFTStockClosingPrices = [254.12, 253.12, 256.97, 257.52, 258.93];

	// Write your code below

    function getBetween() {
    let count = 0;

    for (price of MSFTStockClosingPrices){
        if (price > 254 && price < 257){
            count += 1;
        }
    }
};

    console.log("Number of closing prices between 254 and 257: " + count);


//You are to create a function that will calculate the number of values
// that are between 254 and 257, 
// and then log the final value in the console.