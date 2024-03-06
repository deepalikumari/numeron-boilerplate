//Variables
let num1 = document.getElementById("number1")
let num2 = document.getElementById("number2")
let number1;
let number2;





// Iteration 2: Generate 2 random number and display it on the screen
function randomNumbers() {
    return Math.floor(Math.random() * 100) + 1
}

function displayRandomNumbers() {
    number1 = randomNumbers()
    number2 = randomNumbers()

    num1.innerText = number1
    num2.innerText = number2
}

displayRandomNumbers()






// Iteration 3: Make the options button functional and Compare numbers
var buttons = document.getElementById("buttons")
let score = 0
buttons.addEventListener("click", (e) => {

    compareNumbers(e.target.id)
})

function compareNumbers(operation_id) {

    if (operation_id == "greater-than" && number1 > number2 || operation_id == "equal-to" && number1 == number2 || operation_id == "lesser-than" && number1 < number2) {
        time = 5
        score++
        displayRandomNumbers()
    }
    else {
        gameover()
    }
}








// Iteration 4: Build a timer for the game
var timer = document.getElementById("timer")
let time = 5

function stopWatch() {
    if (time<=0) {
        gameover();
    }
    timer.innerText = time
    time--
}

setInterval(stopWatch, 1000)







//Gameover Function
    function gameover() {
        localStorage.setItem("score", score)
        location.href = "gameover.html"
    }