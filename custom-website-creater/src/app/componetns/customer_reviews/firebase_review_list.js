'use client';
import React, { useState, useEffect } from 'react';
import ReviewList from './review_list';
import {auth, database} from '../../firebase_connecter';
import {getDatabase, ref, get, child } from "firebase/database";

function getReviewsDB() {
    const dbRef = ref(database, "/reviews");
    return get(dbRef)
}




const FirebaseReviewList = () => {;
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 

        getReviewsDB().then((res) => {
            const v = res.val();
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

export default FirebaseReviewList;