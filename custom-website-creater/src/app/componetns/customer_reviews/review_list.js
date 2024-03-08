'use client';
import React, { useState, useEffect } from 'react';
import Review from './review';


const ReviewList = (props) => {
    const [reviews, setLoadReviews] = useState([]);

    useEffect(() => {
        setLoadReviews(props.reviews);
    }, [props]);


    return (
        <div className='p4'>
            <div className='grid-cols-1 gap-4'>
                {reviews.map((review, index) => (
                    <Review 
                        key={index}
                        name={review.name}
                        text={review.text}
                    />
                ))}
            </div>
        </div>
    )
}

export default ReviewList;