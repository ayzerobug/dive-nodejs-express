const dbConnection = require("../database");

//READ
async function getAllBooks() {
  const result = await dbConnection.query(
    "SELECT * FROM books ORDER BY id DESC;"
  );
  const rows = result[0];
  return rows;
}

//READ
async function findBook(id) {
  const sqlQuery = `SELECT * FROM books WHERE id = ? LIMIT 1`;
  const result = await dbConnection.query(sqlQuery, [id]);
  const rows = result[0];
  return rows[0];
}

//CREATE
async function createBook(name, author) {
  const sqlQuery = `INSERT INTO books (name, author) VALUES (?, ?);`;
  const result = await dbConnection.query(sqlQuery, [name, author]);
  const response = result[0];
  return findBook(response.insertId);
}

//DELETE
async function deleteBook(id) {
  const sqlQuery = `DELETE FROM books WHERE id = ?;`;
  await dbConnection.query(sqlQuery, [id]);
}

//UPDATE
async function updateBook(id, newName, newAuthor) {
  const sqlQuery = `UPDATE books SET name = ?, author = ? WHERE id = ?`;
  await dbConnection.query(sqlQuery, [newName, newAuthor, id]);
  return findBook(id);
}

module.exports = {
  getAllBooks,
  findBook,
  createBook,
  updateBook,
  deleteBook,
};
