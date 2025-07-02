import express from "express";
import { AddBook } from "../Controlers/Controlers";

const AddBooks = express.Router();

AddBooks.post("/", AddBook);

export default AddBooks;
