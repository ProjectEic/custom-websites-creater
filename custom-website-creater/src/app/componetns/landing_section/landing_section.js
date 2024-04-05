import React from 'react';

const Landing = (props) => {

    return (
        <main id="Landing" className="h-[92vh]">
            <div className="landingHeadline absolute bottom-5 left-5 p-5 bg-[--main-color] rounded-2xl max-w-[50%]">
                <h2 className="font-serif font-semibold font-size text-6xl tracking-wide pb-4">
                    {props.headline}
                </h2>
                <p className="text-gray-300">
                    {props.aboutText}
                </p>
            </div>
        </main>
    );
}

export default Landing;
