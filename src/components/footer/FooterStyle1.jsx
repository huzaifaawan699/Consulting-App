import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import shape7 from '@/assets/img/shape/7.png';
import shape9 from '@/assets/img/shape/9.png';
import logoLight from '@/assets/img/logo-light.png';
import SocialShare from '../utilities/SocialShare';
import Whatsapp from '../whatsapp/Whatsapp';

const FooterStyle1 = ({ shape, shapeClass, logo }) => {
  return (
    <>
      <footer className="bg-dark text-light">
        {/* Footer Shape */}
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
              {/* About Section */}
              <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                <div className="f-item about">
                  <Link href="/">
                    {logo ? <Image className="logo" src={logo} alt="Logo" /> : <Image className="logo" src={logoLight} alt="Logo" />}
                  </Link>
                  <p>
                    Delivering excellence in every step. Join us in shaping the future with innovative solutions.
                  </p>
                  <p>We provide 24/7 customer service to meet your needs anytime, anywhere.</p>
                </div>
              </div>

              {/* Our Services Section */}
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Our Services</h4>
                  <ul>
                    <li>
                      <Link href="/services-details/1">Content Writing</Link>
                    </li>
                    <li>
                      <Link href="/services-details/2">Digital Marketing</Link>
                    </li>
                    <li>
                      <Link href="/services-details/3">Web Development</Link>
                    </li>
                    <li>
                      <Link href="/services-details/4">SEO Optimization</Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Contact Section */}
              <div className="col-lg-2 col-md-6 footer-item">
                <div className="f-item link">
                  <h4 className="widget-title">Contact Us</h4>
                  <ul>
                    <li>Email: <Link href="mailto:info@example.com">academicassistant121@gmail.com</Link></li>
                    <li>Phone: <Link href="tel:+1234567890">+60102926997</Link></li>
                    <li>Address: SIBC Seri Iskandar Town, Perak, Malaysia
                  </li>
                  </ul>
                </div>
              </div>

              {/* Follow Us Section */}
              <div className="col-lg-4 col-md-6 footer-item">
                <div className="f-item social">
                  <h4 className="widget-title">Follow Us</h4>
                  <p>Stay connected through our social platforms for the latest updates.</p>
                  <ul className="footer-social">
                    <SocialShare />
                  </ul>
                </div>

                {/* Newsletter Subscription */}
                <div className="f-item newsletter mt-4">
                  <h4 className="widget-title">Subscribe to Our Newsletter</h4>
                  <form action="#" method="post">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit" className="btn btn-primary">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <p>&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
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

      {/* Add WhatsApp button */}
      <Whatsapp />
    </>
  );
};

export default FooterStyle1;
