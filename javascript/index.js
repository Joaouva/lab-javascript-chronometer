const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');


const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');

function printTime() {
  let minutes = printMinutes ();
  let seconds = printSeconds ();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();
  let minutesString = chronometer.twoDigitsNumber(minutes)
  minDec.innerHTML = minutesString[0];
  minUni.innerHTML = minutesString[1];
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  let secondsString = chronometer.twoDigitsNumber(seconds)
  secDec.innerHTML = secondsString[0];
  secUni.innerHTML = secondsString[1];
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  chronometer.stopClick();
}

function setSplitBtn() {
  btnRight.addEventListener('click', () => {
  let button = document.getElementsByClassName ('btn split');
  let itemList = document.getElementById('splits');
  let itemNumber = 1;
  
  button.onclick = () => {
    let newListItem = document.createElement('li');
    newListItem.innerHTML = `${itemNumber} splits `;
    itemList.appendChild(newListItem);
    console.log ('clicking the button');
    itemNumber ++
  } 
})
};

function setStartBtn() {
  chronometer.startClick(printTime);
}

function setResetBtn() {
  minDec.innerHTML = '0';
  minUni.innerHTML = '0';
  secDec.innerHTML = '0';
  secUni.innerHTML = '0';
  chronometer.resetClick(printTime);

}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
 if (btnLeft.className === 'btn start') {
   btnLeft.innerHTML = 'Stop';
   btnLeft.setAttribute ('class', 'btn stop')
   setStartBtn();
 } else {
   btnLeft.innerHTML = 'Start';
   btnLeft.setAttribute ('class', 'btn start')
   setStopBtn();
 }
})
 
// Reset/Split Button
btnRight.addEventListener('click', () => {
  if (btnRight.className === 'btn reset') {
    btnRight.innerHTML = 'Split';
    btnRight.setAttribute ('class', 'btn split')
    setResetBtn();
  } else {
    btnRight.innerHTML = 'Reset';
    btnRight.setAttribute ('class', 'btn reset')
    
  }
});
