import express from "express";
import { getAllBooks } from "../Controlers/Controlers";
const AllBooks = express.Router();

AllBooks.get("/", getAllBooks);

export default AllBooks;
