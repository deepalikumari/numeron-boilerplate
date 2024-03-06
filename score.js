// Iteration 5: Store the player score and display it on the game over screen
var scoreBox = document.getElementById("score-board")

let play_again_button = document.getElementById("play-again-button")
play_again_button.addEventListener("click" ,() => {
     window.location.href="game.html"
})

scoreBox.innerText=localStorage.getItem("score")