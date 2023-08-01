
let saveEl = document.getElementById("savedLog")
let getCount = document.getElementById("count")


let count = 0
let logs = []; // Array to store the logs


function increment() {
    count += 1
    getCount.textContent = count
}

function save() {
    var logEl = count + " - ";
    logs.push(logEl); // Add the current count to the logs array
    saveEl.textContent = "Previous entries: " + logs.join(""); // Update the saveEl with the label and all the logs separated 
    
    getCount.textContent = 0
    count = 0
    console.log(count);
}







