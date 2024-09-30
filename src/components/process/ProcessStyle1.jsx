import React from 'react';
import shape11 from '@/assets/img/shape/11.png'
import Image from 'next/image';
import Process1Data from '@/assets/jsonData/process/Process1Data.json'
import SingleProcess1 from './SingleProcess1';

const ProcessStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`process-style-one-area text-center default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="large-shape">
                    <Image src={shape11} alt="Shape" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h2 className="sub-heading">How we Are <br />  different from others</h2>
                                <h2 className="title"> </h2>
                                <div className="devider"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        {Process1Data.map(process =>
                            <div className="col-lg-4" key={process.id}>
                                <SingleProcess1 process={process} key={process.id} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessStyle1;