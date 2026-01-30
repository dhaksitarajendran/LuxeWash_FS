import { Element } from "react-scroll";

function LandingPage() {
  return (
    <>
      <Element name="home" className="section home">
        <h1>Welcome to LuxeWash</h1>
        <p>Premium car wash services at your doorstep.</p>
      </Element>

      <Element name="service" className="section service">
        <h1>Our Services</h1>
        <p>Interior cleaning, exterior wash, detailing & polishing.</p>
      </Element>

      <Element name="pricing" className="section pricing">
        <h1>Pricing Plans</h1>
        <p>Affordable packages for every car type.</p>
      </Element>

      <Element name="contact" className="section contact">
        <h1>Contact Us</h1>
        <p>Email: support@luxewash.com</p>
      </Element>
    </>
  );
}

export default LandingPage;
