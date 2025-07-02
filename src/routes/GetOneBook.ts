import express from "express";
import { getBookById } from "../Controlers/Controlers";
const GetOneBook = express.Router();

GetOneBook.get("/:id", getBookById);

export default GetOneBook;
