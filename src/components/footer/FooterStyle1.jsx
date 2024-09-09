import Image from 'next/image';
import React from 'react';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';

const FooterStyle1 = ({ shape, shapeClass, logo }) => {
    return (
        <>
            <footer className="bg-dark text-light">
                <div className="footer-shape">
                    <div className={`item ${shapeClass}`}>
                        {shape ? <Image src={shape} alt="Shape" /> : <Image src={shape7} alt="Shape" />}
                    </div>
                    <div className="item">
                        <Image src={shape9} alt="Shape" />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Link href="/">
                                        {logo ? <Image className="logo" src={logo} alt="Logo" /> : <Image className="logo" src={logoLight} alt="Logo" />}
                                    </Link>
                                    <p>
                                        Delivering excellence with every step. Join us in our journey to redefine industry standards.
                                    </p>
                                    <div className="opening-hours">
                                        <h5>Opening Hours</h5>
                                        <ul>
                                            <li>
                                                <span className="working-day">Monday – Friday:</span>
                                                <span className="working-hour">9am – 6pm</span>
                                            </li>
                                            <li>
                                                <span className="working-day">Saturday:</span>
                                                <span className="working-hour">10am – 4pm</span>
                                            </li>
                                            <li>
                                                <span className="working-day">Sunday:</span>
                                                <span className="working-hour">Closed</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Our Services</h4>
                                    <ul>
                                        <li>
                                            <Link href="/services-details/1">Investment Management</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/2">Business Planning</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/3">Financial Advice</Link>
                                        </li>
                                        <li>
                                            <Link href="/services-details/4">Insurance Strategy</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <div className="f-item social">
                                    <h4 className="widget-title">Follow Us</h4>
                                    <p>Stay connected through our social platforms for the latest updates.</p>
                                    <ul className="footer-social">
                                        <SocialShare />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; {(new Date().getFullYear())}. All Rights Reserved.</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li>
                                        <Link href="/terms">Terms</Link>
                                    </li>
                                    <li>
                                        <Link href="/privacy">Privacy</Link>
                                    </li>
                                    <li>
                                        <Link href="/support">Support</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;
