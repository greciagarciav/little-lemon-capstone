import "../styles/menuPreview.css";
function MenuPreview() {
  return (
    <div className="weeks-specials">
      <h2>This Weeks Specials</h2>
      <div className="menu-container">
        <div className="card-menu">
          <img
            className="img-menu-element"
            src={require("../images/9beeddcd9d22dc711cd9fddc4a3393a7278299c7.jpg")}
            alt="img"
          ></img>
          <p className="name-food">
            Greek salad <span>$12.99</span>
          </p>
          <p>
            The famous greek salad of crispy lettuce, peppers , olives and our
            Chicago styles feta cheese,garnished with crunchy garlic and
            rosemary croutons
          </p>
          <p className="delivery-opcion">
            Order a delivery{" "}
            <img
              className="icon-delivery"
              src={require("../images/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg")}
              alt="img"
            ></img>
          </p>
        </div>
        <div className="card-menu">
          <img
            className="img-menu-element"
            src={require("../images/5a56cb0a6cea7dd9e4260ae87b268bd3eee8527d.jpg")}
            alt="img"
          ></img>
          <p className="name-food">
            Bruchetta <span>$5.99</span>
          </p>
          <p>
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <p className="delivery-opcion">
            Order a delivery{" "}
            <img
              className="icon-delivery"
              src={require("../images/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg")}
              alt="img"
            ></img>
          </p>
        </div>
        <div className="card-menu">
          <img
            className="img-menu-element"
            src={require("../images/lemon dessert.jpg")}
            alt="img"
          ></img>
          <p className="name-food">
            Lemon Dessert <span>$5.00</span>
          </p>
          <p>
            This comes straight from garandma's recipe book , every last
            ingredient has been sourced and is as authentic as can vbe imagined
          </p>
          <p className="delivery-opcion">
            Order a delivery{" "}
            <img
              className="icon-delivery"
              src={require("../images/f21897ecfdee7d5927d1ec7b61408485ab9f6838.jpg")}
              alt="img"
            ></img>
          </p>
        </div>
      </div>
    </div>
  );
}
export default MenuPreview;