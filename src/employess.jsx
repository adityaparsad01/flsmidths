import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCar } from "react-icons/ai";
import { IoTodaySharp } from "react-icons/io";

const URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=Py9gIiBc4YOM_ITm5aYCR948nNXeoaivGVHnxL1EIqvxTBiEp5PIx36hyRezgNwVhAVGXgIQCiBuhVIuvluQ9doGl-NNH8lhm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDjnOsdLBxrqKlg66fXIurI5lavxEO2QCYwQ_uURYMbDIWlFMj978FfjMzJRHa9fX5XLva7GBrCe4j-XCzu0DKPb3lj62okUAQ&lib=MhYwMEYR0SkuKYxjEuQPjnR2TY0KEY2cc";

const Employee = () => {
  const [emp, setEmp] = useState([]);
  console.log(emp);

  useEffect(() => {
    axios
      .get(URL)
      .then(function (response) {
        setEmp(response.data[0].jsonArray);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <>
      {emp.map((item, idx) => {
        return (
          <div className="card" key={idx}>
            <h1 className="name">
              <BsFillPersonFill /> {item.Name.toLowerCase()}
            </h1>
            <h5>{item.H_Name}</h5>
            <div className="vinfo">
              <h2 className="vehicle">
                <AiFillCar /> {item.Vehical_Number}
              </h2>
              <h2 className="dayremain">
                {item.Day_Remaining
                  ? `${item.Day_Remaining} Days`
                  : "not provided"}
              </h2>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Employee;
