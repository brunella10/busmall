'use strict';

// image name, time displayed, number of click per image
function userClicks(imageName, imageNumber) {
  this.imageNumber = imageNumber; //information list image
  this.imageName = imageName; //data
  this.numClick = 0;//how many time was clicked
  this.numDisplay = 0;// how many times did the user saw the image
  imageList.push(this);
}
function createImages() {
  if(localStorage.getItem('imageList')){
    imageList = JSON.parse(localStorage.getItem('imageList'));
  } else {
    new userClicks ('bag', 'images/bag.jpg');
    new userClicks ('banana', 'images/banana.jpg');
    new userClicks ('bathroom', 'images/bathroom.jpg');
    new userClicks ('boots', 'images/boots.jpg');
    new userClicks ('breakfast', 'images/breakfast.jpg');
    new userClicks ('bubblegum', 'images/bubblegum.jpg');
    new userClicks ('chair', 'images/chair.jpg');
    new userClicks ('cthulhu', 'images/cthulhu.jpg');
    new userClicks ('dog_duck', 'images/dog-duck.jpg');
    new userClicks ('dragon', 'images/dragon.jpg');
    new userClicks ('pen', 'images/pen.jpg');
    new userClicks ('pet_sweep', 'images/pet-sweep.jpg');
    new userClicks ('scissors', 'images/scissors.jpg');
    new userClicks ('shark', 'images/shark.jpg');
    new userClicks ('sweep_baby', 'images/sweep.png');
    new userClicks ('tauntaun', 'images/tauntaun.jpg');
    new userClicks ('unicorn', 'images/unicorn.jpg');
    new userClicks ('usb', 'images/usb.gif');
    new userClicks ('water_can', 'images/water-can.jpg');
    new userClicks ('wine_glass', 'images/wine-glass.jpg');
  }
}
// random image generator

function getRandomImage(){
  return Math.floor(Math.random() * imageList.length);
}

function getImageToDisplay() {
  getRandomImage();
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
  getImageToDisplay();
  for (var i = 0; i < imageToDisplay.length; i++) {
    var imgEl = document.createElement('img');
    imgEl.src = imageList[imageToDisplay[i]].imageNumber;
    imgEl.id = imageList[imageToDisplay[i]].imageName;
    container.appendChild(imgEl);
  }
}

function handleClick(event) {  // to track the number of click
  for (var i = 0; i < imageToDisplay.length; i++) {
    if (event.target.id === imageList[imageToDisplay[i]].imageName) {
      imageList[imageToDisplay[i]].numClick++;
      clickPerImage++;
      var remEl =  document.getElementById('randomImage');
      while(remEl.firstChild) {
        remEl.removeChild(remEl.firstChild);
      }
      if (clickPerImage === 25) {
        // var remEl = document.getElementById('randomImage');
        while (remEl.firstChild) {
          remEl.removeChild(remEl.firstChild);
        }
        console.log('hello');
        container.removeEventListener('click', handleClick);
        var secEl = document.createElement('section');
        secEl.id = 'result';
        var h2El = document.createElement('h2');
        h2El.textContent = 'result';
        secEl.appendChild(h2El);
        var ulEl = document.createElement('ul');
        for (var i = 0; i < imageList.length; i++) {
          var liEl = document.createElement('li');
          console.log('middle');
          liEl.textContent = imageList[i].numClick + ' votes for ' + imageList[i].imageName + ' . ';
          ulEl.appendChild(liEl);
        }
        secEl.appendChild(ulEl);
        container.appendChild(secEl);
        console.log('bye');
        chartResult();
        localStorage.setItem('imageList', JSON.stringify(imageList));
      } else {
        render();
      }
    }
  }
}

function chartResult() {
  console.log('chartResult');
  container.parentNode.removeChild(container);
  var ctx = document.getElementById('myChart');
  var chartL = [];
  var chartD = [];
  for (var i = 0; i < imageList.length; i++) {
    chartL.push(imageList[i].imageName);
    chartD.push(imageList[i].numClick);
  }
  var newChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: chartL,
      datasets: [{
        label: '# of clicks',
        data:chartD,
        backgroundColor: [
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)',
          'rgba(255, 206, 86, 0.75)',
          'rgba(75, 192, 192, 0.75)',
          'rgba(153, 102, 255, 0.75)',
          'rgba(255, 159, 64, 0.75)',
          'rgba(255, 99, 132, 0.75)',
          'rgba(54, 162, 235, 0.75)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
}

var imageList = [];
var imageDisplayed = [];
var imageToDisplay = [];
var clickPerImage = 0;
var oneClicks = 0;
var container = document.getElementById('randomImage');
createImages();
render();
container.addEventListener('click', handleClick);
//chart colors C9E4CAligth green 87BBA2medium green 55828Bmedium dark bluish 3B6064medium green 364958 green
