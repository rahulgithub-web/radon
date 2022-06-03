const Book = require("../model/Book");

const getAllBooks = async (req, res, next) => {
  let books;
  try {
    books = await Book.find();
  } catch (err) {
    console.error(err);
  }
  if (!books) {
    return res.status(404).json({ message: "No Books Found" });
  }
  return res.status(200).json({ books });
};

const getById = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findById(id);
  } catch (err) {
    console.error(err);
  }
  if (!book) {
    return res.status(404).json({ message: "No Book Found" });
  }
  return res.status(200).json({ book });
};

const addBook = async (req, res, next) => {
  const { name, price, author, description, available, image } = req.body;
  let book;
  try {
    book = new Book({
      name,
      author,
      description,
      price,
      available,
      image,
    });
    await book.save();
  } catch (err) {
    console.error(err);
  }
  if (!book) {
    return res.status(500).json({ message: "Unable to add book" });
  }
  return res.status(201).json({ book });
};

const updateBook = async (req, res, next) => {
  const id = req.params.id;
  const { name, price, author, description, available, image } = req.body;
  let book;
  try {
    book = await Book.findByIdAndUpdate(id, {
      name,
      author,
      price,
      description,
      available,
      image,
    });
    book = await book.save();
  } catch (err) {
    console.error(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Update By this ID" });
  }
  return res.status(200).json({ book });
};

const deleteBook = async (req, res, next) => {
  const id = req.params.id;
  let book;
  try {
    book = await Book.findByIdAndRemove(id);
  } catch (err) {
    console.log(err);
  }
  if (!book) {
    return res.status(404).json({ message: "Unable to Delete By this ID" });
  }
  return res.status(200).json({ message: "Book deleted successfully" });
};

exports.deleteBook = deleteBook;
exports.updateBook = updateBook;
exports.getById = getById;
exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
