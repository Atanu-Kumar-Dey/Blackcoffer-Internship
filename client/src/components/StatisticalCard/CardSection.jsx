import React, { useState } from "react";
import axios from "axios";
const CardSection = () => {
  const [sector, setSector] = useState(0);
  const [toppic, setTopic] = useState(0);
  const [country, setCountry] = useState(0);
  const [source, setSource] = useState(0);
  
  useState(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/2018/Energy"
        );
        const data = response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return <div></div>;
};

export default CardSection;
