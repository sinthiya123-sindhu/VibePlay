// Change between app pages
function showPage(pageId) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    document.getElementById(pageId).classList.add("active");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// Like a reel
function likeReel(button) {
    const count = button.querySelector("span");

    let likes = Number(count.textContent);

    likes++;

    count.textContent = likes;
}


// Send chat message
function sendMessage() {
    const input = document.getElementById("messageInput");
    const chatBox = document.querySelector(".chat-box");

    const message = input.value.trim();

    if (message === "") {
        return;
    }

    const newMessage = document.createElement("div");

    newMessage.className = "message sent";

    newMessage.textContent = message;

    chatBox.appendChild(newMessage);

    input.value = "";

    chatBox.scrollTop = chatBox.scrollHeight;
}


// Rock Paper Scissors game
function playGame(playerChoice) {

    const choices = ["Rock", "Paper", "Scissors"];

    const computerChoice =
        choices[Math.floor(Math.random() * choices.length)];

    let result = "";

    if (playerChoice === computerChoice) {
        result = "Draw! 😄";
    }
    else if (
        (playerChoice === "Rock" && computerChoice === "Scissors") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissors" && computerChoice === "Paper")
    ) {
        result = "You Win! 🎉";
    }
    else {
        result = "Computer Wins! 🤖";
    }

    document.getElementById("gameResult").textContent =
        "You: " + playerChoice +
        " | Computer: " + computerChoice +
        " → " + result;
}


// Quiz
function quiz(answer) {

    const result = document.getElementById("quizResult");

    if (answer === "HTML") {
        result.textContent = "Correct! 🎉";
    }
    else {
        result.textContent = "Try again! 😊";
    }
      }
