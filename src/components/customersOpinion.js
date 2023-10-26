import "../styles/customersOpinion.css";
function CustomersOpinion() {
  return (
    <>
      <h4>What our Customers say!</h4>
      <div className="container-customers">
        <div className="person-opinion">
          <img src={require("../images/pngegg.png")} alt="img"></img>
          <p className="name"> Sara Lopez</p>
          <p>Good food and Good service!</p>
        </div>
        <div className="person-opinion">
          <img src={require("../images/pngegg.png")} alt="img"></img>
          <p className="name">Manuel Diaz</p>
          <p>The place is very clean and comfortable</p>
        </div>{" "}
        <div className="person-opinion">
          <img src={require("../images/pngegg.png")} alt="img"></img>
          <p className="name">Pedro Lopez</p>
          <p>The best restaurant in Chicago,mediterranean food is delicious!</p>
        </div>
      </div>
    </>
  );
}
export default CustomersOpinion;