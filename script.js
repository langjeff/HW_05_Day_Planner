//GUT CURRENT DATE FROM MOMENT
var today = moment();
console.log(today.format()); //console.log to test return

//FUNCTION TO DISPLAY DATE IN HEADER 
var dateEl = document.querySelector('#currentDay');
dateEl.textContent = today.format('dddd, MMMM Do YYYY');
console.log(today.format('dddd, MMMM Do YYYY')); // console.log to test return

