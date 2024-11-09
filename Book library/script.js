
let books = [];
let borrowHistory = [];

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const category = document.getElementById('category').value;

    if (title && author && category) {
        const book = { title, author, category, isAvailable: true };
        books.push(book);
        displayBooks();
        clearInputs();
    }
}

function displayBooks() {
    const bookCollection = document.getElementById('book-collection');
    bookCollection.innerHTML = '';

    books.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.className = 'book-item';

        bookItem.innerHTML = `
            <div>
                <strong>${book.title}</strong> by ${book.author}<br>
                Category: ${book.category}
            </div>
            <button onclick="borrowBook(${index})">
                ${book.isAvailable ? 'Borrow' : 'Return'}
            </button>
        `;

        bookCollection.appendChild(bookItem);
    });
}

function clearInputs() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('category').value = '';
}

function searchBooks() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const filteredBooks = books.filter(book => 
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
    );
    
    displayFilteredBooks(filteredBooks);
}

function displayFilteredBooks(filteredBooks) {
    const bookCollection = document.getElementById('book-collection');
    bookCollection.innerHTML = '';

    filteredBooks.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.className = 'book-item';

        bookItem.innerHTML = `
            <div>
                <strong>${book.title}</strong> by ${book.author}<br>
                Category: ${book.category}
            </div>
            <button onclick="borrowBook(${index})">
                ${book.isAvailable ? 'Borrow' : 'Return'}
            </button>
        `;

        bookCollection.appendChild(bookItem);
    });
}

function borrowBook(index) {
    const book = books[index];

    if (book.isAvailable) {
        book.isAvailable = false;
        borrowHistory.push({ title: book.title, date: new Date().toLocaleDateString() });
    } else {
        book.isAvailable = true;
        borrowHistory.push({ title: book.title, date: new Date().toLocaleDateString(), returned: true });
    }

    displayBooks();
    displayHistory();
}

function displayHistory() {
    const historySection = document.getElementById('borrow-history');
    historySection.innerHTML = '';

    borrowHistory.forEach(record => {
        const historyItem = document.createElement('li');
        historyItem.className = 'history-item';
        historyItem.textContent = `${record.title} - ${record.date} ${record.returned ? '(Returned)' : '(Borrowed)'}`;
        historySection.appendChild(historyItem);
    });
}

displayBooks();
