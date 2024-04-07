function fetchBooks() {
  // Fetch the list of books from the API
  fetch('https://anapioficeandfire.com/api/books')
  // Return the promise from the fetch
  return fetch("https://anapioficeandfire.com/api/books")
    .then(response => response.json()) // Convert the response to JSON
    .then(json => renderBooks(json)); // Call renderBooks with the JSON data
}

function renderBooks(books) {
  const main = document.querySelector('main'); // Get the main element from the DOM
  books.forEach(book => {
    const h2 = document.createElement('h2'); // Create a new h2 element
    h2.innerHTML = book.name; // Set the innerHTML of the h2 to the book's name
    main.appendChild(h2); // Append the h2 to the main element
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks(); // Call fetchBooks when the DOM content has loaded
});


