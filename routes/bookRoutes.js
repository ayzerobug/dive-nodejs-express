const express = require("express");
const router = express.Router();

const controller = require("../controllers/bookController");

router.get("/", controller.getBooks);
router.get("/:id", controller.getBookById);
router.patch("/:id", controller.updateBook);
router.post("/", controller.createBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;
