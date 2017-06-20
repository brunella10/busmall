'use stric';
var randomImage = [nameOfTheImages];
var clickPerImage = []; //totalclicksperimage
var allImage = [];//all products img
var lastOne =[];//last image showed
var newOne =[];//rest of image to be showed
var imageDisplay = document.getElementById('randomImage'); //image container to display
//product object
function userClicks(imageNumber, imageName, numClick, timesDisplayed){
this.imageNumber = imageNumber; //information list image
this.imageName = imageName; //data
this.numClick = numClick;//how many time was clicked
this.timesDisplayed = timesDisplayed;// how many times did the user saw rhe image
this.totalImageDisplayed = [];//how many image was displayed
this.heigherClicked = [];//most clicked image
clickPerImage.push(this);
}

//
function heigherClicked() {
  for (var i = 0; i < allImage.lengh; i++) {
    if (allImage[i].timesDisplayed === 0) {
      allImage[i].heigherClicked = 'NA';
    } else {
      allImage[i].heigherClicked = allImage[i].numClick /allImage.timesDisplayed
    }
  }
}
function displayed(array, value) {
  for (var i = 0; i < array.lengh; i++) {
    if (value === array[i]) {
      return false;
    }
  }
    return true
  }

function callingImage() {
  newOne = [];
  while (newOne.lengh < 3) {//because the images are displayed 3 each time
    var randomPic = Math.floor(Math.random() * (allImage.lengh));
    if (displayed(newOne, allImage[select]) && displayed(lastOne, allImage[select])) {
      newOne.push(displayed[select]);
      newOne[select].timesDisplayed++;
    }
    }
    lastOne = newOne;
  }

function handleClick() {
  for (var i = 0; i < newOne.lengh; i++) {
    if (event.target.id === newOne[i].imageName)
  }
}
//from here event
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

//from here random images
//from here 25 clicks
function twentyFiveClicks() {
  var clicksPerUser = 25;
  var option = 25;

  while (clicksPerUser > 0) {
    if ()

  }
}
