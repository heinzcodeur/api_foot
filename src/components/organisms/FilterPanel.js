import React, { useEffect, useState } from "react";
import { checkAtp, checkBackSlash, checkGirlsBoys, checkItf, checkWta, createDateFromString } from "../../functions/utils";

const FilterPanel = ({ data, filters, setFilteredData, setFilters }) => {
  const handleFilterChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const filterData = (data, filters) => {
    // Filtrage initial
    let result = data.filter(
      (item) =>
        !checkItf(item.event_type_type) &&
        !checkBackSlash(item.event_first_player) &&
        !checkGirlsBoys(item.event_type_type)
    );

    // Ajout de la date de début à chaque élément
    result = result.map((item) => ({
      ...item,
      start_date: createDateFromString(item.event_date, item.event_time),
    }));

    // Tri initial par date de début
    result.sort((a, b) => a.start_date - b.start_date);

    // Application des filtres
    const filterConditions = [
      { condition: filters.live, fn: (item) => item.event_live === "1" },
      { condition: filters.atp, fn: (item) => checkAtp(item.event_type_type) },
      { condition: filters.wta, fn: (item) => checkWta(item.event_type_type) },
      { condition: filters.preview, fn: (item) => item.event_live === "0" && item.event_status !== "Finished" },
      { condition: filters.over, fn: (item) => item.event_status === "Finished" },
      { condition: filters.demain, fn: (item) => {
        const date1 = createDateFromString(item.event_date, item.event_time);
        const today = new Date();
        today.setHours(23, 59, 59, 999);
        return date1 > today;
      }},
    ];

    let filteredResult = [...result];

    filterConditions.forEach(({ condition, fn }) => {
      if (condition) {
        filteredResult = filteredResult.filter(fn);
      }
    });

    // Tri final
    if (filters.tri) {
      filteredResult.sort((a, b) => b.start_date - a.start_date);
    }

    return filteredResult;
  };

  useEffect(() => {
    if (data) {
      setFilteredData(filterData(data, filters));
    }
  }, [data, filters, setFilteredData]);

  return (
    <div className="col-12 text-light text-center">
      {Object.keys(filters).map((filter) => (
        <label key={filter} className="mr-3">
          <input
            type="checkbox"
            name={filter}
            checked={filters[filter]}
            onChange={handleFilterChange}
          />{" "}
          {filter} events
        </label>
      ))}
    </div>
  );
};

export default FilterPanel;
