import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import handleSmoothScroll from '../utilities/handleSmoothScroll';

const ServiceDetailsContent = ({ serviceInfo }) => {
    const { thumbFull, title } = serviceInfo;

    return (
        <>
            <div className="services-details-area overflow-hidden default-padding">
                <div className="container">
                    <div className="services-details-items">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                                <div className="thumb">
                                    <Image src={`/assets/img/service/${thumbFull}`} alt="Thumb" width={1460} height={782} />
                                </div>
                                <h2>{title}</h2>
                                <p>
                                    <strong>Market Research:</strong> We provide in-depth market research to help businesses understand industry trends and competitive landscapes for strategic planning.
                                </p>
                                <p>
                                    <strong>SEO Content Writing:</strong> Our team creates high-quality, SEO-optimized content to boost your online presence and drive targeted traffic.
                                </p>
                                <p>
                                    <strong>Thesis and Paper Proofreading:</strong> We offer expert proofreading and editing to ensure your academic papers are clear, accurate, and publish-ready.
                                </p>
                                <p>
                                    <strong>Business Web Apps:</strong> We develop tailored web applications, including online stores and digital tools, to enhance your business operations.
                                </p>
                                <p>
                                    <strong>Social Media Management:</strong> We manage your social media presence to promote products, engage customers, and build brand awareness.
                                </p>
                                <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="content">
                                                <h3>Included Services</h3>
                                                <ul className="feature-list-item">
                                                    <li>Consulting Service</li>
                                                    <li>24/7 Support</li>
                                                    <li>Marketing Strategies</li>
                                                    <li>Expert Team</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-7 col-md-6 mt-xs-30">
                                            <div className="content">
                                                <h3>Challenges</h3>
                                                <p>
                                                    We address common business challenges such as market competition and operational inefficiencies with actionable insights and solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3>Our Approach</h3>
                                <p>
                                    We focus on understanding your business needs and deliver tailored solutions to optimize performance and drive growth.
                                </p>
                            </div>

                            <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">
                                <div className="single-widget services-list-widget">
                                    <h4 className="widget-title">Marketing Services</h4>
                                    <div className="content">
                                        <ul>
                                            <li><Link href="#">Email Marketing</Link></li>
                                            <li className="current-item"><Link href="#">Growth Hacking</Link></li>
                                            <li><Link href="#">Lead Generation</Link></li>
                                            <li><Link href="#">SEO Services</Link></li>
                                            <li><Link href="#">Social Media Marketing</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="single-widget bg-dark quick-contact-widget text-light" style={{ backgroundImage: `url(/assets/img/shape/15.png)` }}>
                                    <div className="content">
                                        <h3>Need Help?</h3>
                                        <p>
                                            Call us or email us for assistance. We're here to connect you with a team member who can help.
                                        </p>
                                        <h2><a href="tel:+(012) 6679545">+60102926997</a></h2>
                                        <h4><a href="mailto:info@digital.com">academicassistant121@gmail.com</a></h4>
                                        <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact-us">Contact Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceDetailsContent;
