import React from 'react'; 
import RatingsStar from '../utilities/RatingsStar';

const SingleTestimonial1 = ({ testimonial, slideStyle }) => {
    const { ratings, title, text, name, designation } = testimonial;

    return (
        <div style={{ ...slideStyle, padding: '20px', textAlign: 'center' }}>
            <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div>
                    <RatingsStar ratings={ratings} />
                </div>
                <h2 style={{ fontSize: '24px', margin: '10px 0' }}>{title}</h2>
                <p style={{ fontStyle: 'italic' }}>{`“${text}”`}</p>
                <div>
                    <h4 style={{ margin: '10px 0 0' }}>{name}</h4>
                    <span style={{ color: '#555' }}>{designation}</span>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial1;
