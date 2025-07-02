import express from "express";

import mongoose from "mongoose";
import cors from "cors";
import AllBooks from "./routes/AllBooksRoutes";
import AddBooks from "./routes/AddBooks";
import EditBooks from "./routes/EditBooks";
import DeleteBooks from "./routes/DeleteBooks";
import GetOneBook from "./routes/GetOneBook";

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

mongoose
  .connect("mongodb://localhost:27017/BOOkMANAGE")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.error("MongoDB connection error:", err));

app.use("/api/allBooks", AllBooks);
app.use("/api/addBook", AddBooks);
app.use("/api/editBook", EditBooks);
app.use("/api/deleteBook", DeleteBooks);
app.use("/api/GetOneBook", GetOneBook);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
