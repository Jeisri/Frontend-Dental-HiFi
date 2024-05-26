import "./Filters.css";

function Filters() {
  return (
    <div className="filters-hero">
      <div className="filter-heading">Filters</div>

      <div className="filters-specialist">
        <div className="specialist-heading">Specialist</div>

        <div className="general-dentist">
          <input type="radio" id="gen-dentist" name="specialists" value="General Dentist" />
          <label htmlFor="gen-dentist">General Dentist</label>
        </div>

        <div className="gum-specialist">
          <input type="radio" id="g-specialist" name="specialists" value="Gum Specialist" />
          <label htmlFor="g-specialist">Gum Specialist</label>
        </div>

        <div className="tooth-specialist">
          <input type="radio" id="t-specialist" name="specialists" value="Tooth Specialist" />
          <label htmlFor="t-specialist">Tooth Specialist</label>
        </div>
      </div>

      <div className="filters-fee">
        <div className="fee-heading">Fee</div>

        <div className="zero-fivehundered">
          <input type="radio" id="zero-to-fivehundred" name="fee" value="0-500" />
          <label htmlFor="zero-to-fivehundred">0-500</label>
        </div>

        <div className="fivehundered-thousand">
          <input type="radio" id="fivehundred-to-thousand" name="fee" value="500-1000" />
          <label htmlFor="fivehundred-to-thousand">500-1000</label>
        </div>

        <div className="thousand-twothousand">
          <input type="radio" id="thousand-to-twothousand" name="fee" value="1000-2000" />
          <label htmlFor="thousand-to-twothousand">1000-2000</label>
        </div>
      </div>

      <div className="filters-experience">
        <div className="experience-heading">Experience</div>

        <div className="three-plus">
          <input type="radio" id="three-plus" name="experience" value="3+" />
          <label htmlFor="three-plus">3+ Years</label>
        </div>

        <div className="five-plus">
          <input type="radio" id="five-plus" name="experience" value="5+" />
          <label htmlFor="five-plus">5+ Years</label>
        </div>

        <div className="ten-plus">
          <input type="radio" id="ten-plus" name="experience" value="10+" />
          <label htmlFor="ten-plus">10+ Years</label>
        </div>
      </div>

      <div className="customer-rating">
        <div className="customer-heading">Customer Ratings</div>

        <div className="five-rating">
          <input type="radio" id="five-rating" name="customerRating" value="5" />
          <label htmlFor="five-rating">5 Stars</label>
        </div>

        <div className="four-rating">
          <input type="radio" id="four-rating" name="customerRating" value="4" />
          <label htmlFor="four-rating">4 Stars & Up</label>
        </div>

        <div className="three-rating">
          <input type="radio" id="three-rating" name="customerRating" value="3" />
          <label htmlFor="three-rating">3 Stars & Up</label>
        </div>
      </div>
    </div>
  );
}

export default Filters;
