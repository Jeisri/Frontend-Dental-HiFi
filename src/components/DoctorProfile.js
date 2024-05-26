import React from 'react';
import './DoctorProfile.css';

const reviews = [
  {
    id: 1,
    profilePhoto: 'https://via.placeholder.com/50',
    name: 'John Doe',
    reviewTime: '2 days ago',
    reviewText: 'This is an awesome product! I really like the build quality and the performance.',
    productImages: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ]
  },
  {
    id: 2,
    profilePhoto: 'https://via.placeholder.com/50',
    name: 'Jane Smith',
    reviewTime: '1 week ago',
    reviewText: 'Great product! It met all my expectations and the customer service was excellent.',
    productImages: [
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150',
      'https://via.placeholder.com/150'
    ]
  }
];

const ProductReviews = () => {
  return (
    <div className="reviews-container">
      {reviews.map(review => (
        <div key={review.id} className="review">
          <div className="review-header">
            <img src={review.profilePhoto} alt={`${review.name}'s profile`} className="profile-photo" />
            <div className="review-info">
              <span className="review-name">{review.name}</span>
              <span className="review-time">{review.reviewTime}</span>
            </div>
          </div>
          <div className="review-text">
            {review.reviewText}
          </div>
          <div className="review-images">
            {review.productImages.map((image, index) => (
              <img key={index} src={image} alt="Product" className="product-image" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductReviews;
