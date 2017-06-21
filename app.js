'use stric';
var imageList = [];
var imageDisplayed = [];
var imageToDisplay = [];
// image name, time displayed, number of click per image
function userClicks(imageNumber, imageName) {
  this.imageNumber = imageNumber; //information list image
  this.imageName = imageName; //data
  this.numClick = 0;//how many time was clicked
  this.numDisplay = 0;// how many times did the user saw the image
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

function render(){
  getRandomImage();
  for (var i = 0; i < imageToDisplay.length; i++) {
    var imgEl = document.createElement('pictures');
    imgEl.src = imageToDisplay[i].imageNumber;
    imgEl.id = imageToDisplay[i].imageName;
    randomImage.appendChild(imgEl);
  }
}
var container = document.getElementById('randomImage');
container.addEventListener('click', handleClick);

var oneClicks = 0;

function handleClick(event) {
  console.log(event.target);
  //to track the number of click
  if (event.target.id === 'randomImage') {
  }
  var one = document.getElementById('randomImage');

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

new userClicks ('banana', 'banana.jpg');
new userClicks ('bathroom', 'bathroom.jpg');
new userClicks ('boots', 'boots.jpg');
new userClicks ('breakfast', 'breakfast.jpg');
new userClicks ('bubblegum', 'bubblegum.jpg');
new userClicks ('chair', 'chair.jpg');
new userClicks ('cthulhu', 'cthulhu.jpg');
new userClicks ('dog_duck', 'dog-duck.jpg');
new userClicks ('dragon', 'dragon.jpg');
new userClicks ('pen', 'pen.jpg');
new userClicks ('pet_sweep', '');
new userClicks ('scissors', 'scissors.jpg');
new userClicks ('shark', 'shark.jpg');
new userClicks ('sweep_baby', 'sweep.jpg');
new userClicks ('tauntaun', 'tauntaun.jpg');
new userClicks ('unicor', 'unicor.jpg');
new userClicks ('usb', 'usb.jpg');
new userClicks ('water_can', 'water-can.jpg');
new userClicks ('wine_glass', 'wine-glass.jpg');
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
// new imageList()
// render();
// imageDisplay.addEventListener(click,handleClick);
