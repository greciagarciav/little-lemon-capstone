import "../styles/footerStyle.css";
function Footer() {
  return (
    <footer>
      <img
        src={require("../images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.jpg")}
        alt="img"
      ></img>
      <ul>
        <p>Social Media</p>
        <li>
          Instagram
          <img
            src={require("../images/icons8-instagram-24.png")}
            alt="img"
          ></img>
        </li>
        <li>
          Facebook
          <img
            src={require("../images/icons8-facebook-24.png")}
            alt="img"
          ></img>
        </li>
        <li>
          Twitter
          <img
            src={require("../images/icons8-twitterx-24.png")}
            alt="img"
          ></img>
        </li>
      </ul>
      <ul>
        <p>About us</p>
        <li>work with us</li>
        <li>Location</li>
        <li>More info</li>
      </ul>
    </footer>
  );
}
export default Footer;