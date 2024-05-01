'use client';
import React, { useState, useEffect } from 'react';
import ReviewList from './review_list';
import {ref, get} from '../../firebase_emulator';
var database = ""
function getReviewsDB() {
    const dbRef = ref(database, "/reviews");
    return get(dbRef)
}




const LocalReviewList = () => {;
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 

        getReviewsDB().then((res) => {
            const v = res.val();
            console.log(v);
            setReviews(Object.keys(v).map((key) => {
                return {"name": key, "text": v[key]}
            }))
        });
    }, []);

  
  return (
    <ReviewList 
      reviews={reviews}
    />
  );
};

export default LocalReviewList;