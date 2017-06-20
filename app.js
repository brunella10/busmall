'use stric';
var randomImage = [];
var clickPerImage = [];
function userClicks(image, numClick){

}

var container = document.getElementById('stooges');
container.addEventListener('click', handleClick);

var larryClicks = 0;
var curlyClicks = 0;
var moeClicks = 0;
var iggyClicks = 0;

function handleClick(event) {
  console.log(event.target);
  //to track the number of click
  if (event.target.id === 'stooges') {
    alert('You had just one job Click in the h2 but not the sections');
  }
  var larry = document.getElementById('larry');
  var curly = document.getElementById('curly');
  var moe = document.getElementById('moe');
  var iggy = document.getElementById('iggy');

  if (event.id.target.id === 'larry') {
    larryClicks += 1;
    larry.textContent = 'larry have been clicked' + larryClicks + 'times';
  }
  if (event.id.target.id === 'larry') {
    curlyClicks += 1;
    console.log('larry have been clicked' + curlyClicks + 'times');
  }
  if (event.id.target.id === 'larry') {
    moeClicks += 1;
    console.log('larry have been clicked' + moeClicks + 'times');
  }
  if (event.id.target.id === 'larry') {
    iggyClicks += 1;
    console.log('larry have been clicked' + iggyClicks + 'times');
  }
}
