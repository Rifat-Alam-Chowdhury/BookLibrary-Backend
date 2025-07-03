"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const AllBooksRoutes_1 = __importDefault(require("./routes/AllBooksRoutes"));
const AddBooks_1 = __importDefault(require("./routes/AddBooks"));
const EditBooks_1 = __importDefault(require("./routes/EditBooks"));
const DeleteBooks_1 = __importDefault(require("./routes/DeleteBooks"));
const GetOneBook_1 = __importDefault(require("./routes/GetOneBook"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
const PORT = 3000;
mongoose_1.default
    .connect("mongodb://localhost:27017/BOOkMANAGE")
    .then(() => {
    console.log("MongoDB connected");
})
    .catch((err) => console.error("MongoDB connection error:", err));
app.use("/api/allBooks", AllBooksRoutes_1.default);
app.use("/api/addBook", AddBooks_1.default);
app.use("/api/editBook", EditBooks_1.default);
app.use("/api/deleteBook", DeleteBooks_1.default);
app.use("/api/GetOneBook", GetOneBook_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
