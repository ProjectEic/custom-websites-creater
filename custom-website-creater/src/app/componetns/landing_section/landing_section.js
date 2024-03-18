"use-client"
import React from 'react';

const Landing = (props) => {

    

    return (
        <main>
            <div className="landingHeadline">
                <h2 className="font-semibold leading-loose">
                    {props.headline}
                </h2>
                <p>
                    {props.aboutText}
                </p>
            </div>
        </main>
    )

}

export default Landing;
