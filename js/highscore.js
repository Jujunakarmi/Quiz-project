var goBack = document.querySelector(".goBack")
var storedName = document.getElementById("storedName")
var storedScore = document.getElementById("storedScore")


var displayScore = localStorage.getItem("displayScore")

if (displayScore === null) {
    displayScore = [];
} else {
    displayScore = JSON.parse(displayScore)
}


var ol = document.createElement("ol")

console.group(displayScore)
for (let i = 0; i < displayScore.length; i++) {

    var li = document.createElement("li")
    li.setAttribute("id","scoreLi")

    li.textContent = "Name: " + displayScore[i].name+"," + " Score: " + displayScore[i].score

    ol.appendChild(li)

}
document.querySelector(".lastScore").appendChild(ol)



var clearHigh = document.querySelector(".clearHigh")


goBack.addEventListener("click", function () {

    location.replace("./index.html")

console.log("hello")

})

clearHigh.addEventListener("click", function () {
    localStorage.removeItem("displayScore")
    document.querySelector(".lastScore").innerHTML = ""
})
