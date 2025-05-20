import Carousel from 'react-bootstrap/Carousel';

function BannerGrid() {
  const slideWrapperStyle = {
    position: 'relative',
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  };

  const imageStyle = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // darken more for contrast
    zIndex: 1,
  };

  const captionStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: '#fff',
    zIndex: 2,
  };

  return (
    
    

    <Carousel fade>
      {/* Slide 1 */}
      <Carousel.Item>
        <div style={slideWrapperStyle}>
          <img
            style={imageStyle}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHN0eWxlfGVufDB8fDB8fHww"
            alt="First slide"
          />
          <div style={overlayStyle}></div>
          <div style={captionStyle}>
            <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>Style Meets Elegance</h1>
            <p style={{ fontSize: '1.5rem' }}>Discover curated fashion for everyone, every moment</p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 2 */}
      <Carousel.Item>
        <div style={slideWrapperStyle}>
          <img
            style={imageStyle}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1524553879936-2ff074ae5816?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aGVlbHN8ZW58MHx8MHx8fDA%3D"
            alt="Second slide"
          />
          <div style={overlayStyle}></div>
          <div style={captionStyle}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Luxury Heels</h1>
            <p>Elegant women’s fashion</p>
          </div>
        </div>
      </Carousel.Item>

      {/* Slide 3 */}
      <Carousel.Item>
        <div style={slideWrapperStyle}>
          <img
            style={imageStyle}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1604176354204-9268737828e4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8amVhbnN8ZW58MHx8MHx8fDA%3D"
            alt="Third slide"
          />
          <div style={overlayStyle}></div>
          <div style={captionStyle}>
            <h1 style={{ fontSize: '3rem', fontWeight: 'bold' }}>Fit & Style</h1>
            <p>Perfect jeans for every body</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default BannerGrid;

