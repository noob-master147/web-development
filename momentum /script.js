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
function addZero(n) {
    return(n < 10 ? '0' : '') + n;
}

// Function to set bgimg according to time

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
        document.body.style.backgroundImage = "url('./bgimg/noon.jpg')"
        document.body.style.color = "#ffffff"
        greeting.textContent = "Good Afternoon"
    } else {
        //Evening
        document.body.style.backgroundSize = "cover"
        document.body.style.backgroundImage = "url('./bgimg/evening.jpg')"
        greeting.textContent = "Good Evening"
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

//Get Focus from the locl storage
let getFocus = function()
{
  if(localStorage.getItem('focus') === null) {
      focus.textContent = '[Enter your focus]'
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}


//Run the functions
showTime()
setBackGround()
getName()
getFocus()
