// Object containing the questions  
let o = {  
    h1: "What is the difference between let, var, and const in JavaScript?",  
    h2: "Which of the following methods is used to convert a JSON object into a string in JavaScript?",  
    h3: "Winter arc duration?",  
    h4: "What is the purpose of the async and await keywords in JavaScript?",  
    h5: "How callback hell can be sorted through?",  
    h6: "Destructing is the part of",  
};  

// Arrays for the answer options  
const a = ["const allows reassignment of variables, while let and var do not.", "let is global-scoped, while var and const are local-scoped", "var is function-scoped, while let and const are block-scoped", "JSON.stringify()", "JSON.parse()", "JSON.encode()"];  
const b = ["Oct-March", "Dec-Feb", "Jan-March", " To handle promises synchronously", " To pause the execution of code until a promise is resolved or rejected", "To make a function run faster"];  
const c = ["Event-listeners", "Promises", "loops", "Advance-Js", "BasicJs", "Java"];  

// Log the answer array 'a' to the console  
console.log(a);  

// Select DOM elements  
let s = document.querySelector(".score"); // Element to display score  
let queries = document.querySelector(".Questions"); // Element to display questions  
let click = document.querySelector(".butn"); // Button to start the quiz  
let t = document.querySelector(".timer"); // Timer display  
let k = document.querySelector(".key"); // Element for keys or hints  
let vrr = []; // Array to store selected answers  
let arr = []; // Array to store answers for the first question set  
let brr = []; // Array to store answers for the second question set  
let crr = []; // Array to store answers for the third question set  

// Function to create a delay  
function aynxc(ms) {  
    return new Promise(resolve => setTimeout(resolve, ms));  
}  

// Function to manage the timer  
function duration() {  
    let time = 30; // Set initial time to 30 seconds  
    const interval = setInterval(() => {  
        if (time > 0) {  
            t.innerHTML = `Time: ${time} sec`; // Update timer display  
            time--; // Decrement time  
        } else {  
            clearInterval(interval); // Stop the timer  
            t.innerHTML = "Time-up!"; // Display time-up message  
            s.classList.toggle("show"); // Show score section  
            k.classList.toggle("see"); // Toggle key visibility  
            queries.classList.toggle("visible"); // Hide questions  
        }  
    }, 1000); // Execute the interval every second  
}  

// Function to display questions and handle interactions  
async function displayQs() {  
    click.addEventListener("click", () => {  
        // Toggle visibility of questions and button  
        queries.classList.toggle("visible");  
        queries.classList.toggle("high2");  
        click.classList.toggle("hide");  
        t.classList.toggle("watch"); // Toggle timer visibility  

        // If questions are being shown, populate them  
        if (queries.classList.contains("visible")) {  
            queries.innerHTML = ''; // Clear any previous content  

            // Create the quiz content dynamically  
            let div = document.createElement("div");  
            div.innerHTML = `  
                <h2>${o.h1}</h2>  
                <ol class="A1">  
                    <li>${a[0]}</li>  
                    <li>${a[1]}</li>  
                    <li>${a[2]}</li>  
                </ol>  
                <h2>${o.h2}</h2>  
                <ol class="A1">  
                    <li>${a[3]}</li>  
                    <li>${a[4]}</li>  
                    <li>${a[5]}</li>  
                </ol>  
                <h2>${o.h3}</h2>  
                <ol class="A2">  
                    <li>${b[0]}</li>  
                    <li>${b[1]}</li>  
                    <li>${b[2]}</li>  
                </ol>  
                <h2>${o.h4}</h2>  
                <ol class="A2">  
                    <li>${b[3]}</li>  
                    <li>${b[4]}</li>  
                    <li>${b[5]}</li>  
                </ol>  
                <h2>${o.h5}</h2>  
                <ol class="A3">  
                    <li>${c[0]}</li>  
                    <li>${c[1]}</li>  
                    <li>${c[2]}</li>  
                </ol>  
                <h2>${o.h6}</h2>  
                <ol class="A3">  
                    <li>${c[3]}</li>  
                    <li>${c[4]}</li>  
                    <li>${c[5]}</li>  
                </ol>  
            `;  

            // Clear questions after 32 seconds  
            setTimeout(() => {  
                div.innerHTML = '';  
            }, 32000);  

            duration(); // Start the timer  
            queries.appendChild(div); // Append the content to the .Questions section  

            // Select answer lists  
            let A1 = document.querySelectorAll(".A1 li"); // First set of answers  
            let A2 = document.querySelectorAll(".A2 li"); // Second set of answers  
            let A3 = document.querySelectorAll(".A3 li"); // Third set of answers  

            // Add click event listeners for the first set of answers  
            A1.forEach(async (item, index) => {  
                item.addEventListener("click", async () => {  
                    // Check if the clicked answer is correct  
                    if (index === 2 || index === 3) {  
                        await aynxc(1000); // Wait for 1 second  
                        alert("Correct option"); // Alert for correct option  
                        let correct = a[index]; // Get the correct answer  
                        arr.push(correct); // Push to answers array  
                        displayscore(correct); // Display score  
                    } else {  
                        let correct = a[index];  
                        arr.push(correct);  
                        displayscore(correct);  
                    }  
                });  
            });  

            // Add click event listeners for the second set of answers  
            A2.forEach(async (item, index) => {  
                item.addEventListener("click", async () => {  
                    // Check if the clicked answer is correct  
                    if (index === 0 || index === 4) {  
                        await aynxc(1000); // Wait for 1 second  
                        alert("Correct option"); // Alert for correct option  
                        let correct2 = b[index]; // Get the correct answer  
                        brr.push(correct2); // Push to answers array  
                        displayscore(correct2); // Display score  
                    } else {  
                        let correct2 = b[index];  
                        brr.push(correct2);  
                        displayscore(correct2);  
                    }  
                });  
            });  

            // Add click event listeners for the third set of answers  
            A3.forEach(async (item, index) => {  
                item.addEventListener("click", async () => {  
                    // Check if the clicked answer is correct  
                    if (index === 1 || index === 3) {  
                        await aynxc(1000); // Wait for 1 second  
                        alert("Correct option"); // Alert for correct option  
                        let correct3 = c[index]; // Get the correct answer  
                        crr.push(correct3); // Push to answers array  
                        displayscore(correct3); // Display score  
                    } else {  
                        let correct3 = c[index];  
                        crr.push(correct3);  
                        displayscore(correct3);  
                    }  
                });  
            });  
        }  
    });  
}  

// Call function to display questions  
displayQs();  

// Function to display selected answers  
function displayscore(SelectedOption) {  
    // Create h2 in score section  
    s.innerHTML = "<h2>Your Answers</h2>";  

    // Push clicked answer inside an array  
    vrr.push(SelectedOption);  

    // Display each clicked answer  
    vrr.forEach(SelectedOption => {  
        let p = document.createElement('p');  
        p.innerHTML = `Selected option: ${SelectedOption}`; // Display selected option  
        s.appendChild(p); // Append the selected option to the score section  
    });  
}  