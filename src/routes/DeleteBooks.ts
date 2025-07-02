import express from "express";
import { DeleteBook } from "../Controlers/Controlers";
const DeleteBooks = express.Router();

DeleteBooks.delete("/:id", DeleteBook);

export default DeleteBooks;
