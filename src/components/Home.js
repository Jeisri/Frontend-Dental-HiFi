import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Footer from './Footer';
import Filters from './Filters';
import SearchButton from './SearchButton';
import './Home.css';


const Home = () => {
  const slides = [
    { url: 'https://media.istockphoto.com/id/1253875335/photo/connaught-place-with-national-flag.jpg?s=1024x1024&w=is&k=20&c=hhlMspWhlMWhPjfM__w0PJfBHF_9sBKByFjYc8wT2Nw=', description: 'Description of Event 1', rating: '4.5 (205)'},
    { url: 'https://media.istockphoto.com/id/1027005714/photo/marine-drive-mumbai.jpg?s=1024x1024&w=is&k=20&c=_RZT1I6Horj8m_X0gTs2LqWyz2BsurqsJVYyV4OMoKY=', description: 'Description of Event 2', rating: '4.2 (150)' },
    { url: 'https://media.istockphoto.com/id/1206421561/photo/sunset-traffic-in-new-delhi-tuc-tuc-cars-on-the-road-to-the-presidential-residance.jpg?s=1024x1024&w=is&k=20&c=OgA5TTVvlMvoQYNR9kPvFGG7E81fTXoc6SatpiY0nuo=', description: 'Description of Event 3', rating: '4.1 (187)' },
  ];





  return (
    <div className="Home">  
      <header className="Home-header">
        <Header />
      </header>
      <main>
        <h1>Browse Events</h1>
        <SearchButton />

        <section>
          <h3>Delhi</h3>
          <Slider slides={slides} />
        </section>
        <br />

        <section>
          <h3>Mumbai</h3>
          <Slider slides={slides} />
        </section>
        <br />

        <section>
          <h3>Pune</h3>
          <Slider slides={slides} />
        </section>
        <br />
      </main>

      <Footer />
      
    </div>
  );
}

export default Home;
