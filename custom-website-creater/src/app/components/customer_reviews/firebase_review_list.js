"use client";
import React, { useState, useEffect } from "react";
import ReviewList from "./review_list";
import { database} from "../../firebase_connecter";
import { ref, get, remove } from "firebase/database";
import { remove_dict_starting_order } from "@/app/dict_transformer";

const getReviewsDB = () => {
    const dbRef = ref(database, "/reviews");
    return get(dbRef)
}




const FirebaseReviewList = () => {;
    const [reviews, setReviews] = useState([]);

    useEffect(() => { 

        getReviewsDB().then((res) => {
            var v = res.val();
            v = remove_dict_starting_order(v);
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