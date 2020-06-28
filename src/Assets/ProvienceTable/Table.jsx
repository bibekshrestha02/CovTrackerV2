import React, { useState, useEffect } from "react";
import SubTitle from "./../subTitle/subtitle";
export default function Table(props) {
  const { province } = props;
  const [province1, setProvince1] = useState({ province: 1 });
  const [province2, setProvince2] = useState({ province: 2 });
  const [province3, setProvince3] = useState({ province: 3 });
  const [province4, setProvince4] = useState({ province: 4 });
  const [province5, setProvince5] = useState({ province: 5 });
  const [province6, setProvince6] = useState({ province: 6 });
  const [province7, setProvince7] = useState({ province: 7 });

  useEffect(() => {
    province.cases.map((e) => {
      if (e.province === 1) {
        return setProvince1((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 2) {
        return setProvince2((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 3) {
        return setProvince3((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 4) {
        return setProvince4((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 5) {
        return setProvince5((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 6) {
        return setProvince6((pre) => {
          return { ...pre, cases: e.count };
        });
      } else if (e.province === 7) {
        return setProvince7((pre) => {
          return { ...pre, cases: e.count };
        });
      }
      return null;
    });
    province.active.map((e) => {
      if (e.province === 1) {
        return setProvince1((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 2) {
        return setProvince2((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 3) {
        return setProvince3((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 4) {
        return setProvince4((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 5) {
        return setProvince5((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 6) {
        return setProvince6((pre) => {
          return { ...pre, active: e.count };
        });
      } else if (e.province === 7) {
        return setProvince7((pre) => {
          return { ...pre, active: e.count };
        });
      }
      return null;
    });
    province.deaths.map((e) => {
      if (e.province === 1) {
        return setProvince1((pre) => {
          return { ...pre, deaths: e.count || 0 };
        });
      } else if (e.province === 2) {
        return setProvince2((pre) => {
          return { ...pre, deaths: e.count };
        });
      } else if (e.province === 3) {
        return setProvince3((pre) => {
          return { ...pre, deaths: e.count };
        });
      } else if (e.province === 4) {
        return setProvince4((pre) => {
          return { ...pre, deaths: e.count };
        });
      } else if (e.province === 5) {
        return setProvince5((pre) => {
          return { ...pre, deaths: e.count };
        });
      } else if (e.province === 6) {
        return setProvince6((pre) => {
          return { ...pre, deaths: e.count };
        });
      } else if (e.province === 7) {
        return setProvince7((pre) => {
          return { ...pre, deaths: e.count };
        });
      }
      return null;
    });
    province.recovered.map((e) => {
      if (e.province === 1) {
        return setProvince1((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 2) {
        return setProvince2((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 3) {
        return setProvince3((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 4) {
        return setProvince4((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 5) {
        return setProvince5((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 6) {
        return setProvince6((pre) => {
          return { ...pre, recovered: e.count };
        });
      } else if (e.province === 7) {
        return setProvince7((pre) => {
          return { ...pre, recovered: e.count };
        });
      }
      return null;
    });
  }, [province.active, province.cases, province.recovered, province.deaths]);
  const datas = [
    province1,
    province2,
    province3,
    province4,
    province5,
    province6,
    province7,
  ];
  return (
    <div className='bg-white'>
      <SubTitle Title='Provinces OverView' />
      <div className='table-responsive-sm  bg-white'>
        <table className={`table  table-hover  text-center`}>
          <thead>
            <tr className=''>
              <th scope='col'>Provinces</th>
              <th>Cases</th>
              <th>Active</th>
              <th>Death</th>
              <th>Recovered</th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data, i) => {
              return (
                <tr key={i}>
                  <td>{`Provience ${data.province}`}</td>
                  <td>{data.cases}</td>
                  <td>{data.active}</td>
                  <td>{data.deaths}</td>
                  <td>{data.recovered}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
