const myLibrary = [];
const libraryContainer = document.getElementById("library");
const addMangaBtn = document.getElementById("add-manga-btn");

function Book(title, author, coverUrl, read) {
	this.title = title;
	this.author = author;
	this.coverUrl = coverUrl;
	this.isRead = read;
}

function addBookToLibrary(title, author, coverUrl, isRead = false) {
	const newBook = new Book(title, author, coverUrl, isRead);
	myLibrary.push(newBook);
	renderLibrary();
}

function toggleReadStatus(index) {
	if (myLibrary[index]) {
		myLibrary[index].isRead = !myLibrary[index].isRead;
	}
	renderLibrary();
}

function removeBookFromLibrary(index) {
	if (myLibrary[index]) {
		myLibrary.splice(index, 1);
	}
	renderLibrary();
}

function renderLibrary() {
	libraryContainer.innerHTML = "";

	myLibrary.forEach((book, index) => {
		const card = document.createElement("div");
		card.classList.add("card");

		if (book.isRead) {
			card.classList.add("read");
		}

		card.style.backgroundImage = `url(${book.coverUrl})`;

		const gradient = document.createElement("div");
		gradient.classList.add("gradient");

		const title = document.createElement("h3");
		title.textContent = book.title;

		const author = document.createElement("p");
		author.textContent = book.author;

		const remove = document.createElement("button");
		remove.textContent = "Remove";

		const read = document.createElement("button");
		read.textContent = "Read";

		const buttons = document.createElement("div");
		buttons.classList.add("buttons");

		buttons.appendChild(remove);
		buttons.appendChild(read);
		gradient.appendChild(title);
		gradient.appendChild(author);
		gradient.appendChild(buttons);
		card.appendChild(gradient);

		card.addEventListener("click", () => {
			toggleReadStatus(index);
		});

		libraryContainer.appendChild(card);
	});
}

addMangaBtn.addEventListener("click", () => {
	console.log("Add Manga button clicked");
});

addBookToLibrary(
	"Chainsaw Man",
	"Tatsuki Fujimoto",
	"https://upload.wikimedia.org/wikipedia/en/2/24/Chainsawman.jpg",
	false
);

addBookToLibrary(
	"Vagabond",
	"Takehiko Inoue",
	"https://upload.wikimedia.org/wikipedia/en/9/99/Vagabond_%28manga%29_vol._1.png",
	true
);
