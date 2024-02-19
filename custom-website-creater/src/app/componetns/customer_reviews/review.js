"use-client"
import React, { useState, useEffect } from 'react';
import { BsArrowLeft, BsArrowRight, BsX } from 'react-icons/bs';


const Review = (props) => {

    return (
        <div className='min-w-60 max-w-full w-40 '>
            <h3> {props.name} </h3>
            <p> {props.text} </p>
        </div>
    )

}

export default Review;