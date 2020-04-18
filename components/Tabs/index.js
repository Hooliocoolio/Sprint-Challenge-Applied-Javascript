// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

// CREATE TAB FUNCTION 
function createTab(data) {
    // ELEMENT VARIABLE
    const tab = document.createElement('div');
    // CREATE ELEMENT CLASS
    tab.classList.add("tab")
    // INPUT THE DATA
    tab.textContent = data
    // RETURN THE TAB ELEMENT
    return tab
}


// CONNECT TO AXIOS FOR A GET REQUEST
axios.get(`https://lambda-times-backend.herokuapp.com/topics`)
    .then(res => {
        //console.log(res.data.topics, 111111)
        // VARIABLE FOR TOPICS ELEMENT
        const topics = document.querySelector(".topics")
        // LOOP THROUGH THE DATA
        res.data.topics.forEach(elem => {
            topics.appendChild(createTab(elem))
        });
        // CATCH ANY ERRORS
    }).catch(err => {
        console.log(err, 'you have failed')
    })
