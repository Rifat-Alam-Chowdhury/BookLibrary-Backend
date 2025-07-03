"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controlers_1 = require("../Controlers/Controlers");
const AddBooks = express_1.default.Router();
AddBooks.post("/", (req, res, next) => {
    (0, Controlers_1.AddBook)(req, res, next);
});
exports.default = AddBooks;
