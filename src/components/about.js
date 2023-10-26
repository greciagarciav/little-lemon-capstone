import "../styles/aboutStyle.css";

function AboutSection() {
  return (
    <>
      <div className="about-section">
        <img src={require("../images/restaurant.jpg")} alt="img"></img>
        <p>
          We are one of the best Mediterranean food restaurants in Chicago,
          since 1992 when we opened, we have not stopped growing, and getting
          the best dishes to offer to our customers.
        </p>
      </div>
    </>
  );
}
export default AboutSection;