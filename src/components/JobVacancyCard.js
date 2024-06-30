import React from 'react';
import './JobVacancyCard.css';

const JobVacancyCard = () => {
  const vacancyDetails = {
    vname: "vacany1",
    cname: "clinic1",
    location: "Navi mumbai, Maharashtra",
    poster: "Dr. Sachin Bansal",
    responsibilities: "Perform dental procedures such as fillings, extractions, root canals, diagnose and treat oral diseases, educate patients on oral health.",
    qualifications: "Licensed dentist, DDS or DMD degree, experience in general dentistry practice.",
    days: "3 days",
    schedule: "August 13 to August 15",
    price: "3,000"
  }

  return (
    <div className="job-vacancy-card">
      <div className="job-header">
        <div className="job-container">
          <div className="job-logo">Logo</div>
          <div className="job-details">
            <h2>{vacancyDetails.vname} | {vacancyDetails.cname}</h2>
            <p>{vacancyDetails.location}</p>
          </div>
        </div>
        <div className="job-poster">
          <p>Posted by: {vacancyDetails.poster}</p>
        </div>
      </div>
      <div className="job-body">
        <ul className="job-responsibilities">
          <li><strong>Responsibilities: </strong>
          {vacancyDetails.responsibilities}</li>
        </ul>
        <ul className="job-qualifications">
          <li><strong>Qualifications: </strong>
          {vacancyDetails.qualifications}</li>
        </ul>
        <div className="job-details-bottom">
          <div className="job-duration">
            <i class="fa-regular fa-calendar-days"></i> 
            <span role="img">
              {vacancyDetails.days} ( {vacancyDetails.schedule} )
            </span>
            <i class="fa-regular fa-money-bill-1"></i> 
            <span role="img">
              ₹{vacancyDetails.price} + Incentive
            </span>
          </div>
        </div>
        <div className="job-container">
          <span role="img" className="days-ago">
            <i class="fa-regular fa-clock"></i>
            2 days ago
          </span>
          <button className="apply-button">APPLY</button>
        </div>
      </div>
    </div>
  );
}

export default JobVacancyCard;
