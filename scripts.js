const myLibrary = [];

function Book(title, author, coverUrl, read) {
	this.title = title;
	this.author = author;
	this.coverUrl = coverUrl;
	this.isRead = read;
}

function addBookToLibrary(title, author, coverUrl, isRead = false) {
	const newBook = new Book(title, author, coverUrl, isRead);
	myLibrary.push(newBook);
}
