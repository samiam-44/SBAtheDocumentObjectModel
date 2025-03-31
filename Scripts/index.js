// cache elements
const submitBtn = document.getElementById('submit-btn');
const birthdateInput = document.getElementById('birthdate');
const resultElement = document.getElementById('result');
const lifePathInfo = document.querySelector('#lifePathInfo');
const instructions = document.querySelector('#instructions');

//Event listener for info submition
submitBtn.addEventListener('click', function(event) {
    event.preventDefault(); //prevents page reload
    const birthdate = birthdateInput.value

    if (!birthdate) {
        alert('Please enter a valid date')
        return;
    }
})
