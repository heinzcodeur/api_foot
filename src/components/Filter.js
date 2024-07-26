import React, { useState, useEffect } from 'react';
import '../assets/css/app.css'; // Import correct

import { checkAtp, checkBackSlash, checkGirlsBoys, checkItf, checkWta, createDateFromString } from '../functions/utils';
// import FormTest from './atoms/formTest';

const Filter = ({ data }) => {
  const [filterLive, setFilterLive] = useState(false);
  const [filterPreview, setFilterPreview] = useState(false);
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

{/* <FormTest /> */}

{/* 
<div class="form-check form-check-inline">
<input type="checkbox" name="live" checked={filterLive} className="form-check-input" onChange={(e) => handleFilterChange(e, setFilterLive)} />
<label class="form-check-label" for="inlineCheckbox1">live events</label>
</div>

<div class="form-check form-check-inline">
<input type="checkbox" name="live" checked={filterPreview} className="form-check-input" onChange={(e) => handleFilterChange(e, setFilterPreview)} />
<label class="form-check-label" for="inlineCheckbox2">preview</label>
</div>

<div class="form-check form-check-inline">
<input type="checkbox" name="live" checked={filterAtp} className="form-check-input" onChange={(e) => handleFilterChange(e, setFilterAtp)} />
<label class="form-check-label" for="inlineCheckbox3">ATP events</label>
</div>

<div class="form-check form-check-inline">
<input type="checkbox" name="live" checked={filterWta} className="form-check-input" onChange={(e) => handleFilterChange(e, setFilterWta)} />
<label class="form-check-label" for="inlineCheckbox3">WTA events</label>
</div> */}

<div class="[ col-xs-12 col-sm-6 ]">
        <h3>Custom Icons Checkboxes</h3><hr />
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-default-custom-icons" id="fancy-checkbox-default-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-default-custom-icons" class="[ btn btn-default ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-default-custom-icons" class="[ btn btn-default active ]">
                    Default Checkbox
                </label>
            </div>
        </div>
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-primary-custom-icons" id="fancy-checkbox-primary-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-primary-custom-icons" class="[ btn btn-primary ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-primary-custom-icons" class="[ btn btn-default active ]">
                    Primary Checkbox
                </label>
            </div>
        </div>
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-success-custom-icons" id="fancy-checkbox-success-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-success-custom-icons" class="[ btn btn-success ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-success-custom-icons" class="[ btn btn-default active ]">
                    Success Checkbox
                </label>
            </div>
        </div>
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-info-custom-icons" id="fancy-checkbox-info-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-info-custom-icons" class="[ btn btn-info ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-info-custom-icons" class="[ btn btn-default active ]">
                    Info Checkbox
                </label>
            </div>
        </div>
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-warning-custom-icons" id="fancy-checkbox-warning-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-warning-custom-icons" class="[ btn btn-warning ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-warning-custom-icons" class="[ btn btn-default active ]">
                    Warning Checkbox
                </label>
            </div>
        </div>
        <div class="[ form-group ]">
            <input type="checkbox" name="fancy-checkbox-danger-custom-icons" id="fancy-checkbox-danger-custom-icons" autocomplete="off" />
            <div class="[ btn-group ]">
                <label for="fancy-checkbox-danger-custom-icons" class="[ btn btn-danger ]">
                    <span class="[ glyphicon glyphicon-plus ]"></span>
                    <span class="[ glyphicon glyphicon-minus ]"></span>
                </label>
                <label for="fancy-checkbox-danger-custom-icons" class="[ btn btn-default active ]">
                    Danger Checkbox
                </label>
            </div>
        </div>
    </div>

      {/* <div class="form-check">
        <input type="checkbox" name="live" checked={filterPreview} className="form-check-input" onChange={(e) => handleFilterChange(e, setFilterLive)} />
      <label>preview</label>
      </div>
      
      <label>
        <input type="checkbox" name="preview" checked={filterPreview} onChange={(e) => handleFilterChange(e, setPreview)} />
        preview
      </label>
      &nbsp;
      <label className="ms-3">
        <input type="checkbox" name="atp" checked={filterAtp} onChange={(e) => handleFilterChange(e, setFilterAtp)}
        />ATP events
      </label>
      <label>
        <input type="checkbox" name="wta" checked={filterWta} onChange={(e) => handleFilterChange(e, setFilterWta)}
        />WTA events
      </label>&nbsp;&nbsp;
      <b className="text-danger">{filteredData ? filteredData.length : 0}</b> */}


    </div>
  );
};

export default Filter;
