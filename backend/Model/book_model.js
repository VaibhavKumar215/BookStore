import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    title: { 
        type: String, 
        required: true 
    }
});

const Books = mongoose.model("booksData",bookSchema)
export default Books;