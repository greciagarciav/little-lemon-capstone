import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "../styles/reservationPage.css";
import { fetchAPI, submitAPI } from "../mockApi";
import { useRef } from "react";
function ReservationPage() {
  const refObj = {
    ref1: useRef(null),
    ref2: useRef(null),
    ref3: useRef(null),
    ref4: useRef(null),
    ref5: useRef(null),
    ref6: useRef(null),
    ref7: useRef(null),
  };

  const [inputvalue, setInputVale] = useState({
    date: "",
    numPerson: "",
    time: "",
    occasion: "",
  });

  const [responseApi, setResponseApi] = useState({
    isUpdated: false,
    date: false,
    numPerson: false,
    time: false,
    occasion: false,
  });

  const handleForm = (event) => {
    setInputVale({
      ...inputvalue,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    refObj.ref5.current.style.display = "none";
    refObj.ref6.current.style.display = "block";
    let obj = {
      isUpdated: true,
      date: false,
      numPerson: false,
      time: false,
      occasion: false,
    };
    event.preventDefault();
    fetchAPI(inputvalue.date)
      .then((res) => {
        if (res.length > 0) {
          obj.date = true;
        }
        if (res.includes(inputvalue.time)) {
          obj.time = true;
        }
        if (inputvalue.numPerson >= 2 && inputvalue.numPerson <= 8) {
          obj.numPerson = true;
        }
        if (inputvalue.occasion) {
          obj.occasion = true;
        }
        setResponseApi({
          ...obj,
        });
      })
      .catch((e) =>
        setResponseApi({
          ...obj,
        })
      );
  };

  const updateAlert = (obj) => {
    if (obj.date && obj.time && obj.occasion && obj.numPerson) {
      submitAPI(inputvalue).then((res) => res);
      refObj.ref5.current.style.display = "none";
      refObj.ref7.current.style.display = "flex";
      refObj.ref6.current.style.display = "none";
      refObj.ref5.current.style.display = "none";
      return;
    } else {
      refObj.ref5.current.style.display = "flex";
      refObj.ref6.current.style.display = "none";
    }
    if (!obj.date) {
      refObj.ref1.current.style.display = "block";
      refObj.ref2.current.style.display = "none";
      refObj.ref3.current.style.display = "none";
      refObj.ref4.current.style.display = "none";
      return;
    } else {
      refObj.ref1.current.style.display = "none";
    }
    if (!obj.numPerson) {
      refObj.ref2.current.style.display = "block";
    } else {
      refObj.ref2.current.style.display = "none";
    }
    if (!obj.time) {
      refObj.ref3.current.style.display = "block";
    } else {
      refObj.ref3.current.style.display = "none";
    }
    if (!obj.occasion) {
      refObj.ref4.current.style.display = "block";
    } else {
      refObj.ref4.current.style.display = "none";
    }
  };
  // eslint-disable-next-line no-unused-expressions
  responseApi.isUpdated ? updateAlert(responseApi) : null;
  return (
    <div className="reservation-container">
      <form onSubmit={handleSubmit} ref={refObj.ref5}>
        <h1>Fill to Reserve</h1>
        <p>We accept reservations from 2023-08-29 to 2023-09-20*</p>
        <label htmlFor="date">Date</label>
        <input type="date" id="date" onChange={handleForm}></input>
        <p
          className="alert alert-date"
          ref={refObj.ref1}
          style={{ color: "red", display: "none" }}
        >
          No available times for the selected date.
        </p>
        <label htmlFor="numPerson">Number of Persons</label>
        <input
          type="number"
          id="numPerson"
          min={2}
          max={8}
          value={inputvalue.numPerson}
          onChange={handleForm}
        ></input>
        <p
          className="alert alert-numPerson"
          ref={refObj.ref2}
          style={{ color: "red", display: "none" }}
        >
          Numbers of people are not valid, you must select a minimum of 2 and a
          maximum of 8.
        </p>
        <label htmlFor="time">Time</label>
        <select id="time" value={inputvalue.time} onChange={handleForm}>
          <option value="">Select Hour</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
        </select>
        <p
          className="alert alert-time"
          ref={refObj.ref3}
          style={{ color: "red", display: "none" }}
        >
          No available times for the selected Hour. Choose another hour.
        </p>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={inputvalue.occasion} onChange={handleForm}>
          <option value="">Select a occasion</option>
          <option value="birthday">Birthday</option>
          <option value="romanticDinner">Romantic lunch</option>
          <option value="anniversary">Anniversary</option>
          <option value="formalDinner">Formal lunch</option>
        </select>
        <p
          className="alert alert-occasion"
          ref={refObj.ref4}
          style={{ color: "red", display: "none" }}
        >
          Select an occasion
        </p>
        <button type="submit">Reserve</button>
      </form>
      <div
        className="reservation-confirm"
        ref={refObj.ref7}
        style={{ display: "none" }}
      >
        <h1>
          Confirmed reservation{" "}
          <img
            className="check-img"
            src={require("../images/icons8-check-mark-48.png")}
            alt="img-check"
          ></img>
        </h1>
        <p>
          We are waiting for you on day {inputvalue.date} at {inputvalue.time}{" "}
          hours{" "}
        </p>
        <p>Thanks for trusting us</p>
      </div>
      <div
        className="lds-spinner"
        style={{ display: "none" }}
        ref={refObj.ref6}
      >
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default ReservationPage;