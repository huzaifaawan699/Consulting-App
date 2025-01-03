import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import ContactUsContent from '@/components/contact/ContactUsContent';
import React from 'react';

export const metadata = {
    title: "AJ -Cosnulting - Contact Us"
}

const ContactUs = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="contact-us" title="Contact Us">
                <ContactUsContent />
            </LayoutStyle7>
        </>
    );
};

export default ContactUs;