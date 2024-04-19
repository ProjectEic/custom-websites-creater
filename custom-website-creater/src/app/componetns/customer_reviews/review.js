"use-client"
import React, {useState} from "react"
import Image from "next/image";

const Review = (review) => {

      
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const toggleLightbox = () => {
        setLightboxOpen(!lightboxOpen);
    }

    const handleShowIcon = () => {
        return <Image
                width={50}
                height={50}
                src={"https://google.com/placeholder_img.png"}
                alt={review.name + " icon"}
                className="object-contain border border-white rounded"
              />;
    }
    const reviewName = review.name.length > 50 ? review.name.slice(0, 50) + '...' : review.name;
    const reviewText = review.text.length > 150 ? review.text.slice(0, 150) + '...' : review.text;

    return (
        // TODO: create lightbox to show entire text of the customer
        <div className="p-10 bg-[var(--third-color)] rounded-2xl" onClick={toggleLightbox}>
            {review.hasIcon === true ? handleShowIcon() : ""}
            <h3 className="font-semibold text-3xl pr-4 text-[var(--surface-color)]"> {reviewName} </h3>
            <p className="text-gray-500 py-2 text-lg font-normal"> {reviewText} </p>
            {lightboxOpen && (
                <div className="fixed z-40 inset-0 flex-col bg-black bg-opacity-90 w-100 h-100 px-[10vw] py-[20vh]">   
                    <div className="p-4 rounded-md bg-[var(--main-color)] h-full">
                        {review.hasIcon ? handleShowIcon(review.name) : <div className=""></div>}    
                        <h3 className="font-semibold text-3xl pr-4 text-[var(--main-color)]"> {reviewName} </h3>
                        <p className="text-gray-500 py-2 text-lg font-normal"> {reviewText} </p>
                    </div>
                </div>
            )}
        </div>
    )

}

export default Review;