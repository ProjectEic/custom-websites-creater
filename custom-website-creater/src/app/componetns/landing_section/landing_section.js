"use-client"
import React from 'react';

const Landing = (props) => {

    

    return (
        <main id="Landing">
            <div className="landingHeadline p-5">
                <h2 className="font-serif font-semibold leading-loose font-size text-6xl tracking-widest">
                    {props.headline}
                </h2>
                <p className="text-gray-300">
                    {props.aboutText}
                </p>
            </div>

        </main>
    )

}

export default Landing;
