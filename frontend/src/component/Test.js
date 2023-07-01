import { useState, useEffect } from "react";
import axios from "axios";

function Test() {
  const [data, setData] = useState(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get("/api/data");
  //     console.log(response.data);

  //     setData(response.data);
  //   };
  //   fetchData();
  // }, []);

  const onClick = () => {
    const fetchData = async () => {
      const response = await axios.get("/api/data");

      console.log(response.data);

      setData(response.data);
    };
    fetchData();
  };
  const handleClick = async () => {
    try {
      const data = { data: [20, 59, 60, 28, 70.3, 7.0, 150.9] };
      const response = await axios.post("/api/data", data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {/* <div>{data ? <h1>{data}</h1> : <p>Loading...</p>}</div> */}

      <button className='btn btn-continue' onClick={onClick}>
        Get req
      </button>
      <button className='btn btn-continue' onClick={handleClick}>
        post req
      </button>
    </>
  );
}

export default Test;
