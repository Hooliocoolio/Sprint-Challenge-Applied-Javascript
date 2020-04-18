/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/


// FUNCTION TO CREATE CAROUSEL COMPONENT

function createCarousel() {
  // ELEMENT VARIABLES

  // DIV WITH 'carousel' CLASS

  const carouselDiv = document.createElement('div');
  carouselDiv.classList.add('carousel');


  // DIV WITH 'left-button' CLASS and NESTED UNDER 'carousel'
  const leftBtnDiv = document.createElement('div');
  leftBtnDiv.classList.add('left-button');
  carouselDiv.appendChild(leftBtnDiv);
  // ARROW FOR THE LEFT BUTTON
  leftBtnDiv.textContent = '<';

  // IMG ELEMENTS/SOURCES/AND NESTED UNDER 'carousel'
  const imgMountain = document.createElement('img');
  carouselDiv.appendChild(imgMountain);
  const imgComputer = document.createElement('img');
  carouselDiv.appendChild(imgComputer);
  const imgTrees = document.createElement('img');
  carouselDiv.appendChild(imgTrees);
  const imgTurntable = document.createElement('img');
  carouselDiv.appendChild(imgTurntable);


  // SRC
  imgMountain.src = "./assets/carousel/mountains.jpeg";
  imgComputer.src = "./assets/carousel/computer.jpeg";
  imgTrees.src = "./assets/carousel/trees.jpeg";
  imgTurntable.src = "./assets/carousel/turntable.jpeg";

  // DIV W/'right-button' CLASS 
  const rightBtnDiv = document.createElement('div');
  rightBtnDiv.classList.add('right-button');
  carouselDiv.appendChild(rightBtnDiv);
  // ARROW FOR THE RIGHT BUTTON
  rightBtnDiv.textContent = '>';


  contain.append(carouselDiv);


}


console.log(createCarousel());