import React from 'react';

const Carousel = () => {
  return (
    <div>
        <div id="coverId" className="carousel slide" data-ride="carousel">
          {/* Indicators */}
          <ul className="carousel-indicators">
            <li data-target="#coverId" data-slide-to={0} className="active" />
            <li data-target="#coverId" data-slide-to={1} />
            <li data-target="#coverId" data-slide-to={2} />
          </ul>
          {/* The slideshow */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src='img/slide_1.jpg' alt="Los Angeles" width={'100%'} height={500} />
            </div>
            <div className="carousel-item">
              <img src='img/slide_2.jpg' alt="Chicago" width={'100%'} height={500} />
            </div>
            <div className="carousel-item">
              <img src='img/slide_3.jpg' alt="Chicago" width={'100%'} height={500} />
            </div>
          </div>
          {/* Left and right controls */}
          <a className="carousel-control-prev" href="#coverId" data-slide="prev">
            <span className="carousel-control-prev-icon" />
          </a>
          <a className="carousel-control-next" href="#coverId" data-slide="next">
            <span className="carousel-control-next-icon" />
          </a>
        </div>
    </div>

  );
};

export default Carousel;