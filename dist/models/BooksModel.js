"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bookSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    author: {
        type: String,
        required: true,
        trim: true,
    },
    genre: {
        type: String,
        required: true,
        trim: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    },
    copies: {
        type: Number,
        required: true,
        default: 1,
        min: 0,
    },
    images: {
        type: [String],
    },
}, {
    timestamps: true,
    collection: "AllBooks",
});
exports.Book = mongoose_1.default.model("Book", bookSchema);
