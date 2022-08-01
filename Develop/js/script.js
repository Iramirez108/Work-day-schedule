// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

//Using Moment.js to show the time 

var dayofWeek = moment().format("dddd,MMMM Do YYYY")
    $("#currentDay").text(dayofWeek);
    savedText();
    changeColor();

var saveButton = document.getElementById("save");

var dailyTask2 = document.getElementById("text2")
var dailyTask3 = document.getElementById("text3")
var dailyTask4 = document.getElementById("text4")
var dailyTask5 = document.getElementById("text5")
var dailyTask6 = document.getElementById("text6")
var dailyTask7 = document.getElementById("text7")
var dailyTask8 = document.getElementById("text8")
var dailyTask9 = document.getElementById("text9")


function saveTask(){
    var dailyTask1 = document.getElementById("text1").value
    const task = {
        task:task,
    }
    window.localStorage.setItem(key,JSON.stringify(task));
}




function saveToLocal(obj) {
    var text = obj.value;
    var id = obj.id;
    localStorage.setItem(id, text);
  }

function savedText(){
    var savedKey = object.keys(localStorage);
    console.log(savedKey);
    for(let i = 0; i < savedKey.lenght; i++){
        if(document.getElementById(savedKey[i]) !=null){
            document.getElementById(savedKey[i]).textContent = localStorage.getItem(savedKey[i]);
        }
    }
}

function changeColor(){
    var currentTime = moment().format("H");
    for (var i = 1; i < 10; i++) {
        var index = i.toString();

        var div1 = document.getElementById("t".concat(index));
        var div2 = document.getElementById("text".concat(index));

        if(Number.parseInt(div1.getAttribute("value")) < Number.parseInt(currentTime)
        ) {
            div2.style.backgroundColor = "gray";
        } else if (
            Number.parseInt(div1.getAttribute("value")) > Number.parseInt(currentTime)
        ) {
        div1.style.backgroundColor = "red";
        }else{
        div2.style.backgroundColor = "green";
        }
    }
}