// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container


function header() {
    // VARIABLE FOR HEADER-CONTAINER DIV (PARENT)
    const contain = document.querySelector('.header-container');
    // VARIABLE TO CREATE OUR HEADER DIV 
    const divElement = document.createElement('div');
    // ADDS THE CLASSNAME HEADER TO OUR DIV
    divElement.classList.add('header');
    // NESTS OUR HEADER DIV INSIDE THE HEADER CONTAINER DIV
    contain.append(divElement);

    // CREATES THE SPAN
    const spanDate = document.createElement('span');
    // ADDS THE CLASSNAME DATE TO THE SPAN
    spanDate.classList.add('date');
    //NESTS THE SPAN ELEMENT WITHIN THE HEADER DIV
    divElement.appendChild(spanDate);
    // THIS WILL GIVE US DATE FOR OUR SPAN
    spanDate.textContent = 'APRIL 17, 2020';

    // VARIABLE THAT CREATES H1 DIV 
    const h1Element = document.createElement('h1');
    // ADDS SOME TEXT TO H1ELEMENT
    h1Element.textContent = 'Lambda Times';
    // NESTS H1 ELEMENT INSIDE HEADER DIV (DIVELEMENT)
    divElement.appendChild(h1Element);

    const spanTemp = document.createElement('span');
    // ADDS THE CLASSNAME DATE TO THE SPAN
    spanTemp.classList.add('temp');
    //NESTS THE SPAN ELEMENT WITHIN THE HEADER DIV
    divElement.appendChild(spanTemp);
    // THIS WILL GIVE US DATE FOR OUR SPAN
    spanTemp.textContent = '98º';


}

console.log(header());