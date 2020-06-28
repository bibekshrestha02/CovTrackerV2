import React, { useState, useEffect } from "react";
import Nepal from "./Component/Nepal/Nepal";
import Nav from "./Component/Nav/Nav";
import Footer from "./Component/Footer/Footer";
import Loading from "./Component/Loading/Loading";
import Axios from "axios";
import "./style/style.css";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [nepalData, setNepalData] = useState("");
  const [worldData, setWorldData] = useState("");
  const [date, setDate] = useState("");
  const [province, setProvince] = useState("");
  useEffect(() => {
    const getNumWithComma = (num) => {
      const num_parts = num.toString().split(".");
      num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return num_parts.join(".");
    };
    const getPercentage = (number, total) => {
      return ((number / total) * 100).toFixed(2);
    };
    Axios.get("https://data.nepalcorona.info/api/v1/world")
      .then((res) => {
        const { data } = res;
        const { cases } = data;
        const { deaths } = data;
        const { active } = data;
        const { recovered } = data;
        const { updated } = data;
        setDate(updated);
        const recoveryRate = getPercentage(recovered, cases);
        const fatiltiyRate = getPercentage(deaths, cases);
        setWorldData({
          total: getNumWithComma(cases),
          death: getNumWithComma(deaths),
          active: getNumWithComma(active),
          recovered: getNumWithComma(recovered),
          updated,
          recoveryRate,
          fatiltiyRate,
        });
      })
      .catch((err) => {
        console.log(err);
      });
    Axios.get("https://data.nepalcorona.info/api/v1/covid/summary").then(
      (res) => {
        const { data } = res;
        const { total } = data;
        const { current_state } = data;
        let death;
        let active;
        let recovered;
        const { province } = data;
        setProvince(province);
        current_state.map((e) => {
          if (e.currentState === "death") {
            death = e.count;
          } else if (e.currentState === "active") {
            active = e.count;
          } else if (e.currentState === "recovered") {
            recovered = e.count;
          }
          return null;
        });
        const recoveryRate = getPercentage(recovered, total);
        const fatiltiyRate = getPercentage(death, total);

        setNepalData({
          total: getNumWithComma(total),
          death: getNumWithComma(death),
          active: getNumWithComma(active),
          recovered: getNumWithComma(recovered),
          recoveryRate,
          fatiltiyRate,
        });
        setIsLoading(false);
      }
    );
  }, []);

  let data;
  isLoading
    ? (data = <Loading />)
    : (data = (
        <div className='App'>
          <Nav />
          <div className='homepage'>
            <Nepal
              nepalData={nepalData}
              worldData={worldData}
              date={date}
              province={province}
            />
          </div>
          <Footer />
        </div>
      ));
  return data;
}

export default App;
