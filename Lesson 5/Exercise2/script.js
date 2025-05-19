function fetchData(): Promise<string> {
    // Write your code here
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Data retrieved")
        }, 1000)
    });
}

function processData(data: string): Promise<string> {
    // Write your code here
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(data+ " and processed")
        }, 1000)})
}

function displayData(data: string) {
    // Write your code here
    console.log(data);
}

// Chaining the functions
fetchData()
    .then((data) => processData(data))
    .then((processedData) => displayData(processedData));