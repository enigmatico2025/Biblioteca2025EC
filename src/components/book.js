import React from "react";

const books = [
    {
        id: 1,
        name: "El Principito",
        image: "https://m.media-amazon.com/images/I/71Xz6pXfZ7L.jpg",
        price: 19.99,
    },
    {
        id: 2,
        name: "Cien años de soledad",
        image: "https://m.media-amazon.com/images/I/81aY1lxUe7L.jpg",
        price: 25.5,
    },
    {
        id: 3,
        name: "1984",
        image: "https://m.media-amazon.com/images/I/71kxa1-0mfL.jpg",
        price: 22.0,
    },
];


const Book = () => {
    return ( 
        <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
             
            {books.map((book) => (
                <div
                    key={book.id}
                    style={{
                        border: "1px solid #ccc",
                        padding: "10px",
                        borderRadius: "10px",
                        textAlign: "center",
                        maxWidth: "200px",
                    }}
                >
                    <img
                        src={book.image}
                        alt={book.name}
                        style={{ width: "100%", height: "auto", borderRadius: "5px" }}
                    />
                    <h3>{book.name}</h3>
                    <p>Precio: ${book.price.toFixed(2)}</p>
                </div>
            ))}
        </div>
    )
}
export default Book