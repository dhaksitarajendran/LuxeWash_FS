import Footer from "../components/Footer";
import video1 from "../assets/Carwash1.mp4";
import video2 from "../assets/carwash2.mp4";

export default function Contact() {
  return (
    <div className="page d-flex flex-column min-vh-100">
      <section className="contact-section flex-grow-1 d-flex flex-column justify-content-center py-5 px-4" style={{ background: 'linear-gradient(to bottom, #6b0f14, #4a0c0c)' }}>
        <div className="video-area d-flex justify-content-center flex-wrap gap-4 mb-4">
          <div className="video-card bg-black shadow-lg overflow-hidden" style={{ width: '420px', height: '240px', borderRadius: '20px' }}>
            <video src={video1} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div className="video-card bg-black shadow-lg overflow-hidden" style={{ width: '420px', height: '240px', borderRadius: '20px' }}>
            <video src={video2} controls style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>

        <div className="dots d-flex justify-content-center gap-3 mb-5 mt-4">
          <span className="active" style={{ width: '35px', height: '6px', borderRadius: '10px', background: '#f3d9a4', transition: '0.3s' }}></span>
          <span style={{ width: '35px', height: '6px', borderRadius: '10px', background: 'rgba(255,255,255,0.3)', transition: '0.3s' }}></span>
          <span style={{ width: '35px', height: '6px', borderRadius: '10px', background: 'rgba(255,255,255,0.3)', transition: '0.3s' }}></span>
          <span style={{ width: '35px', height: '6px', borderRadius: '10px', background: 'rgba(255,255,255,0.3)', transition: '0.3s' }}></span>
        </div>
      </section>

      <Footer />
    </div>
  );
}
