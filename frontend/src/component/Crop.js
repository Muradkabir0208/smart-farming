import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import DropDown from "./DropDown";
import states from "../dropDownData";
import { PopUp } from "./PopUp";
import Loader from "./Loader";

export const Crop = () => {
  const [formData, setFormData] = useState({
    temp: "28",
    rainfall: "150.9",
    humidity: "70.3",
    pH: "7",
    phosphorus: "59",
    potassium: "60",
    nitrogen: "20",
  });
  const [buttonPopup, setButtonPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [ans, setAns] = useState("");

  const { temp, rainfall, humidity, pH, phosphorus, potassium, nitrogen } =
    formData;

  const cropData = [];

  const ddOnClick = (e) => {
    const data = JSON.parse(e);

    setFormData({
      ...formData,
      pH: data.pH,
      phosphorus: data.phosphorus,
      potassium: data.potassium,
      nitrogen: data.nitrogen,
    });
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    cropData[0] = parseFloat(nitrogen);
    cropData[1] = parseFloat(phosphorus);
    cropData[2] = parseFloat(potassium);
    cropData[3] = parseFloat(temp);
    cropData[4] = parseFloat(humidity);
    cropData[5] = parseFloat(pH);
    cropData[6] = parseFloat(rainfall);

    // console.log(cropData);
    setLoading(true);
    setButtonPopup(true);

    try {
      const data = { data: cropData };
      const response = await axios.post("/api/data", data);
      // console.log(response.data);
      // alert(response.data);
      setAns(response.data);

      if (response !== null) {
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
    }
    // submit function (action)
  };
  return (
    <>
      <div className='form-container'>
        <div className='form-container-background'>
          <h1>CROP</h1>
          <h1>RECOMMENDATION</h1>
          <DropDown onClick={ddOnClick} />
          <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor='nitrogen'>Nitrogen</label>
            <input
              type='number'
              placeholder='0'
              name='nitrogen'
              value={nitrogen}
              onChange={(e) => onChange(e)}
              required
            />

            <label htmlFor='phosphorus'>Phosphorus</label>
            <input
              type='number'
              name='phosphorus'
              value={phosphorus}
              onChange={(e) => onChange(e)}
              required
            />

            <label htmlFor='potassium'>Potassium</label>
            <input
              type='number'
              name='potassium'
              value={potassium}
              onChange={(e) => onChange(e)}
              required
            />

            {/* phosphorus */}
            <label htmlFor='temp'>Temperature</label>
            <input
              type='number'
              name='temp'
              value={temp}
              onChange={(e) => onChange(e)}
              required
            />

            {/*  pota*/}
            <label htmlFor='humidity'>Humidity</label>
            <input
              type='number'
              name='humidity'
              value={humidity}
              onChange={(e) => onChange(e)}
              required
            />
            <label htmlFor='pH'>pH</label>
            <input
              type='number'
              name='pH'
              value={pH}
              onChange={(e) => onChange(e)}
              required
            />
            {/* nitro */}
            <label htmlFor='rainfall'>Rainfall</label>
            <input
              type='number'
              name='rainfall'
              value={rainfall}
              onChange={(e) => onChange(e)}
              required
            />
            <Link to='/' className='btn btn-continue'>
              Back
            </Link>
            <button className='btn btn-continue'>Submit</button>
          </form>
          {loading === true ? (
            <Loader></Loader>
          ) : (
            <PopUp
              trigger={buttonPopup}
              setTrigger={setButtonPopup}
              setAns={ans}
              text={"We recommend you to grow "}
            ></PopUp>
          )}
        </div>
      </div>
    </>
  );
};
