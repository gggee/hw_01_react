import React from "react";
import './css/index_stl.css';
import image from "./img/book.jpg";

const Book = () => {
    return (
        <div className="index-container">
            <div className="block_book">
                <span>MY FAVORITE BOOK</span>
                <h2 className="name">Vladimir Nabokov: Letters to Vera</h2>
                <p className="description">Vladimir Nabokov dedicated almost all of his books to his wife Vera.
                    They rarely parted for long, so there was almost no need to write to each other.
                    And yet, Nabokov's archive contains three hundred letters covering more than fifty years of their life together,
                    coinciding with the most dramatic ups and downs of the 20th century.</p>
            </div>

            <div className="block_img">
                <div className="block_info">
                    <p className="info"><b>Book title:</b> Letters to Vera</p>
                    <p className="info"><b>Author:</b> Vladimir Nabokov</p>
                    <p className="info"><b>Number of pages:</b> 704</p>
                </div>
                <img src={image} />
            </div>

            <div className="block_review">
                <p className="quote"><q><i>You came into my life - not like you come to visit, you know, "without taking off your hat",
                    but how they come to a kingdom where all the rivers were waiting for your reflection, all the roads - your steps.</i></q></p>
                <p className="review">Nabokov, even in the epistolary genre, remains himself with all the features of his style,
                    an abundance of colorful metaphors and that stroke of thought that puts Nabokov in the category of the best writers of the 20th century.
                    The only difference is that in his letters Vladimir Vladimirovich speaks not with his reader, but with his beloved Vera,
                    who went hand in hand with the writer through his whole life.</p>
            </div>
        </div>
    );
};

export default Book;