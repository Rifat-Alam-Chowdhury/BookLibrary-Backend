"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// routes/EditBooks.ts
const express_1 = __importDefault(require("express"));
const Controlers_1 = require("../Controlers/Controlers");
const EditBooks = express_1.default.Router();
EditBooks.patch("/:id", Controlers_1.ModifyBook);
exports.default = EditBooks;
