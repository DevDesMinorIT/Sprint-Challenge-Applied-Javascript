// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
const newTab = (tablink) => {
    const childTab = document.createElement('div');
    const tabEntryPoint = document.querySelector('.tabs .topics')
    childTab.classList.add('tab');
    childTab.textContent = tablink
    tabEntryPoint.appendChild(childTab)
    return childTab;
}


const getData = () => {
    axios.get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            console.log(response)
            const topics = response.data.topics
            console.log(topics)
            topics.forEach(topic => {
                newTab(topic)
            })
        })
        .catch(error => {
            console.log(error)
        })
}
getData();




// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>