"use-client"
import React from "react"
import Image from "next/image";

const Review = (review) => {


    const handleShowIcon = () => {
        return <Image
                width={50}
                height={50}
                src={"https://google.com/placeholder_img.png"}
                alt={review.name + " icon"}
                className="object-contain border border-white rounded"
              />;
    }


    return (
        <div className="p-8 bg-[var(--third-color)] rounded-2xl">
            {review.hasIcon === true ? handleShowIcon() : ""}
            <h3 className="font-semibold text-3xl pr-4 text-[var(--onThird-color)]"> {review.name} </h3>
            <p className="text-gray-500 py-2 text-lg font-normal"> {review.text} </p>
        </div>
    )

}

export default Review;