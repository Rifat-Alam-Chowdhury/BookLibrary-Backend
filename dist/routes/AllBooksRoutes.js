"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controlers_1 = require("../Controlers/Controlers");
const AllBooks = express_1.default.Router();
AllBooks.get("/", Controlers_1.getAllBooks);
exports.default = AllBooks;
