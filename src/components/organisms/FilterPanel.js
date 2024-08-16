import React from "react";

const FilterPanel = ({ filters, setFilters }) => {
    const handleFilterChange = (e) => {
        const { name, checked } = e.target;
        
        // Utiliser setFilters avec une fonction de mise à jour
        setFilters((prevFilters) => {
          // Log de prevFilters pour voir l'état précédent
          console.log('Previous filters:', prevFilters);
          
          // Retourner le nouvel état en mettant à jour le filtre spécifique
          return {
            ...prevFilters,
            [name]: checked,
          };
        });
      };
      

  return (
    <div className="col-12 text-light text-center">
      {Object.keys(filters).map((filter) => (
        <label key={filter}>
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

