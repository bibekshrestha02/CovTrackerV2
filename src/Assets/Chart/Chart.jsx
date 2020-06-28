import React, { useState, useEffect } from "react";
import { Chart } from "react-google-charts";
import SubTitle from "./../subTitle/subtitle";
import Axios from "axios";
export default function DailyChart() {
  const [data, setData] = useState([]);
  const dateConverter = (date) => {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${new Date(date).getDate()} ${
      monthNames[new Date(date).getMonth()]
    }`;
  };
  useEffect(() => {
    Axios.get("https://data.nepalcorona.info/api/v1/covid/timeline").then(
      (res) => {
        setData(res.data);
      }
    );
  }, []);
  const result = data.map((result) => {
    return [
      dateConverter(result["date"]),
      result["newCases"],
      result["newRecoveries"],
      result["newDeaths"],
    ];
  });

  return (
    <div className='bg-white mt-1 mb-2'>
      <SubTitle Title='Daily incidence charts' line />
      <div style={{ overflow: "scroll" }}>
        <Chart
          height='500px'
          width='1000px'
          chartType='LineChart'
          loader={
            <div
              className='bg-white'
              style={{ height: "40vh", textAlign: "center" }}>
              <h3>Loading</h3>
            </div>
          }
          data={[["y", "Cases", "Recoverd", "Death"], ...result]}
          options={{
            hAxis: {
              title: "Date",
            },
            vAxis: {
              title: "No. of People",
            },
            series: {
              1: { curveType: "function" },
            },
          }}
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
  );
}
