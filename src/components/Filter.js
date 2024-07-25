import React, { useState, useEffect } from 'react';
import { checkAtp, checkBackSlash, checkGirlsBoys, checkItf, checkWta, createDateFromString } from '../functions/utils';

const Filter = ({ data }) => {
  const [filterLive, setFilterLive] = useState(false);
  const [filterPreview, setPreview] = useState(false);
  const [filterAtp, setFilterAtp] = useState(false);
  const [filterWta, setFilterWta] = useState(false);
  const [filteredData, setFilteredData] = useState(data);

  console.log(filteredData)

// useEffect(() => {
//     let result = null;
//     if (data) {
//         result = data.filter(item => !checkItf(item.event_type_type) && !checkBackSlash(item.event_first_player) && !checkGirlsBoys(item.event_type_type));
//         result.forEach(element => {
//             const date = createDateFromString(element.event_date, element.event_time);
//             element.event_datetime = date;
//             result.sort((a, b) => b.event_datetime - a.event_datetime);
//             })
//         }

//     if (data) {
//         if (filterLive) {
//            result = result.filter(item => item.event_live === '1' && item.event_live !== 'Finished');
//         }
//         if (filterPreview) {
//             result = result.filter(item => item.event_status === "");
//         }
//         if (filterAtp) {
//             result = result.filter(item => checkAtp(item.event_type_type));
//             console.log(result.length)
//         }
//         if (filterWta) {
//             result = result.filter(item => checkWta(item.event_type_type));
//             console.log(result.length)
//         }
//     } else {
//         result = [];
//     }

//     setFilteredData(result);
// }, [data, filterLive, filterAtp, filterWta, filterPreview]);

  const handleFilterChange = (e, setFilterFunction) => {
    const { name, checked } = e.target;
    setFilterFunction(checked);

    // Logique de filtrage basée sur les filtres
    const newFilteredData = data.filter((item) => {
      // Implémentez ici la logique de filtrage en fonction des filtres
      // Par exemple :
      return (
        (!filterLive || item.isLive) &&
        (!filterPreview || item.isPreview) &&
        (!filterAtp || item.isAtp) &&
        (!filterWta || item.isWta)
      );
    });
    // setFilteredData(newFilteredData);
  };

  return (
    <div className="col-12 text-center mb-4 text-light">
      <label>
        <input
          type="checkbox"
          name="live"
          checked={filterLive}
          onChange={(e) => handleFilterChange(e, setFilterLive)}
        />
        live events
      </label>
      &nbsp;
      <label>
        <input
          type="checkbox"
          name="preview"
          checked={filterPreview}
          onChange={(e) => handleFilterChange(e, setPreview)}
        />
        preview
      </label>
      &nbsp;
      <label className="ms-2">
        <input
          type="checkbox"
          name="atp"
          checked={filterAtp}
          onChange={(e) => handleFilterChange(e, setFilterAtp)}
        />
        ATP events
      </label>
      <label>
        <input
          type="checkbox"
          name="wta"
          checked={filterWta}
          onChange={(e) => handleFilterChange(e, setFilterWta)}
        />
        WTA events
      </label>&nbsp;&nbsp;
      <b className="text-danger">{filteredData ? filteredData.length : 0}</b>
    </div>
  );
};

export default Filter;
