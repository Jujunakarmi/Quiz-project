//Questions

var questions = [
    {
        titles: "What guitar does David Gilmour famously use?",
        choices: ["Fender", "Gibson", "Martin", "Dean"],
        answers: "Fender"
    },

    {
        titles: "Who is the vocalist if band Nirvana?",
        choices: ["Kurt Cobain", "Dave Grohl", "Alice Cooper", "Axl Roses"],
        answers: "Kurt Cobain"

    },

    {
        titles: "Who is the vocalist of band Alice In Chains?",
        choices: ["Layne Staley", "Jim Morrision", "Jeff Buck", "Slash"],
        answers: "Layne Staley"

    },
    {
        titles: "Which guitar does Slash uses most?",
        choices: ["Les Paul", "Telecaster", "Stratocaster", "king V"],
        answers: "Les Paul"

    },

    {
        titles: "Who sang Roadhouse Blues?",
        choices: ["Johnny Deep", "John Lennon", "Jim Morrision", "Johnny Cash"],
        answers: "Jim Morrision"

    }
]


// Variable Declaration
var score = 0;
var questionIndex = 0;

//Queryselectors and Element ids
var currentTime = document.getElementById("currentTime")
var timer = document.getElementById("startTime")
var questionDiv = document.getElementById("questionDiv")
var wrapper = document.getElementById("wrapper")

var timeLeft = 5;
var intervalTime = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");


timer.addEventListener("click", function () {
    if (intervalTime === 0) {
        intervalTime = setInterval(function () {
            timeLeft--;
            currentTime.textContent = "Time remaining: " + timeLeft;

            if (timeLeft <= 0) {
                clearInterval(intervalTime)
                currentTime.textContent = "Time's up.!! "
            }
        }, 1000)
    }
    render(questionIndex)
});


//functions for question and answers

function render(questionIndex) {
    questionDiv.innerHTML = "";
    ulCreate.innerHTML = ""

    //Loop for question and answers
    for (var i = 0; i < questions.length; i++) {
        var userQue = questions[questionIndex].titles;
        var userChoice = question[questionIndex].choices;
        questionDiv.textContent = userQue;
    }


    userChoice.forEach(function (newItem) {

        var listItem = document.createElement("li")
        listItem.textContent = newItem;
        questionDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem)

        listItem.addEventListener("click"())

    })
}

//Compare function

function compare(){
    
}