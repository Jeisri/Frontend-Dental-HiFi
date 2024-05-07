import React from 'react';
import './StarRating.css'; // Make sure to create this CSS file

const StarRating = ({ rating }) => {
    const totalStars = 5;
    let stars = [];

    // Create filled stars based on the rating
    for (let i = 0; i < totalStars; i++) {
        if (i < rating) {
            stars.push(<span key={i} className="star filled">&#9733;</span>); // Filled star
        } else {
            stars.push(<span key={i} className="star">&#9734;</span>); // Empty star
        }
    }

    return <div className="star-rating">{stars}</div>;
};

export default StarRating;
