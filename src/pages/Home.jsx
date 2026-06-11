import React from 'react';
import '../assets/home.css'; // Import the styles we just created

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="p-5 text-white" style={{ height: '600px', backgroundColor: '#004225', marginTop: '10px', pointerEvents: 'none' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-4">WhiteLeaf Agri</h1>
              <p className="lead mb-4" style={{ textAlign: 'justify' }}>
                At WhiteLeaf Agri, we cultivate premium vegetables in our state-of-the-art greenhouses using advanced growing techniques. Our specialized growing methods ensure exceptional quality, taste, and nutritional value in every harvest. From farm to table, we deliver fresh, sustainably grown vegetables directly to your doorstep. Experience the superior flavor and freshness of our carefully nurtured produce while supporting local, sustainable agriculture.
              </p>
            </div>
            <div className="col-lg-6">
              <img src={`${import.meta.env.VITE_CDN_URL}/images/logo.png`} alt="WhiteLeaf Agri Greenhouse" className="img-fluid rounded no-shadow" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-3" style={{ marginTop: '-120px' }}>
              <div className="card feature-card border-0 text-white shadow" style={{ backgroundColor: '#004225', height: '250px' }}>
                <div className="card-body text-center p-4 d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-flower1 mb-4 icon-large"></i>
                  <h5 className="card-title">Fresh Produce</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: '-120px' }}>
              <div className="card feature-card border-0 text-white shadow" style={{ backgroundColor: '#004225', height: '250px' }}>
                <div className="card-body text-center p-4 d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-droplet-fill mb-4 icon-large"></i>
                  <h5 className="card-title">Hydroponic Growth</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: '-120px' }}>
              <div className="card feature-card border-0 text-white shadow" style={{ backgroundColor: '#004225', height: '250px' }}>
                <div className="card-body text-center p-4 d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-truck mb-4 icon-large"></i>
                  <h5 className="card-title">Fast Delivery</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3" style={{ marginTop: '-120px' }}>
              <div className="card feature-card border-0 text-white shadow" style={{ backgroundColor: '#004225', height: '250px' }}>
                <div className="card-body text-center p-4 d-flex flex-column justify-content-center align-items-center">
                  <i className="bi bi-heart-fill mb-4 icon-large"></i>
                  <h5 className="card-title">Quality Assured</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br /><br />

      {/* Double Image Carousel Section */}
      <section className="carousel-section">
        <div className="container-fluid px-0">
          <div className="row g-0 align-items-center">
            {/* Left Column */}
            <div className="col-md-6">
              <div id="carouselLeft" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: '562px', height: '550px', marginLeft: '70px', pointerEvents: 'none' }}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={`${import.meta.env.VITE_CDN_URL}/images/bw_greenhouse1.png`} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/images/bw_greenhouse2.png`} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/images/bw_greenhouse3.png`} alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/images/bw_greenhouse4.jpg`} alt="Fourth slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/images/bw_greenhouse5.png`} alt="Fifth slide" />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="col-md-6">
              <div id="carouselRight" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ width: '562px', height: '550px', marginRight: '10px', pointerEvents: 'none' }}>
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={`${import.meta.env.VITE_CDN_URL}/grcards/teagreen 2.jpg`} alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/grcards/aspharagus 2.jpg`} alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/grcards/laurelgreen 2.jpg`} alt="Third slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/grcards/palespringbud 2.jpg`} alt="Fourth slide" />
                  </div>
                  <div className="carousel-item">
                    <img src={`${import.meta.env.VITE_CDN_URL}/grcards/boredaccentgreen 2.jpg`} alt="Fifth slide" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br /><br />

      {/* Text Carousel Section */}
      <div className="containertext mt-5 mb-5">
        <div id="textCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{ marginLeft: '70px', marginRight: '70px' }}>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="card" style={{ backgroundColor: '#1a222d', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div className="card-body p-4 text-white">
                  <h3 className="mb-4 fw-bold">What is Organic farming</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Organic farming is an agricultural method that relies on natural processes, avoiding the use of synthetic chemicals like pesticides, fertilizers, and genetically modified organisms (GMOs). Instead, it uses organic inputs such as compost, green manure, and biological pest control to grow crops and raise livestock. This approach emphasizes sustainability, soil health, and environmental balance. Organic farming also avoids the use of hormones or antibiotics in animals, focusing on their natural growth and well-being.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card" style={{ backgroundColor: '#1a222d', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div className="card-body p-4 text-white">
                  <h3 className="mb-4 fw-bold">What is Greenhouse farming</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Greenhouse farming is a method of growing plants in a controlled environment made of structures like glass or plastic. These greenhouses trap sunlight to create a warm atmosphere, protecting crops from harsh weather conditions such as heavy rain, strong winds, or extreme temperatures. Farmers can regulate factors like temperature, humidity, light, and water, allowing crops to grow throughout the year, regardless of seasonal changes.
                  </p>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="card" style={{ backgroundColor: '#1a222d', borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                <div className="card-body p-4 text-white">
                  <h3 className="mb-4 fw-bold">What is Hydroponic farming</h3>
                  <p style={{ textAlign: 'justify', lineHeight: '1.6' }}>
                    Hydroponics farming is a method of growing plants without soil. Instead, plants are grown in nutrient-rich water solutions, often supported by materials like clay pebbles or coconut husks. This innovative farming technique allows crops to absorb essential nutrients directly from the water, promoting faster growth and higher yields. Hydroponics systems are often set up indoors or in greenhouses, where factors like light, temperature, and humidity can be controlled.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <button className="carousel-control-prev" type="button" data-bs-target="#textCarousel" data-bs-slide="prev" style={{ width: '5%' }}>
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#textCarousel" data-bs-slide="next" style={{ width: '5%' }}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>

          <div className="carousel-indicators" style={{ bottom: '-50px' }}>
            <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="0" className="active bg-dark" aria-current="true"></button>
            <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="1" className="bg-dark"></button>
            <button type="button" data-bs-target="#textCarousel" data-bs-slide-to="2" className="bg-dark"></button>
          </div>
        </div>
      </div>

      {/* 4 Column Mini Carousels */}
      <div className="container4 mt-5 mb-5" style={{ marginLeft: '90px', pointerEvents: 'none' }}>
        <section className="carousel-section2">
          <div className="container-fluid">
            <div className="row align-items-center">
              
              <div className="col-md-3">
                <div id="demo1" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/bellpepper.png`} alt="bellpepper" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/blueberry.png`} alt="blueberry" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/cauliflower.png`} alt="cauliflower" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/celery.png`} alt="celery" /></div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div id="demo2" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/cucumber.png`} alt="cucumber" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/eggplant.png`} alt="eggplant" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/lecctuce.png`} alt="lettuce" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/microgreen.png`} alt="microgreen" /></div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div id="demo3" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/mint.png`} alt="mint" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/mushroom1.png`} alt="mushroom" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/mushroom2.png`} alt="mushroom" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/orange.png`} alt="orange" /></div>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div id="demo4" className="carousel slide carousel-fade" data-bs-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/raspberries.png`} alt="raspberries" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/spinach.png`} alt="spinach" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/squash.png`} alt="squash" /></div>
                    <div className="carousel-item"><img src={`${import.meta.env.VITE_CDN_URL}/4carousel/tomatoes.png`} alt="tomatoes" /></div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Home;