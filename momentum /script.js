//Selecting DOM elements
const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const name = document.getElementById('name');
const focus = document.getElementById('focus');

// Function to show time
let showTime = function()
{
  let today = new Date();
  let hour = today.getHours();
  let min = today.getMinutes();
  let sec = today.getSeconds();

  //Set AM or PM
  const ampm = hour >= 12 ? 'PM' : 'AM';

  //12 Hour Format
  hour = hour % 12 || 12;

  //output the time
  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)} ${ampm}`;
  setTimeout(showTime, 1000);
}

//Add zeroes
function  addZero(n) {
    return(n < 10 ? '0' : '') + n;
}

// Function to set bgimg according respect to time
let setBackGround = function()
{
    let today = new Date();
    let hour = today.getHours();

    if(hour < 12){
        //Morning
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundImage = "url('./bgimg/morning.jpg')"
        greeting.textContent = "Good Morning"
    } else if(hour < 18){
        //noon
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundImage = "url('./bgimg/evening.jpg')"
        document.body.style.color = "#ffffff"
        greeting.textContent = "Good Afternoon"
    } else {
        //Evening
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundImage = "url('./bgimg/evening2.jpg')"
        greeting.textContent = "Good Evening"
    }
}

//Set name
let setName = function(e)
{
  if(e.type === 'keypress') {
    //check for enter key
    if(e.keyCode == 13 || e.which == 13){
        localStorage.setItem('name', e.target.innerText)
        name.blur();
    }

  } else {
    localStorage.setItem('name', e.target.innerText)
    }
}

//Get name from the locl storage
let getName = function()
{
  if(localStorage.getItem('name') === null) {
      name.textContent = '[Enter your Name]'
  } else {
      name.textContent = localStorage.getItem('name');
  }
}

//Set focus
let setFocus = function(e)
{
    if(e.type === 'keypress') {
    //check for enter key
    if(e.keyCode == 13 || e.which == 13){
        localStorage.setItem('focus', e.target.innerText)
        focus.blur();
    }

  } else {
    localStorage.setItem('focus', e.target.innerText)
    }
}


//Get Focus from the locl storage
let getFocus = function()
{
  if(localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter your focus]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

let resetValueName = function()
{
    document.getElementById('name').innerText = ""
}

let resetValueFocus = function()
{
    document.getElementById('focus').innerText = ""
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', resetValueName)

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', resetValueFocus)

//Run the functions
showTime()
setBackGround()
getName()
getFocus()
