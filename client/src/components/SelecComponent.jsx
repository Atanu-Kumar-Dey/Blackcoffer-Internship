import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import { useState, useEffect } from "react";
export default function SelecComponent({sector,setsector,label,apiValue}) {
 
  console.log(apiValue);
  const [responseData, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/${apiValue}`);
        const data = response.data;
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
   
  return (
    <div className="w-auto">
      <Select value={sector} className="text-[16px] " label={label}>
        
        {
          responseData && responseData.map((result,index)=><Option onClick={()=>setsector(result)} value={result} key={index}>{result}</Option>)
        }
       
      </Select>
    </div>
  );
}
