import MenuPreview from "./menuPreview";
import CustomersOpinion from "./customersOpinion";
import AboutSection from "./about";
import ReservationHero from "./reservationHero";
import { Element } from "react-scroll";
function MainPrincipal() {
  return (
    <>
      <ReservationHero></ReservationHero>
      <Element name="menu-preview">
        <MenuPreview />
      </Element>
      <CustomersOpinion></CustomersOpinion>
      <Element name="about-section">
        <AboutSection />
      </Element>
    </>
  );
}
export default MainPrincipal;