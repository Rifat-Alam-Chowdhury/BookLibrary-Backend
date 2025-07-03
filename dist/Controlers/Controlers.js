"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteBook = exports.ModifyBook = exports.AddBook = exports.getBookById = exports.getAllBooks = void 0;
const BooksModel_1 = require("../models/BooksModel");
const getAllBooks = async (req, res, next) => {
    try {
        const books = await BooksModel_1.Book.find();
        res.status(200).json(books);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to fetch books" });
        next(error);
    }
};
exports.getAllBooks = getAllBooks;
const getBookById = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(id);
        const book = await BooksModel_1.Book.findById(id);
        if (!book) {
            res.status(404).json({ error: "Book not found" });
        }
        res.status(200).json(book);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to fetch book" });
    }
};
exports.getBookById = getBookById;
const AddBook = async (req, res, next) => {
    console.log("hitted");
    try {
        const findBook = await BooksModel_1.Book.exists({ isbn: req.body.isbn });
        if (findBook) {
            return res.status(400).json({ error: "Book already exists" });
        }
        else {
            const book = await BooksModel_1.Book.create(req.body);
            return res.status(201).json({ success: "Book added successfully" });
        }
    }
    catch (error) {
        return next(error);
    }
};
exports.AddBook = AddBook;
const ModifyBook = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const updatedBook = await BooksModel_1.Book.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
        console.log(updatedBook);
        res.status(200).json(updatedBook);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to update book" });
    }
};
exports.ModifyBook = ModifyBook;
const DeleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const deletedBook = await BooksModel_1.Book.findByIdAndDelete(id);
        res.status(200).json(deletedBook);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete book" });
    }
};
exports.DeleteBook = DeleteBook;
