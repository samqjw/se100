function getNumberPromise() {
    return new Promise ((resolve, reject) => {
        //Wait for 2 seconds before resolving
        setTimeout(()=>{
            resolve(10);
        }), 2000;
    })
}

// Test the function
getNumberPromise().then((value) => {
    console.log(value); // Should log 10 after 2 seconds
});

//Notes:
//.then can only be run on promises