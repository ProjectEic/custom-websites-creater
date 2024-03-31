import React from 'react';

const Landing = (props) => {

    return (
        <main id="Landing" className="h-90vh">
            <div className="landingHeadline absolute bottom-5 left-5 p-3 bg-violet-800 rounded-2xl max-w-[33%]">
                <h2 className="font-serif font-semibold leading-relaxed font-size text-6xl tracking-widest">
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
