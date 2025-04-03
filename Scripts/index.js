// // cache elements
// const submitBtn = document.getElementById('submit-btn');
// const birthdateInput = document.getElementById('birthdate');
// const resultElement = document.getElementById('result');
// const lifePathInfo = document.querySelector('#lifePathInfo');
// const instructions = document.querySelector('#instructions');

// //Event listener for info submition
// submitBtn.addEventListener('click', function(event) {
//     event.preventDefault(); //prevents page reload
//     const birthdate = birthdateInput.value

//     if (!birthdate) {
//         alert('Please enter a valid date')
//         return;
//     }
// })

// //Split the birthday into arrays and calculate
// // const birthdayParts = birthdate.split('-')
// // const year = Number(birthdayParts[0]); //"''" to numbers
// // const month = Number(birthdayParts[1]);
// // const day = Number(birthdayParts[2]);
// // const lifePathNumber = calculateLifePathNumber(day, month, year);

// //Calculate life path number using map callback
// const [year, month, day] = birthdate.split('-').map(Number);
// const lifePathNumber = calculateLifePathNumber(day, month, year);

// function calculateLifePathNumber(day, month, year) {
//     const daySum = sumDigits(day);
//     const monthSum = sumDigits(month);
//     const yearSum = sumDigits(year);

//     const total = daySum + monthSum + yearSum;
//     return reduceNumber(total);//Keeps breaking down the number until it reaches singles digits unless its a master number
// }

// function sumDigits(num) {
//     return num.toString().split('').map(Number).reduce((acc, val) => acc + val, 0); //Converts number into string then breaks down the numbers into single digits then converts to an array then gets the sum for those numbers
// }
// //Loop to iterate through all numbers until done or until master number is reached
// function reduceNumber(num) {
//     while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
//         num = sumDigits(num);
//     }
//     return num;
// }
// //Explanation for each number result

// function numberExplanation(number) {
//     1: "You're natural leader, independent thinker, and someone with a pioneering spirit, often drawn to careers that allow them to be their own boss"
//     2: ""
    
// }
// Cache elements using getElementById
//  ------------SECOND ATTEMPT

const submitBtn = document.getElementById('submit-btn');
const birthdateInput = document.getElementById('birthdate');
const resultElement = document.getElementById('result');
const lifePathInfo = document.querySelector('#lifePathInfo');

//Event listener for form submission
//Function runs when user clicks the "Find mt life path number"
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); //Prevents form from reloading the page
    //Gets the value from the input
    const birthdate = birthdateInput.value;

    if (!birthdate) { //If no data entered show error code and return
        alert('Please enter a valid date')
        return;
    }

    //Split birthdate into components (mm/dd/yyyy)
    const [month, day, year] = birthdate.split('-').map(Number);

    //Calculate by iterating through the split date
    const lifePathNumber = calculateLifePathNumber(day, month, year);

    //show results
    resultElement.textContent = `Your Life Path Number is: ${lifePathNumber}`;
    showLifePathInfo(lifePathNumber); 
    //shows the explanation in the 'lifePathInfo' element
    // lifePathInfo.textContent = numberExplanation(lifePathNumber);
});

//Functon to calculate the life path number
function calculateLifePathNumber(day, month, year) {
    //calculate sum of digits 
    const daySum = sumDigits(day);
    const monthSum = sumDigits(month);
    const yearSum = sumDigits(year);

    const total = daySum + monthSum + yearSum
    return reduceNumber(total); //Keeps breaking down the number until it reaches a single digit or a master number
}

// Function to iterate through all numbers after turning into a string
function sumDigits(num) {
    let sum = 0;
    for (let i = 0; i < num.toString().length; i++) {
        sum += Number(num.toString()[i]);
    }
    return sum; //Returns total sum of digits
}

//Function to reduce number to single digit or master number

function reduceNumber(num) {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = sumDigits(num); //Keeps adding digits until result is less than 10 or its a master number
    }
    return num; // return number result
}

// Function to show explanation for each result
function showLifePathInfo(lifePathNumber) {
    // Hide all explanations  at first
    const explanations = document.querySelectorAll('.lifePathExplanation');
    explanations.forEach(explanation => {
        explanation.style.display = 'none';
    });

 // Show the explanation for Life Path Number
 const selectedExplanation = document.getElementById(`lifePath${lifePathNumber}`);
 if (selectedExplanation) {
     selectedExplanation.style.display = 'block'; 
 }
}
