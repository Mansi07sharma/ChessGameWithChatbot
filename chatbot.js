document.querySelector(".botai").addEventListener("click", function () {
    document.querySelector(".chatbot").classList.remove("hidden");
    document.querySelector(".cross").classList.remove("hidden");
    document.querySelector(".chatbot").classList.add("flex");
    document.querySelector(".botai").classList.toggle("hidden");
});

document.querySelector(".sendButton").addEventListener("click", function () {
    var message = document.querySelector(".inputBox").value;
    if (message === "") return;
    let childs = document.querySelector(".autoMsg").childNodes;
    childs.forEach(c => {
        if (c.className === "msg") {
            c.remove();
        }
    });
    sendMessage(message);
});

const responses = {
    "how to play": "Chess is played between two players. The goal is to checkmate your opponent's king.",
    "how pawn moves": "Pawns move forward one square, but capture diagonally. On their first move, they can move two squares forward.",
    "how rook moves": "Rooks move in straight lines, either horizontally or vertically.",
    "how bishop moves": "Bishops move diagonally any number of squares.",
    "how knight moves": "Knights move in an L-shape: two squares in one direction and then one perpendicular.",
    "how queen moves": "The queen moves like both a rook and a bishop, in any direction.",
    "how king moves": "The king moves one square in any direction.",
    "what is checkmate": "Checkmate happens when the king is in a position to be captured and cannot escape.",
    "what is castling": "Castling is a special move involving the king and a rook to improve safety.",
    "what is en passant": "En passant is a special pawn capture that occurs under specific conditions.",
    "default": "I didn't understand that. Try asking about chess moves, rules, or strategies!"
};

function sendMessage(message) {
    var userChar = document.createElement("span");
    userChar.className = "usermsg";
    userChar.innerHTML = "You: " + message;
    document.querySelector(".autoMsg").appendChild(userChar);
    document.querySelector(".inputBox").value = "";
    scrollToBottom();
    setTimeout(() => receiveMessage(message), 1000);
}

function receiveMessage(message) {
    var botChar = document.createElement("span");
    botChar.className = "botmsg";
    var reply = responses[message.toLowerCase()] || responses["default"];
    botChar.innerHTML = "Bot: " + reply;
    document.querySelector(".autoMsg").appendChild(botChar);
    scrollToBottom();
}

function scrollToBottom() {
    const chatContainer = document.querySelector(".autoMsg");
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

document.querySelector(".inputBox").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        document.querySelector(".sendButton").click();
    }
});

document.querySelectorAll(".msg").forEach(msg => {
    msg.addEventListener("click", function () {
        let childs = document.querySelector(".autoMsg").childNodes;
        childs.forEach(c => {
            if (c.className === "msg") {
                c.remove();
            }
        });
        sendMessage(msg.innerHTML);
    });
});

document.querySelector(".cross").addEventListener("click", function () {
    document.querySelector(".chatbot").classList.add("hidden");
    document.querySelector(".cross").classList.add("hidden");
    document.querySelector(".chatbot").classList.remove("flex");
    document.querySelector(".botai").classList.remove("hidden");
});
