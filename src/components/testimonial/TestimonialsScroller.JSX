import React, { useState, useEffect } from 'react'; 
import SingleTestimonial1 from './SingleTestimonial1';  // Assuming this component is already defined

const TestimonialsScroller = () => {
    const testimonials = [
        {
            id: 1,
            ratings: 5,
            title: "The best service ever",
            text: "The quality of the academic writing I received was outstanding. The writers understood the complexities of my subject and delivered a paper that exceeded my expectations. I will definitely use their services again.",
            name: "Matthew J.n",
            designation: ""
        },
        {
            id: 2,
            ratings: 5,
            title: "Academic Writing",
            text: "I was struggling with my dissertation until I found this firm. Their academic writers are top-notch, providing me with a well-researched and perfectly structured paper. Highly recommended!",
            name: "Sarah M",
            designation: ""
        },
        {
            id: 3,
            ratings: 5,
            title: "Web Development Best service",
            text: "I needed a professional website for my business, and this firm delivered beyond my expectations. The web development team was creative, efficient, and the end result was a stunning website that has boosted my online presence.",
            name: "Lisa K.",
            designation: ""
        },
        {
            id: 4,
            ratings: 5,
            title: "SEO-Based Content Writing Best service",
            text: "The SEO content writing services have significantly improved my website's visibility. The content is engaging, and the keywords are well-integrated. I've seen a noticeable increase in traffic since working with this firm.",
            name: "Istiak Ahmed",
            designation: "Senior Consultant"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [slideIn, setSlideIn] = useState(true);

    useEffect(() => {
        // Interval to switch testimonials every 3 seconds
        const interval = setInterval(() => {
            setSlideIn(false);  // Slide out effect
            setTimeout(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
                setSlideIn(true);  // Slide in effect
            }, 500);  // 500ms for sliding transition
        }, 3000);  // 3-second interval for changing testimonials

        return () => clearInterval(interval);  // Cleanup interval on unmount
    }, [testimonials.length]);

    // Sliding effect with inline styles
    const slideStyle = {
        transform: slideIn ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.5s ease-in-out',  // Smooth transition for 500ms
        opacity: slideIn ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out'
    };

    return (
        <div style={{ width: '100%', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', width: `${testimonials.length * 100}%`, transition: 'transform 0.5s ease-in-out', transform: `translateX(-${currentIndex * 100}%)` }}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} style={{ width: '100%', flexShrink: 0 }}>
                        <SingleTestimonial1 testimonial={testimonial} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TestimonialsScroller;
