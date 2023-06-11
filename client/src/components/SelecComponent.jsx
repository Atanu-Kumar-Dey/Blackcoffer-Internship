import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SelecComponent() {
  const [responseData, setData] = useState([]);
  const [topic, setTopic] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/topic");
        const data = response.data;
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  
    // console.log(responseData);
   
  return (
    <div className="w-1/2">
      <Select value={topic}  label="Select Version">
        <Option>Material Tailwind HTML</Option>
        {
          responseData && responseData.map((result,index)=><Option onClick={()=>setTopic(result)} value={result} key={index}>{result}</Option>)
        }
       
      </Select>
    </div>
  );
}
