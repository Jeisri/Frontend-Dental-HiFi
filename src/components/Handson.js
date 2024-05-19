import React from 'react';
import './Handson.css';

const Handson = () => {
  const handsons = [{
    date: "10 May 2024",
    price: "Rs 1000",
    timings: [
      "Mon-Fri : 10:00AM - 1:30PM",
      "Sat : 10:00AM - 12:30PM"
    ],
    topic: "X-ray Machine",
    learn: [
      "you will be learning 1",
      "you will be learning 2",
      "you will be learning 3",
    ]
  },{
    date: "11 May 2024",
    price: "Rs 2000",
    timings: [
      "Mon-Fri : 10:00AM - 1:30PM",
      "Sat : 10:00AM - 12:30PM"
    ],
    topic: "MRI Machine",
    learn: [
      "you will be learning 1",
      "you will be learning 2",
      "you will be learning 3",
    ]
  }];

  return (
    <div className='handson'>
      <h1>Handson Details</h1>
      {handsons.map((handson) => (
        <div className="topic">
          <h3>{handson.topic}</h3>
          <div className="topic-details">
            <div className="learn">
            <ul>
              {handson.learn.map((learn, index) => (
                <li key={index}>{learn}</li>
              ))}
            </ul>
            </div>
            <div className="details">
            <p>Date: {handson.date}</p>
            <p>Price: {handson.price}</p>
            {handson.timings.map((timing, index) => (
              <p key={index}>{timing}</p>
            ))}
            </div>
          </div>
        </div>
      ))}
      <button className="book">Book your slot</button>
    </div>
  );
}

export default Handson;
