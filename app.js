'use stric';
// var randomImage = [nameOfTheImages];
// var clickPerImage = [];
// function userClicks(image, numClick){
//
// }

var container = document.getElementById('randomImage');
container.addEventListener('click', handleClick);

var oneClicks = 0;
var twoClicks = 0;
var threeClicks = 0;

function handleClick(event) {
  console.log(event.target);
  //to track the number of click
  if (event.target.id === 'randomImage') {
    alert('You had just one job Click in the h2 but not the sections');
  }
  var one = document.getElementById('one');
  var two = document.getElementById('two');
  var three = document.getElementById('three');

  if (event.target.id === 'one') {
    oneClicks += 1;
    one.textContent = 'One have been clicked ' + oneClicks + ' times.';
  }
  if (event.target.id === 'two') {
    twoClicks += 1;
    two.textContent = 'Two have been clicked ' + twoClicks + ' times.';
  }
  if (event.target.id === 'three') {
    threeClicks += 1;
    three.textContent = 'Three have been clicked ' + threeClicks + ' times.';
  }
}
