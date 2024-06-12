const articlesContainer = document.querySelector('#articlesContainer');

const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description: 'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '****'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description: 'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc: 'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb...",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

function renderArticles() {
    // Clear existing content
    articlesContainer.innerHTML = '';

    // Loop through the articles array and create HTML for each article
    articles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article');

        // Create template literal for article content
        const articleContent = `
            <h2>${article.title}</h2>
            <p><strong>Date:</strong> ${article.date}</p>
            <p><strong>Description:</strong> ${article.description}</p>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p><strong>Ages:</strong> ${article.ages}</p>
            <p><strong>Genre:</strong> ${article.genre}</p>
            <p><strong>Rating:</strong> ${article.stars}</p>
        `;

        // Set the innerHTML of the article element
        articleElement.innerHTML = articleContent;

        // Append the article element to the container
        articlesContainer.appendChild(articleElement);
    });
}

// Call the function to render articles on page load
document.addEventListener('DOMContentLoaded', renderArticles);

// Example to add a new article and re-render the list
articles.push({
    id: 4,
    title: "New Book Title",
    date: "June 1, 2024",
    description: "Description of the new book.",
    imgSrc: "https://example.com/newbook.jpg",
    imgAlt: "Book cover for the new book",
    ages: "12-18",
    genre: "Adventure",
    stars: "⭐⭐⭐⭐"
});
renderArticles();
