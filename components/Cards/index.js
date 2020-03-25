// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {
        const cards = document.querySelector('.cards-container')
        //cards.appendChild(cardComponent(response.data))
        console.log('this is data', response.data.articles)
        const newArray = [];
        const dataArray = response.data.articles;

        dataArray.javascript.forEach(item => newArray.push(item))
        dataArray.bootstrap.forEach(item => newArray.push(item))
        dataArray.technology.forEach(item => newArray.push(item))
        dataArray.jquery.forEach(item => newArray.push(item))
        dataArray.node.forEach(item => newArray.push(item))

        function createComponent(item) {
            let
        }
        newArray.forEach(item => {
            let card = cardComponent(item);
            // headline.textContent = item.headline;
            // authorImage.src = item.authorImage;
            // span.textContent = `By: ${item.authorName}`;
            const newCard = document.querySelector('.cards-container');
            newCard.appendChild(card);
        })
        console.log(newArray)
        // console.log('you have won', response.data.articles.javascript['headline'])
    })
    .catch(error => {
        console.log(error)
    })

// getData3()
const cardComponent = (item) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const authorImage = document.createElement('img');
    const span = document.createElement('span');
    // console.log(item.authorImage)
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(authorImage);
    author.appendChild(span);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = item.headline;
    authorImage.src = item.authorPhoto;
    span.textContent = `By: ${item.authorName}`;
    // make and array of topics AT TOP OF cardContainer with forEach

    return card
}
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.