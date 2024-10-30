import Books from "../Model/book_model.js";

export const getBook = async (req, res) => {
  try {
    const books = await Books.find();
    res.status(200).json(books);
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ message: "Failed to retrieve books", error });
  }
};
