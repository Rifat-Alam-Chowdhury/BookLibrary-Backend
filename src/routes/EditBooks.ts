// routes/EditBooks.ts
import express from "express";
import { ModifyBook } from "../Controlers/Controlers";

const EditBooks = express.Router();

EditBooks.patch("/:id", ModifyBook);

export default EditBooks;
