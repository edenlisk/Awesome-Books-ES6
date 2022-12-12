export default class Listeners {
  constructor(awesomeBooks, contact, addBook) {
    this.awesomeBooks = awesomeBooks;
    this.contact = contact;
    this.addBook = addBook;
  }

  showList() {
    this.awesomeBooks.style.display = 'block';
    this.contact.style.display = 'none';
    this.addBook.style.display = 'none';
  }

  showNew() {
    this.awesomeBooks.style.display = 'none';
    this.contact.style.display = 'none';
    this.addBook.style.display = 'block';
  }

  showContact() {
    this.awesomeBooks.style.display = 'none';
    this.contact.style.display = 'block';
    this.addBook.style.display = 'none';
  }
}
