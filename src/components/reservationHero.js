import "../styles/stylesReservationHero.css";
import { Link as LinkRouter } from "react-router-dom";
function ReservationHero() {
  return (
    <div className="reservationHero">
      <div className="section1">
        <h1>Litle Lemon</h1>
        <h3>Chicago</h3>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className="reserve-btn">
          <LinkRouter className="link" to="./Reservations">
            Reserve a table
          </LinkRouter>
        </button>
      </div>
      <div className="section2">
        <img
          src={require("../images/3d3cce7a3104bf255ed0e69195e2a157338c1bff.jpg")}
          alt="img of food"
        ></img>
        <button className="menu-btn">Menu</button>
      </div>
    </div>
  );
}
export default ReservationHero;