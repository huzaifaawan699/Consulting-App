import Image from 'next/image';
import React from 'react';
import SocialShare from '../utilities/SocialShare';

const ProjectDetailsContent = ({ projectInfo }) => {
    const { thumbFull, projectData } = projectInfo

    return (
        <>
            <div className="project-details-area default-padding">
                <div className="container">
                    <div className="project-details-items">
                        <div className="thumb">
                            <Image src={`/assets/img/gallery/${thumbFull}`} alt="Thumb" width={1920} height={825} />
                        </div>
                        <div className="top-info">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 order-lg-last right-info">
                                    <div className="project-info mt-15" style={{ backgroundImage: `url(/assets/img/shape/41.png)` }}>
                                        <h4 className="title">Project Info</h4>
                                        <ul>
                                            <li>
                                                Client <span>bezack@gmail.com</span>
                                            </li>
                                            <li>
                                                Date <span>25 February, 2022</span>
                                            </li>
                                            <li>
                                                Address <span>George town , Malaysia</span>
                                            </li>
                                        </ul>
                                        <ul className="social">
                                            <SocialShare />
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-8 col-lg-7 pr-35 pr-md-15 pr-xs-15 left-info mt-md-10">
                                    <h2>AJ.Solution</h2>
                                    <p>
                                    AJ-Consultants specializes in delivering innovative solutions across various domains, including PhD and MS thesis projects, SEO-friendly web content, AI web applications, and e-commerce store development. Our team assists students and researchers in navigating complex academic requirements, offering guidance on research methodologies, data analysis, and presentation techniques to enhance their thesis quality. In the digital landscape, we create SEO-friendly web content that improves visibility and engagement, employing best practices in keyword optimization and user experience design. Additionally, our expertise in developing AI-driven web applications and responsive e-commerce platforms ensures businesses provide seamless, user-friendly experiences across all devices. We prioritize enhancing customer interactions through intelligent solutions that drive conversions and streamline operations. Furthermore, AJ-Consultants provides comprehensive consulting services tailored to meet the unique needs of each client. Our experienced consultants offer strategic planning, operational insights, and hands-on support to help organizations overcome challenges and achieve their goals. By combining our deep industry knowledge with a commitment to excellence, AJ-Consultants empowers businesses and individuals to realize their full potential in a competitive environment.
                                    </p>
                                    <ul className="check-list">
                                        {projectData.map(list =>
                                            <li key={list.id}>
                                                <h4>{list.title}</h4>
                                                <p>{list.info}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="main-content">
                            <p>
                            One of the key advantages of consulting services is their ability to deliver specialized expertise in areas like marketing, operations, technology, and financial management. Consultants not only identify areas for improvement but also provide actionable recommendations to solve complex problems. Moreover, they assist in the implementation of these strategies, ensuring that businesses can execute their plans effectively and see tangible results. </p>
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <Image src="/assets/img/gallery/3.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <Image src="/assets/img/gallery/6.jpg" alt="Thumb" width={800} height={600} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectDetailsContent;