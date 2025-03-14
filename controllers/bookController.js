const bookService = require("../services/bookService");

const getBooks = async (req, res) => {
  const books = await bookService.getAllBooks();
  const response = {
    success: true,
    message: "Books Retrived",
    data: { books },
  };
  res.send(response);
};

const createBook = async (req, res) => {
  const data = req.body;
  const book = await bookService.createBook(data.name, data.author);

  const response = {
    success: true,
    message: "Book successfully created",
    data: { book },
  };
  res.status(201).send(response);
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  const book = await bookService.findBook(bookId);

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

const updateBook = async (req, res) => {
  const bookId = req.params.id;
  const { name, author } = req.body;

  const book = await bookService.updateBook(bookId, name, author);

  const response = {
    success: true,
    message: `Book retrieved`,
    data: { book },
  };

  res.send(response);
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  await bookService.deleteBook(bookId);

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
