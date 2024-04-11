import React from "react";
import "./Sponsors.css";

const Sponsors = () => {
    return (
        <section className="sponsors">
            <div className="sponsors-container">
                <p>
                    Thousands of organizations around the globe use Stack
                    Overflow for Teams
                </p>

                <span className="sponsor-gallery">
                    <img
                        src="/img/barkbox-alt.svg"
                        alt=""
                        className="img-gallery img-g1"
                    />
                    <img
                        src="/img/box-alt.svg"
                        alt=""
                        className="img-gallery img-g2"
                    />
                    <img
                        src="/img/philips-alt.svg"
                        alt=""
                        className="img-gallery img-g3"
                    />
                    <img
                        src="/img/verizon-media-alt.svg"
                        alt=""
                        className="img-gallery img-g4"
                    />
                </span>
            </div>
            ;
        </section>
    );
};

export default Sponsors;
