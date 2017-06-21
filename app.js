'use stric';
var imageList = [];
var imageDisplayed = [];
var imageToDisplay = [];
// image name, time displayed, number of click per image
function userClicks(imageNumber, imageName) {
  this.imageNumber = imageNumber; //information list image
  this.imageName = imageName; //data
  this.numClick = 0;//how many time was clicked
  this.numDisplay = 0;// how many times did the user saw rhe image
  clickPerImage.push(this);
}

// random image generator
function getRandomImage(imageList){
  return Math.floor(Math.random() * (imageList.length - 0)) + 0;
}

function getImageToDisplay() {
  imageToDisplay = [];
  while (imageToDisplay.length < 3) {
    var randomImageNum = getRandomImage(imageList);
    if(!checkNumberInArray(randomImageNum, imageDisplayed) && !checkNumberInArray(randomImageNum, imageToDisplay)) {
      imageToDisplay.push(randomImageNum);
      imageList[randomImageNum].numDisplay++;
    }
  }
  imageDisplayed = imageToDisplay;
}

function checkNumberInArray(num, numbers){
  for (var i = 0; i < numbers.length; i++) {
    if (num === numbers[i]) {
      return true;
    }
  }
  return false;
}

// loop of 25
// function random 0 20
// event and handleClick
//   increase image select counter
//   call 3 more random image.

//  display stats

// var randomImage = [imageName];
// var clickPerImage = []; //totalclicksperimage
// var allImage = []; //all products img
// var lastOne = []; //last image showed
// var newOne = []; //rest of image to be showed
// var imageDisplay = document.getElementById('randomImage'); //image container to display
// //product object
//
// //
//
// function handleClick() {
//   for (var i = 0; i < newOne.lengh; i++) {
//     if (event.target.id === newOne[i].imageName) {
//       newOne[i].numClick++;
//       clickPerImage++;
//       var
//     }
//   }
// }incomplete function
// from here event
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
// from here random images
// from here 25 clicks
// function twentyFiveClicks() {
//   var clicksPerUser = 25;
//   var option = 25;
//
//   while (clicksPerUser > 0) {
//     if ()
//
//   }
// }
// new product()
// render();
// imageDisplay.addEventListener(click,handleClick);
