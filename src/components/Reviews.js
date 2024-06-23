import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: 'Sid Rupain',
    date: '4 months ago',
    rating: 4.0,
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
    ],
  },
  {
    name: 'Naruto Uzamaki',
    date: '8 months ago',
    rating: 5.0,
    text: 'It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    images: [
      'image1.jpg',
      'image2.jpg',
      'image3.jpg',
      'image4.jpg',
    ],
  },
];

const Reviews = () => {
  return (
    <div className="reviews">
        <h1>Reviews</h1>
      {reviews.map((review, index) => (
        <div className="review" key={index}>
          <div className="review-header">
            <span className="review-name">{review.name}</span>
            <span className="review-date">{review.date}</span>
          </div>
          <div className="review-rating">{review.rating} ★★★★</div>
          <div className="review-text">{review.text}</div>
          <div className="review-images">
            {review.images.map((image, index) => (
              <img key={index} src={image} alt={`Review ${index + 1}`} className="review-image" />
            ))}
          </div>
        </div>
      ))}
      <div className="review-link">
        <a href="#">Read all reviews</a>
      </div>
    </div>
  );
};

export default Reviews;
