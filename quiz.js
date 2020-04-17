var mathq = [
    {
        "number": "1",
        "question": "1 + 1 =",
        "answer": "2"
    },
    {
        "number": "2",
        "question": "5 - 4 =",
        "answer": "1"
    },
    {
        "number": "3",
        "question": "3 * 2 =",
        "answer": "6"
    }

]

var scienceq = [
    {
        "number": "1",
        "question": "1st element of periodic table?",
        "answer": "Hydrogen"
    },
    {
        "number": "2",
        "question": "Is the sun a star?",
        "answer": "Yes"
    },
    {
        "number": "3",
        "question": "What planet are we on?",
        "answer": "Earth"
    }

]

var math = document.getElementById("math");
var science = document.getElementById("science");

var mq1 = document.getElementById("mq1");
var mq2 = document.getElementById("mq2");
var mq3 = document.getElementById("mq3");

var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq3 = document.getElementById("sq3");

var mathbox = document.getElementById("mathbox1");
var mathbox2 = document.getElementById("mathbox2");
var mathbox3 = document.getElementById("mathbox3");

var scibox = document.getElementById("scibox1");
var scibox2 = document.getElementById("scibox2");
var scibox3 = document.getElementById("scibox3");

var form = document.getElementById("quiz");
var button = document.getElementById("submit");

var question1 = Math.floor(Math.random() * 3);
var question2 = question2num();
var question3 = question3num();

var mfeedback = document.getElementById("feedback");
var mfeedback2 = document.getElementById("feedback2");
var mfeedback3 = document.getElementById("feedback3");

var sfeedback = document.getElementById("sfeedback");
var sfeedback2 = document.getElementById("sfeedback2");
var sfeedback3 = document.getElementById("sfeedback3");

var subject;

function question2num() {
    var num = Math.floor(Math.random() * 3);
    return (num == question1) ? question2num() : num;
}

function question3num() {
    var num = Math.floor(Math.random() * 3);
    return (num == question1 || num == question2) ? question3num() : num;
}

function mathrandom() {
    subject = "math";
    mq1.innerText = mathq[question1]["question"];
    mq2.innerText = mathq[question2]["question"];
    mq3.innerText = mathq[question3]["question"];

    button.classList.remove("hide");
    mathbox.classList.remove("hide");
    mathbox2.classList.remove("hide");
    mathbox3.classList.remove("hide");
    math.classList.add("hide");
    science.classList.add("hide");

    
}

function sciencerandom() {
    subject = "science";
    sq1.innerText = scienceq[question1]["question"];
    sq2.innerText = scienceq[question2]["question"];
    sq3.innerText = scienceq[question3]["question"];

    button.classList.remove("hide");
    scibox.classList.remove("hide");
    scibox2.classList.remove("hide");
    scibox3.classList.remove("hide");
    math.classList.add("hide");
    science.classList.add("hide");
}


function checkans(e) {
    e.preventDefault();
    if(subject == "math") {
        if (mathq[question1].answer == mathbox.value) {
            mfeedback.innerText = "Correct";
        } else {
            mfeedback.innerText = "Incorrect";
        }

        if (mathq[question2].answer == mathbox2.value) {
            mfeedback2.innerText = "Correct";
        } else {
            mfeedback2.innerText = "Incorrect";
        }

        if (mathq[question3].answer == mathbox3.value) {
            mfeedback3.innerText = "Correct";
        } else {
            mfeedback3.innerText = "Incorrect";
        }
    }

    if(subject == "science") {
        if (scienceq[question1].answer == scibox.value) {
            sfeedback.innerText = "Correct";
        } else {
            sfeedback.innerText = "Incorrect";
        }

        if (scienceq[question2].answer == scibox2.value) {
            sfeedback2.innerText = "Correct";
        } else {
            sfeedback2.innerText = "Incorrect";
        }

        if (scienceq[question3].answer == scibox3.value) {
            sfeedback3.innerText = "Correct";
        } else {
            sfeedback3.innerText = "Incorrect";
        }
    }
}

function init() {
    button.classList.add("hide");
    form.addEventListener("submit", checkans, false);
}

document.addEventListener("DOMContentLoaded", init, false);