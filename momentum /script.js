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
        document.body.style.backgroundImage = "url('./bgimg/morning.jpg')"
        greeting.textContent = "Good Morning"
    } else if(hour < 18){
        //noon
        document.body.style.backgroundImage = "url('./bgimg/noon2.jpg')"
        greeting.textContent = "Good Afternoon"
    } else {
        //Evening
        document.body.style.backgroundImage = "url('./bgimg/evening.jpg')"
        greeting.textContent = "Good Evening"
    }
}



//Run the functions
showTime()
setBackGround()