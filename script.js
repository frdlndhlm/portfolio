const div = document.querySelector(".text");
const p = document.querySelector(".svgText");
const text = "Hello! Welcome to my Portfolio.";
const cvText = "This is the CV.";
const aboutText = "This is the about page.";
const contactText = "Please feel free to contact me!";
const svgText = "Click the little purple guy to go to my art portfolio.";

let viewed = false;

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 50);
}

textTypingEffect(div, text);

function cvTab() {
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, cvText);
}

function aboutTab() {
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, aboutText);
}

function contactTab() {
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, contactText);
}

function clickMe() {
    if (viewed === false) {
        document.querySelector(".svgText").innerHTML;
        textTypingEffect(p, svgText);
        viewed = true;
    }
    setTimeout(() => {
        const svgText = document.querySelector(".svgText");
        svgText.textContent = "";
        viewed = false;
    }, 5000);
}

