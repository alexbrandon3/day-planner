// Sets current date in header
$("#currentDay").text( moment().format('dddd, MMMM Do' ));

// Sets the left column's text values to their respective time slot
var hour8 = $("#hour8");
hour8.text('8AM');
var hour9 = $("#hour9");
hour9.text('9AM');
var hour10 = $("#hour10");
hour10.text('10AM');
var hour11 = $("#hour11");
hour11.text('11AM');
var hour12 = $("#hour12");
hour12.text('12PM');
var hour1 = $("#hour1");
hour1.text('1PM');
var hour2 = $("#hour2");
hour2.text('2PM');
var hour3 = $("#hour3");
hour3.text('3PM');
var hour4 = $("#hour4");
hour4.text('4PM');
var hour5 = $("#hour5");
hour5.text('5PM');

// Assigns the middle column to variables
var slot1 = document.querySelector('#first');
var slot2 = document.querySelector('#second');
var slot3 = document.querySelector('#third');
var slot4 = document.querySelector('#fourth');
var slot5 = document.querySelector('#fifth');
var slot6 = document.querySelector('#sixth');
var slot7 = document.querySelector('#seventh');
var slot8 = document.querySelector('#eighth');
var slot9 = document.querySelector('#ninth');
var slot10 = document.querySelector('#tenth');

// Assigns user input fields to variables
var input1 = document.querySelector('#input1');
var input2 = document.querySelector('#input2');
var input3 = document.querySelector('#input3');
var input4 = document.querySelector('#input4');
var input5 = document.querySelector('#input5');
var input6 = document.querySelector('#input6');
var input7 = document.querySelector('#input7');
var input8 = document.querySelector('#input8');
var input9 = document.querySelector('#input9');
var input10 = document.querySelector('#input10');

// Assigns the buttons of the third column to variables
var btn1 = document.querySelector('#btn1');
var btn2 = document.querySelector('#btn2');
var btn3 = document.querySelector('#btn3');
var btn4 = document.querySelector('#btn4');
var btn5 = document.querySelector('#btn5');
var btn6 = document.querySelector('#btn6');
var btn7 = document.querySelector('#btn7');
var btn8 = document.querySelector('#btn8');
var btn9 = document.querySelector('#btn9');
var btn10 = document.querySelector('#btn10');

// Creates a variable to hold the current hour's value
var a = new Date();
var currentHour = a.getHours();

// This array creates each individual row as its own object
var rows = [
    { time: 8, bg: slot1, input: input1, btn: btn1},
    { time: 9, bg: slot2, input: input2, btn: btn2},
    { time: 10, bg: slot3, input: input3, btn: btn3},
    { time: 11, bg: slot4, input: input4, btn: btn4},
    { time: 12, bg: slot5, input: input5, btn: btn5},
    { time: 13, bg: slot6, input: input6, btn: btn6},
    { time: 14, bg: slot7, input: input7, btn: btn7},
    { time: 15, bg: slot8, input: input8, btn: btn8},
    { time: 16, bg: slot9, input: input9, btn: btn9},
    { time: 17, bg: slot10, input: input10, btn: btn10},
];

// This function styles the middle column to coincide with the current hour
function assignBackground(){
    for(var i = 0; i < rows.length; i++){
        if(rows[i].time < currentHour){
            rows[i].bg.setAttribute('class', 'past');
            rows[i].input.setAttribute('class', 'past-input');
        }
        else if(rows[i].time == currentHour){
            rows[i].bg.setAttribute('class', 'present');
            rows[i].input.setAttribute('class', 'present-input');
        }
        else{
            rows[i].bg.setAttribute('class', 'future');
            rows[i].input.setAttribute('class', 'future-input');
        }
    }
}
assignBackground();


btn1.addEventListener("click", function(){
    var input = document.getElementById("input1");
    localStorage.setItem("input", JSON.stringify(input));
    // window.location.replace("index.html");
    // var storedInputVal = JSON.parse(localStorage.getItem("input"));
    input1.textContent = JSON.parse(localStorage.getItem("input"));
    console.log(input);
  
});
