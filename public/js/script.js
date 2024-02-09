const div = document.querySelector(".text");
const txt = document.querySelector(".text2");
const txt2 = document.querySelector(".text3");
const p = document.querySelector(".svgText");
//const form = document.getElementById("dynamicForm");
const inputEl = document.getElementById("inputText");
const outputEl = document.getElementById("console");
const text = "Welcome to my Portfolio!";
const cvHeader = "CV";
const cvText =
    "-CodePoint (2023-2024) Frontend Web Development for Ecommerce-project";
const cvText2 =
    "-Flatfish Games (2023-2024) Technical Animator, Unity Scripting, Rigging in Blender";
const aboutHeader = "About me:";
const aboutText =
    "I am an 32 year old animator/ frontend developer situated in Turku, Finland. I graduated from Turku Arts Academy in 2017 with a Bachelor in Animation. I have since enjoyed a colourful career spanning from being a freelance comic artist to working abroad at a animation studio.";
const aboutText2 =
    "I am always looking for way to improve and evolve my skillset and have recently delved into the world of programming, my most recent endeavor being getting proficient in Web development. Outside of work my interests include ornithology, tailoring my own clothes and learning the piano.";
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
    textTypingEffect(div, cvHeader);
    document.querySelector(".text2").innerHTML;
    textTypingEffect(txt, cvText);
    setTimeout(() => {
        document.querySelector(".text3").innerHTML;
        textTypingEffect(txt2, cvText2);
    }, 800);
}

function aboutTab() {
    clearBox();
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, aboutHeader);
    document.querySelector(".text2").innerHTML;
    textTypingEffect(txt, aboutText);
    setTimeout(() => {
        document.querySelector(".text3").innerHTML;
        textTypingEffect(txt2, aboutText2);
    }, 1700);

    //let aboutText2 = document.createElement("p");
    //let aboutContainer = document.querySelector(".text").innerHTML;
    //aboutContainer.appendChild(aboutText2);
}

function contactTab() {
    clearBox();
    document.querySelector(".text").innerHTML;
    textTypingEffect(div, contactText);

    setTimeout(() => {
        contactMe();
    }, 500);
}

function clearBox() {
    document.getElementById("dynamicForm").innerHTML = "";
    document.querySelector(".text").innerHTML = "";
    document.querySelector(".text2").innerHTML = "";
    document.querySelector(".text3").innerHTML = "";
    document.querySelector(".svgText").innerHTML = "";
}

function contactMe() {
    if (divOn === true) {
        //clearBox(dynamicForm);
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
    let subjectText = document.createTextNode("Subject");
    let subjectInput = document.createElement("input");
    subjectInput.setAttribute("type", "text");
    subjectInput.setAttribute("id", "subject");
    let messageText = document.createTextNode("Message");
    let messageInput = document.createElement("textarea");
    messageInput.setAttribute("id", "message");
    mailInput.setAttribute("rows", "10");
    let submitButton = document.createElement("input");
    submitButton.setAttribute("class", "submit");
    submitButton.setAttribute("type", "submit");
    submitButton.setAttribute("value", "Send Message");
    submitButton.setAttribute(
        "style",
        "width:30px;border-radius:10px;font-family:monospace;font-weight:bold;font-size:7px;background-color:lightsalmon;border:none;"
    );
    let buttonText = document.createTextNode("send");
    divElement.appendChild(nameText);
    divElement.appendChild(nameInput);
    divElement.appendChild(mailText);
    divElement.appendChild(mailInput);
    divElement.appendChild(subjectText);
    divElement.appendChild(subjectInput);
    divElement.appendChild(messageText);
    divElement.appendChild(messageInput);
    divElement.appendChild(submitButton);
    submitButton.appendChild(buttonText);
    let containerDiv = document.getElementById("dynamicForm");
    containerDiv.appendChild(divElement);
    //divOn = true;
}

function sendForm() {
    console.log("sendForm");
    const contactForm = document.getElementById("dynamicform");
    let fullname = document.getElementById("name");
    let email = document.getElementById("email");
    let subject = document.getElementById("subject");
    let message = document.getElementById("message");

    //contactForm.addEventListener("submit", (e) => {
    //    e.preventDefault();

    let formData = {
        fullname: fullname.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    };

    let xhr = new XMLHttpRequest();
    xhr.open("POST", "/");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.onload = function () {
        console.log(xhr.responseText);
        if (xhr.responseText == "success") {
            alert("Email sent!");
            fullname.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
        } else {
            alert("Something went wrong?");
        }
    };

    xhr.send(JSON.stringify(formData));
    // });

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

inputEl.addEventListener("input", function (evt) {
    outputEl.innerHTML = inputEl.value;
});

inputEl.addEventListener("keyup", function (evt) {
    if (evt.code === "Enter") location.reload();
});
