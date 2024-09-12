import Image from 'next/image';
import React from 'react';
import shape17 from '@/assets/img/shape/17.png'

const ChooseStyle1 = () => {
    return (
        <>
            <div className="choose-us-style-one-area default-padding text-light">
                <div className="cover-bg" style={{ backgroundImage: `url(/assets/img/banner/7.jpg)` }}></div>
                <div className="shape-left-top">
                    <Image src={shape17} alt="Shape" />
                </div>
                <div className="text-invisible">AJ</div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 pr-80 pr-md-15 pr-xs-15">
                            <div className="choose-us-style-one">
                                <h2 className="title mb-35">Be at the forefront of the new innovation</h2>
                                <ul className="list-item">
                                    <li className="wow fadeInUp">
                                        <h4>Best Consulting </h4>
                                        <p>
                                        We provide expert consulting with personalized solutions, ensuring high-quality service, thorough research, and exceptional results for every client.
                                        </p>
                                    </li>
                                    <li className="wow fadeInUp" data-wow-delay="300ms">
                                        <h4>24/7 Customer Support </h4>
                                        <p>
                                        Our firm offers unwavering support, day and night,Ensuring help is there, whenever you might require it.For academics and professionals alike,Our 24/7 customer service is a beacon of reliability.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChooseStyle1;