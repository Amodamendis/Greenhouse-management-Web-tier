import React from 'react';
import '../assets/gallery.css'; // Import the specific gallery layout styles

const Gallery = () => {
  return (
    <div className="page-wrapper">
      <main className="main-content">
        <div className="gallery-container">
          {/* First Row */}
          <div id="item1" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/1.jpg`} alt="Seeds of Tomorrow" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Seeds of Tomorrow</div>
                <div className="description">Young plants being carefully nurtured in greenhouse starter trays</div>
              </div>
            </div>
          </div>

          <div id="item2" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/2.jpg`} alt="Crimson Harvest" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Crimson Harvest</div>
                <div className="description">Fresh red berries gathered in bright yellow collection basket</div>
              </div>
            </div>
          </div>

          <div id="item3" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/3.jpg`} alt="Hydroponic Highway" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Hydroponic Highway</div>
                <div className="description">Long rows of modern hydroponic systems stretching into distance</div>
              </div>
            </div>
          </div>

          <div id="item4" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/4.jpg`} alt="Vine Ripened Glory" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Vine Ripened Glory</div>
                <div className="description">Cluster of perfectly ripe tomatoes growing on healthy vine</div>
              </div>
            </div>
          </div>

          {/* Video Item */}
          <div id="item5" className="gallery-item video-item">
            <video controls>
              <source src="/gallery/v1.mp4" type="video/mp4" />
            </video>
          </div>

          <div id="item6" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/5.jpg`} alt="Greenhouse Expanse" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Greenhouse Expanse</div>
                <div className="description">Wide view of commercial greenhouse with organized growing rows</div>
              </div>
            </div>
          </div>

          <div id="item7" className="gallery-item" style={{ marginTop: '30px' }}>
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/6.jpg`} alt="Industrial Rhythm" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Industrial Rhythm</div>
                <div className="description">Stacked pipes creating pattern in hydroponic growing system</div>
              </div>
            </div>
          </div>

          <div id="item8" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/7.jpg`} alt="Drone view" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Drone view</div>
                <div className="description">Drone view from sky at a summer day</div>
              </div>
            </div>
          </div>

          {/* Video Item */}
          <div id="item9" className="gallery-item video-item">
            <video controls>
              {/* Note: The old PHP had GALLERY/V3.mp4 with caps. Adjusting to lowercase for consistency, but if your file is actually uppercase, change this back to match */}
              <source src="/gallery/v3.mp4" type="video/mp4" />
            </video>
          </div>

          <div id="item10" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/8.jpg`} alt="Gentle Touch" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Gentle Touch</div>
                <div className="description">Gloved hands carefully tending to rich soil in garden</div>
              </div>
            </div>
          </div>

          <div id="item11" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/10.jpg`} alt="Golden Bounty" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Golden Bounty</div>
                <div className="description">Hands holding fresh yellow produce in greenhouse setting</div>
              </div>
            </div>
          </div>``

          <div id="item12" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/9.jpg`} alt="Lettuce Array" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Lettuce Array</div>
                <div className="description">Precise rows of lettuce growing in white hydroponic setup</div>
              </div>
            </div>
          </div>

          <div id="item13" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/11.jpg`} alt="Farmer's Companion" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Farmer's Companion</div>
                <div className="description">Muddy boots resting beside flourishing red pepper plant</div>
              </div>
            </div>
          </div>

          {/* Video Item */}
          <div id="item14" className="gallery-item video-item">
            <video controls>
              <source src="/gallery/v2.mp4" type="video/mp4" />
            </video>
          </div>

          <div id="item15" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/12.jpg`} alt="Greenhouse Twilight" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Greenhouse Twilight</div>
                <div className="description">Moody evening view of greenhouse with string lights</div>
              </div>
            </div>
          </div>

          <div id="item16" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/13.jpg`} alt="Green Abundance" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Green Abundance</div>
                <div className="description">Lush leafy greens thriving in modern greenhouse environment</div>
              </div>
            </div>
          </div>

          <div id="item18" className="gallery-item">
            <img src={`${import.meta.env.VITE_CDN_URL}/gallery/14.jpg`} alt="Growth Operations" />
            <div className="gallery-overlay">
              <div className="gallery-caption">
                <div className="title">Growth Operations</div>
                <div className="description">Professional growing setup with multiple rows of produce</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Gallery;