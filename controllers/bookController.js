let books = [];

const getBooks = (req, res) => {
  const { author, limit } = req.query;

  let filteredBooks = books;
  if (author) {
    filteredBooks = books.filter((bk) => bk.author === author);
  }
  if (limit) {
    filteredBooks = filteredBooks.slice(0, parseInt(limit));
  }

  const response = {
    success: true,
    message: "Books Retrived",
    data: { books: filteredBooks },
  };
  res.send(response);
};

const createBook = (req, res) => {
  const data = req.body;

  const { name } = data; //const name = data.name;

  const existingBook = books.find((book) => book.name === name);

  if (existingBook) {
    const response = {
      success: false,
      message: `Book ${name} already exist`,
    };
    //409 Status code means conflict.
    return res.status(409).send(response);
  }

  const newBook = {
    id: books.length + 1,
    ...data,
  };
  books.push(newBook);
  const response = {
    success: true,
    message: "Book successfully created",
    data: { book: newBook },
  };
  res.status(201).send(response);
};

const getBookById = (req, res) => {
  const bookId = req.params.id;

  const book = books.find((bk) => bk.id === parseInt(bookId));

  if (!book) {
    const response = {
      success: false,
      message: `Book not found`,
    };
    return res.status(404).send(response);
  }

  const response = {
    success: true,
    message: `Book retrieved`,
    data: { book },
  };

  res.send(response);
};

const updateBook = (req, res) => {
  const bookId = req.params.id;

  const book = books.find((bk) => bk.id === parseInt(bookId));

  if (!book) {
    const response = {
      success: false,
      message: `Book not found`,
    };
    return res.status(404).send(response);
  }

  const data = req.body;
  const newBook = {
    ...book,
    ...data,
  };

  const bookIndex = books.findIndex((bk) => book.id === bk.id);
  books[bookIndex] = newBook;

  const response = {
    success: true,
    message: `Book retrieved`,
    data: { book: newBook },
  };

  res.send(response);
};

const deleteBook = (req, res) => {
  const bookId = req.params.id;

  const book = books.find((bk) => bk.id === parseInt(bookId));

  if (!book) {
    const response = {
      success: false,
      message: `Book not found`,
    };
    return res.status(404).send(response);
  }

  const newBooks = books.filter((bk) => bk.id !== book.id);
  books = newBooks;

  const response = {
    success: true,
    message: `Book is successfully deleted`,
  };

  res.send(response);
};

module.exports = {
  getBooks,
  createBook,
  getBookById,
  updateBook,
  deleteBook,
};
