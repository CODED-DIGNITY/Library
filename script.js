const myLibrary = [];
const libraryContainer = document.getElementById("library");
const addMangaBtn = document.getElementById("add-manga-btn");

function Book(title, author, coverUrl, isRead = false) {
	this.title = title;
	this.author = author;
	this.coverUrl = coverUrl;
	this.isRead = isRead;
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
		card.style.backgroundColor = "#ccc";

		const gradient = document.createElement("div");
		gradient.classList.add("gradient");

		const title = document.createElement("h3");
		title.textContent = book.title;

		const author = document.createElement("p");
		author.textContent = book.author;

		const remove = document.createElement("button");
		remove.textContent = "Remove";

		const read = document.createElement("button");
		read.textContent = book.isRead ? "Unread" : "Read";

		const buttons = document.createElement("div");
		buttons.classList.add("buttons");

		buttons.appendChild(remove);
		buttons.appendChild(read);
		gradient.appendChild(title);
		gradient.appendChild(author);
		gradient.appendChild(buttons);
		card.appendChild(gradient);

		read.addEventListener("click", (e) => {
			e.stopPropagation();
			toggleReadStatus(index);
		});
		remove.addEventListener("click", (e) => {
			e.stopPropagation();
			removeBookFromLibrary(index);
		});

		libraryContainer.appendChild(card);
	});
}

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

addBookToLibrary(
	"Demon Slayer",
	"Koyoharu Gotouge",
	"https://upload.wikimedia.org/wikipedia/en/0/09/Demon_Slayer_-_Kimetsu_no_Yaiba%2C_volume_1.jpg",
	true
);

addBookToLibrary(
	"My Hero Academia",
	"Kōhei Horikoshi",
	"https://upload.wikimedia.org/wikipedia/en/5/5a/Boku_no_Hero_Academia_Volume_1.png",
	true
);

addBookToLibrary(
	"Jujutsu Kaisen",
	"Gege Akutami",
	"https://upload.wikimedia.org/wikipedia/en/4/46/Jujutsu_kaisen.jpg",
	false
);

const modal = document.getElementById("add-manga-modal");
const form = document.getElementById("add-manga-form");
const cancelBtn = document.getElementById("cancel-btn");

addMangaBtn.addEventListener("click", () => {
	openModal();
});

cancelBtn.addEventListener("click", closeModal);
modal.querySelector(".modal-backdrop").addEventListener("click", closeModal);

function openModal() {
	modal.classList.remove("hidden");
	form.reset();
}

function closeModal() {
	modal.classList.add("hidden");
}

form.addEventListener("submit", (e) => {
	e.preventDefault();

	const title = document.getElementById("title-input").value.trim();
	const author = document.getElementById("author-input").value.trim();
	const coverUrl = document.getElementById("cover-input").value.trim();
	const isRead = document.getElementById("read-input").checked;

	if (!title || !author || !coverUrl) return;

	addBookToLibrary(title, author, coverUrl, isRead);
	closeModal();
});
