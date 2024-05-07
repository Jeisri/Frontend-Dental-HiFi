import "./Footer.css";

function Footer() {
  return (
    <div className="footer-hero">
      <div className="footer-box">
        <div id="customers-services" className="column-1">
          <div>
            <h2>Customers Services</h2>
          </div>
          <div>
            <a id="help-faqs" href="#">
              Help/FAQS
            </a>
          </div>
          <div>
            <a id="press" href="#">
              Press
            </a>
          </div>
          <div>
            <a id="blog" href="#">
              Blog
            </a>
          </div>
          <div>
            <a id="contact-us" href="#">
              Contact Us
            </a>
          </div>
        </div>
        <div id="company" className="column-2">
          <div>
            <h2>Company</h2>
          </div>
          <div>
            <a id="about-us" href="#">
              About Us
            </a>
          </div>
          <div>
            <a id="career" href="#">
              Career
            </a>
          </div>
          <div>
            <a id="report-grievance" href="#">
              Report & Grievance
            </a>
          </div>
        </div>

      
      </div>
     <div className="horizontal-line"></div>
     <div className="social-media">

       <div className="copy-Rights" text-align="center">
       DENTALHIFI © 2024 ALL RIGHTS RESERVED
       </div>
        
        <div className="medias">
        <a href="#" id="icon-1"><i class="fab fa-linkedin"></i></a>
      <a href="#"  id="icon-2"><i class="fab fa-twitter"></i></a>
      <a href="#"  id="icon-3"><i class="fab fa-instagram"></i></a>
        </div>
     </div>
    </div>
  );
}

export default Footer;
