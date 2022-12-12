/* eslint-disable no-restricted-globals */
export default class BookList {
  constructor(bookDisplayContainer) {
    this.information = JSON.parse(localStorage.getItem('books')) || [];
    this.bookDisplayContainer = bookDisplayContainer;
  }

  storeBook = (titleValue, authorValue) => {
    const newBook = {
      name: titleValue,
      author: authorValue,
    };
    this.information.push(newBook);
    localStorage.setItem('books', JSON.stringify(this.information));
    return newBook;
  }

  displayBooks = () => {
    this.information.forEach((book) => {
      const bookTitle = document.createElement('p');
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.type = 'button';
      remove.classList.add('remove');
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book-div');
      bookTitle.innerHTML = `${book.name} by ${book.author}`;
      bookDiv.append(bookTitle, remove);
      this.bookDisplayContainer.appendChild(bookDiv);
    });
  }

  removeBook = (button, index) => {
    this.bookDisplayContainer.removeChild(button.parentElement);
    this.information.splice(index, 1);
    localStorage.setItem('books', JSON.stringify(this.information));
    location.reload();
  }
}
