import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
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
  },

  {
    timestamps: true,
    collection: "AllBooks",
  }
);

export const Book = mongoose.model("Book", bookSchema);
