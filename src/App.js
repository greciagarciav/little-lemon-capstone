import Main from "./components/main";
import Header from "./components/header";
import Nav from "./components/nav";
import Footer from "./components/footer";
import {Route, Routes, BrowserRouter } from "react-router-dom";
import MainPrincipal from "./components/mainPrincipal";
import ReservationPage from "./components/reservationPage";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Nav></Nav>
      </Header>
      <Main>
        <Routes>
          <Route path="little-lemon-capstone/" element={<MainPrincipal />} />
          <Route path="little-lemon-capstone/Reservations" element={<ReservationPage />} />
       </Routes>
      </Main>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;