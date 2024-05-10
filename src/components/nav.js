import { useEffect, useRef } from "react";
import "../styles/stylesNav.css";
import { Link as LinkRouter } from "react-router-dom";
import { Link } from "react-scroll";
function Nav() {
  const menuBurguer = useRef(null);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        menuBurguer.current.style.display = "none";
      }
    });
  }, []);

  return (
    <>
      <nav>
        <img
          src={require("../images/icons8-menu-50.png")}
          className="menu-icon-img"
          alt="menu-icon"
          onClick={() =>
            (menuBurguer.current.style.display =
              menuBurguer.current.style.display === "block" ? "none" : "block")
          }
        ></img>
        <img
          src={require("../images/aa38384d3942a55696d8070552aed2f4c190fc14.jpg")}
          alt="img-restaurant-logo"
        ></img>
        <ul className="ul-destok">
          <li>
            <LinkRouter className="link" to="little-lemon-capstone/">
              Home
            </LinkRouter>
          </li>
          <li>
            <Link to="about-section" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="menu-preview" smooth={true} duration={500}>
              Menu
            </Link>
          </li>
          <li>
            <LinkRouter className="link" to="little-lemon-capstone/Reservations">
              {" "}
              Reservations
            </LinkRouter>
          </li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </nav>
      <div className="menu-icon">
        <ul
          ref={menuBurguer}
          className="ul-menu"
          onClick={() => (menuBurguer.current.style.display = "none")}
        >
          <li>
            <LinkRouter className="link" to="little-lemon-capstone/">
              Home
            </LinkRouter>
          </li>
          <li>
            <Link
              to="about-section"
              smooth={true}
              duration={500}
              onClick={() => (menuBurguer.current.style.display = "none")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="menu-preview"
              smooth={true}
              duration={500}
              onClick={() => (menuBurguer.current.style.display = "none")}
            >
              Menu
            </Link>
          </li>
          <li>
            <LinkRouter className="link" to="little-lemon-capstone/Reservations">
              {" "}
              Reservations
            </LinkRouter>
          </li>
          <li>Order Online</li>
          <li>Login</li>
        </ul>
      </div>
    </>
  );
}
export default Nav;