const div = document.querySelector(".text");
const p = document.querySelector(".svgText");
//const form = document.getElementById("dynamicForm");
const text = "Welcome to my Portfolio!";
const cvHeader = 'CV';
const cvText = "-CodePoint (2023-2024)";
const aboutHeader = 'About me:'
const aboutText = "I am an 32 year old animator/ frontend developer situated in Turku";
const contactText = "Please feel free to contact me!";
const svgText = "Click the little purple guy to go to my art portfolio.";

let viewed = false;
let divOn = false;

function textTypingEffect(element, text, i = 0) {
    if (i === 0) {
        element.textContent = "";
    }
    element.textContent += text[i];

    if (i === text.length - 1) {
        return;
    }

    setTimeout(() => textTypingEffect(element, text, i + 1), 5);
}

textTypingEffect(div, text);

function cvTab() {
    clearBox();
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, cvHeader + cvText);
    
}

function aboutTab() {
    clearBox();
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, aboutHeader + aboutText);
   

    //let aboutText2 = document.createElement("p");
    //let aboutContainer = document.querySelector(".text").innerHTML;
    //aboutContainer.appendChild(aboutText2);
}

function contactTab() {
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, contactText);

    setTimeout(() => {
        contactForm();
    }, 500);
}

function clearBox() {
    document.getElementById("dynamicForm").innerHTML = "";
}

function contactForm() {
    if (divOn === true) {
        clearBox(dynamicForm);
        //return;
    }

    let divElement = document.createElement("div");
    let nameText = document.createTextNode("Name");
    let nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("id", "name");
    let mailText = document.createTextNode("Email");
    let mailInput = document.createElement("input");
    mailInput.setAttribute("type", "email");
    mailInput.setAttribute("id", "email");
    let messageText = document.createTextNode("Message");
    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    mailInput.setAttribute("rows", "10");
    let submitButton = document.createElement("button");
    submitButton.setAttribute("className", "submitButton");
    submitButton.setAttribute(
        "style",
        "width:30px;border-radius:10px;font-family:monospace;font-weight:bold;font-size:7px;background-color:lightsalmon;border:none;"
    );
    let buttonText = document.createTextNode("send");
    divElement.appendChild(nameText);
    divElement.appendChild(nameInput);
    divElement.appendChild(mailText);
    divElement.appendChild(mailInput);
    divElement.appendChild(messageText);
    divElement.appendChild(messageInput);
    divElement.appendChild(submitButton);
    submitButton.appendChild(buttonText);
    let containerDiv = document.getElementById("dynamicForm");
    containerDiv.appendChild(divElement);
    divOn = true;
}

function sendForm() {
    alert("Form was sent.");
    alert(
        "From: " +
            document.getElementById("name").value +
            " Email: " +
            document.getElementById("email").value +
            " Message: " +
            document.getElementById("message").value
    );
}

function clickMe() {
    if (viewed === false) {
        document.querySelector(".svgText").innerHTML;
        textTypingEffect(p, svgText);
        viewed = true;

        setTimeout(() => {
            const svgText = document.querySelector(".svgText");
            svgText.textContent = "";
        }, 2000);
    }
}
