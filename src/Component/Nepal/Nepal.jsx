import React from "react";
import Title from "../../Assets/Title/Title";
import CovidDetails from "./../../Assets/covidDetails/CovidDetails";
import Table from "./../../Assets/ProvienceTable/Table";
import Faq from "./../../Assets/FaqQuestion/FaqQuestion";
import Chart from "./../../Assets/Chart/Chart";
export default function Nepal(props) {
  const { nepalData } = props;
  const { worldData } = props;
  const { date } = props;
  const { province } = props;
  return (
    <div className='mt-5 pt-4'>
      <Title Title='Worldwide Overview' date={date} />
      <CovidDetails data={worldData} />
      <Title Title='Nepal Overview' />
      <CovidDetails data={nepalData} />
      <div className='row  container-fluid mx-auto mt-3'>
        <div className='col-lg-8'>
          <Table province={province} />
          <Chart />
        </div>
        <div className='col-lg-4'>
          <Faq />
        </div>
      </div>
    </div>
  );
}
