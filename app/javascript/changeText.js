console.log("Hello from changeText")
var messages = ["Web developer", "UX/UI Designer", "Team player", "Fullstack developer"];
const text = document.querySelector('#banner__animated-text');

function changeText() {
    var newMessage = messages.shift();
    messages.push(newMessage);
    text.innerHTML = newMessage
}

function delay(functionParameter) {
    setInterval(functionParameter, 5000)
}
text.addEventListener('animationiteration', delay(changeText));