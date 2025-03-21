const Book = require("../models/book");

const getBooks = async (req, res) => {
  const books = await Book.find();
  const response = {
    success: true,
    message: "Books Retrived",
    data: { books },
  };
  res.send(response);
};

const createBook = async (req, res) => {
  const data = req.body;

  const rawBook = new Book({
    name: data.name,
    author: data.author,
  });

  const book = await rawBook.save();

  const response = {
    success: true,
    message: "Book successfully created",
    data: { book },
  };
  res.status(201).send(response);
};

const getBookById = async (req, res) => {
  const bookId = req.params.id;

  const book = await Book.findOne({
    _id: bookId,
  });

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

  await Book.updateOne(
    { _id: bookId },
    {
      name,
      author,
    }
  );
  const book = await Book.findOne({
    _id: bookId,
  });

  const response = {
    success: true,
    message: `Book retrieved`,
    data: { book },
  };

  res.send(response);
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;

  await Book.deleteOne({
    _id: bookId,
  });

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
