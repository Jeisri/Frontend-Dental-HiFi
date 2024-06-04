import React from 'react';
import './RatingPage.css';
import Reviews from './Reviews';  // Import the Reviews component

const RatingPage = () => {
  const styles = {
    container: {
      display: 'flex',
      justifyContent: 'center',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
    },
    left: {
      flex: 3,
      padding: '20px',
    },
    right: {
      flex: 1,
      padding: '20px',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '30px',
      
      backgroundColor: '#fff',
    },
    rating: {
      fontSize: '48px',
      fontWeight: 'bold',
      marginBottom: '2px',
      color: 'black',
    },
    stars: {
      display: 'flex',
      marginBottom: '2px',
    },
    star: {
      fontSize: '32px',
      color: '#ffd700',
      margin: '0 1px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      WebkitTextStroke: '1px black',
    },
    halfStar: {
      position: 'relative',
      display: 'inline-block',
      fontSize: '32px',
      margin: '0 1px',
      color: '#d3d3d3',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)',
      WebkitTextStroke: '1px black',
    },
    halfStarOverlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '50%',
      overflow: 'hidden',
      color: '#ffd700',
      WebkitTextStroke: '1px black',
    },
    ratingsText: {
      fontSize: '18px',
      color: '#555',
      marginBottom: '15px',
      fontWeight: 'bold',
    },
    progressBarContainer: {
      width: '100%',
      marginBottom: '9px',
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
    },
    progressBar: {
      flexGrow: 1,
      height: '5px',
      borderRadius: '10px',
      backgroundColor: '#f0f0f0',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
      overflow: 'hidden',
      position: 'relative',
      marginRight: '10px',
      border: '1px solid #000',
    },
    progress: {
      height: '100%',
      borderRadius: '10px 0 0 10px',
      backgroundColor: '#067bda',
      transition: 'width 1s ease-in-out',
    },
    progressText: {
      color: '#000',
      fontWeight: 'bold',
    },
    buttonContainer: {
      marginTop: '10px',
    },
    buttonRow: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: '5px',
    },
    button: {
      padding: '10px',
      margin: '5px',
      borderRadius: '20px',
      border: '1px solid #000',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      color: 'black',
    },
    greenButton: {
      backgroundColor: '#f0f0f0',
      fontWeight: 'bold',
    },
    greenNumber: {
      color: 'darkgreen',
    },
    smallButton: {
      padding: '5px',
      fontSize: '14px',
    },
  };

  const renderStars = () => {
    const fullStars = Math.floor(4.5);
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} style={styles.star}>★</span>);
    }

    stars.push(
      <span key="half" style={styles.halfStar}>
        ★
        <span style={styles.halfStarOverlay}>★</span>
      </span>
    );

    for (let i = fullStars + 1; i < 5; i++) {
      stars.push(<span key={i} style={styles.star}>☆</span>);
    }

    return stars;
  };

  const renderProgressBars = () => {
    const progressData = [
      { rating: 5.0, reviews: 17, width: '70%' },
      { rating: 4.0, reviews: 22, width: '85%' },
      { rating: 3.0, reviews: 2, width: '30%' },
      { rating: 2.0, reviews: 2, width: '60%' },
      { rating: 1.0, reviews: 3, width: '15%' },
    ];

    return progressData.map((data, index) => (
      <div key={index} style={styles.progressBarContainer}>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progress, width: data.width }}></div>
        </div>
        <span style={styles.progressText}>{`${data.rating} (${data.reviews} reviews)`}</span>
      </div>
    ));
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <Reviews />  {/* Use the Reviews component */}
      </div>
      <div style={styles.right}>
        <div style={styles.box}>
          <div style={styles.rating}>4.5</div>
          <div style={styles.stars}>{renderStars()}</div>
          <div style={styles.ratingsText}>55 ratings</div>
          {renderProgressBars()}
          <div style={styles.buttonContainer}>
            <div style={styles.buttonRow}>
              <button style={{ ...styles.button, ...styles.greenButton }}>
                <span style={styles.greenNumber}>4.0</span> Cleanliness
              </button>
              <button style={{ ...styles.button, ...styles.greenButton }}>
                <span style={styles.greenNumber}>4.0</span> Staff
              </button>
            </div>
            <button style={{ ...styles.button, ...styles.greenButton, ...styles.smallButton }}>
              <span style={styles.greenNumber}>5.0</span> Behavior
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RatingPage;
