//Questions

var questions = [
    {
        titles: "What guitar does David Gilmour famously use?",
        choices: ["Fender", "Gibson", "Martin", "Dean"],
        answer: "Fender"
    },

    {
        titles: "Who is the vocalist if band Nirvana?",
        choices: ["Kurt Cobain", "Dave Grohl", "Alice Cooper", "Axl Roses"],
        answer: "Kurt Cobain"

    },

    {
        titles: "Who is the vocalist of band Alice In Chains?",
        choices: ["Layne Staley", "Jim Morrision", "Jeff Buck", "Slash"],
        answer: "Layne Staley"

    },
    {
        titles: "Which guitar does Slash uses most?",
        choices: ["Les Paul", "Telecaster", "Stratocaster", "king V"],
        answer: "Les Paul"

    },

    {
        titles: "Who sang Roadhouse Blues?",
        choices: ["Johnny Deep", "John Lennon", "Jim Morrision", "Johnny Cash"],
        answer: "Jim Morrision"

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

var timeLeft = 100;
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
                allDone()
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
        var userChoice = questions[questionIndex].choices;
        questionDiv.textContent = userQue;
    }


    userChoice.forEach(function (newItem) {

        var listItem = document.createElement("li")
        listItem.textContent = newItem;
        questionDiv.appendChild(ulCreate);
        ulCreate.appendChild(listItem)

        listItem.addEventListener("click",(compare))

    })
}

//Compare function

function compare(event){
    var element=event.target;

    event.stopPropagation

if (element.matches("li")){

   var newDiv= document.createElement("div")
   newDiv.setAttribute("id","newDiv")
// if correct statement
   if(element.textContent == questions[questionIndex].answer) {
    score++;
    newDiv.textContent="Correct! The answer is "+ questions[questionIndex].answer 
   }else{
//if incorrect answer
timeLeft= timeLeft-penalty;
newDiv.textContent="Wrong! the correct answer is "+ questions[questionIndex].answer
   }
}

questionIndex++;

if(questionIndex>= questions.length){
    allDone()
    newDiv.textContent="End of quiz. Congratulations!! You got "+ score+"/"+ questions.length+".";
}else{
    render(questionIndex);
}
questionDiv.appendChild(newDiv)
}

//done function

function allDone(){
    questionDiv.innerHTML="";
    currentTime.innerHTML="";
    
    //Heading for end

    var createH1=document.createElement("h1")
    createH1.setAttribute("id", "createh1")
    createH1.textContent="All Done!"

    questionDiv.appendChild(createH1)
    
    //Paragraph for end
    var createP=document.createElement("p")
    createP.setAttribute("id","createP")
    questionDiv.appendChild(createP)

    if (timeLeft >= 0){
        var timeRemain=timeLeft;
        var createP2 = document.createElement("p")
        clearInterval(intervalTime)
        createP2.textContent="Your score is: "+ timeRemain;

        questionDiv.appendChild(createP2)
    }

    //create label for saving name

    var newLabel=document.createElement("label")
    newLabel.setAttribute("id","newLabel")
    newLabel.textContent="Enter you name: "

    questionDiv.appendChild(newLabel)

    //Type text

    var typeText=document.createElement("input")
    typeText.setAttribute("type","text")
    typeText.setAttribute("id", "text1")
    typeText.setAttribute("placeholder","Your Name Here")

    questionDiv.appendChild(typeText)

    //Submit button

    var submit=document.createElement("button")
    submit.setAttribute("id","submit-btn")
    submit.setAttribute("type","submit")
    submit.textContent= "Submit"

    questionDiv.append(submit)



}