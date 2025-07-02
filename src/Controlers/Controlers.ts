import { Request, NextFunction, RequestHandler, Response } from "express";
import { Book } from "../models/BooksModel";

export const getAllBooks: RequestHandler = async (
  req: Request,
  res: Response,
  next
) => {
  try {
    const books = await Book.find();

    res.status(200).json(books);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch books" });
    next(error);
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    console.log(id);

    const book = await Book.findById(id);

    if (!book) {
      res.status(404).json({ error: "Book not found" });
    }
    res.status(200).json(book);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to fetch book" });
  }
};

export const AddBook = async (req: Request, res: Response) => {
  try {
    console.log(req.body);

    const book = await Book.create(req.body);

    res.status(201).json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add book" });
  }
};

export const ModifyBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = req.body;

    const updatedBook = await Book.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    console.log(updatedBook);

    res.status(200).json(updatedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update book" });
  }
};

export const DeleteBook = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deletedBook = await Book.findByIdAndDelete(id);

    res.status(200).json(deletedBook);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete book" });
  }
};
