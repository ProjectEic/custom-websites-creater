"use client";
import React, { useState, useEffect } from "react";
import Review from "./review";


const ReviewList = (props) => {
    const [reviews, setLoadReviews] = useState([]);

    useEffect(() => {
        setLoadReviews(props.reviews);
    }, [props]);

 
    return (
        <section id="Reviews" className="p-6">
            <h2 className="headlineConfig">Customer Reviews</h2>
            <div className="flex gap-4 justify-evenly">
                {reviews.map((review, index) => (
                    <Review 
                        key={index}
                        name={review.name}
                        text={review.text}
                    />
                ))}
            </div>
        </section>
    )
}

export default ReviewList;