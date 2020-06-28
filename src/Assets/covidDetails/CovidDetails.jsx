import React from "react";
import style from "./covidDetails.module.scss";
import DetailsCard from "./detailsCard";
export default function CovidDetails(props) {
  const data = props.data;

  return (
    <div className={`${style.CovidDetails} row container-fluid mt-2`}>
      <div className='col-lg-4 mt-2 col-sm-12 '>
        <DetailsCard
          className={1}
          iconName='users'
          Title='Total Cases'
          number={data.total}
        />
      </div>
      <div className='col-lg-4 mt-2 col-sm-12'>
        <DetailsCard
          className={2}
          iconName='bed'
          Title='Total Death'
          number={data.death}
        />
      </div>
      <div className='col-lg-4 mt-2 col-sm-12'>
        <DetailsCard
          className={3}
          iconName='child'
          Title='Total Recovered'
          number={data.recovered}
        />
      </div>

      <div className='col-lg-4 mt-2 col-sm-12'>
        <DetailsCard
          className={4}
          iconName='user-friends'
          Title='Total Active'
          number={data.active}
        />
      </div>
      <div className='col-lg-4 mt-2 col-sm-12'>
        <DetailsCard
          className={5}
          iconName='user-ninja'
          Title='Fertility Rate'
          number={`${data.fatiltiyRate}%`}
        />
      </div>
      <div className='col-lg-4 mt-2 col-sm-12'>
        <DetailsCard
          className={6}
          iconName='user-secret'
          Title='Recovery Rate'
          number={`${data.recoveryRate}%`}
        />
      </div>
    </div>
  );
}
