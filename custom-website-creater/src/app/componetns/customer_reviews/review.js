"use-client"
import React from 'react'
import Image from 'next/image';

const Review = (props) => {


    const handleShowIcon = () => {
        return <Image
                width={50}
                height={50}
                src={"https://google.com/placeholder_img.png"}
                alt={props.name + " icon"}
                className="w-full h-[80vh] object-contain border border-white rounded"
              />;
    }


    return (
        <div className='min-w-60 max-w-full w-40 '>
            {props.hasIcon === true ? handleShowIcon() : "<!-- no Icon -->"}
            <h3> {props.name} </h3>
            <p> {props.text} </p>
        </div>
    )

}

export default Review;