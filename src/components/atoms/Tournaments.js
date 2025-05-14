import React from "react";


const Tournaments = ({tournaments}) => {

    return (
        <div class="mx-auto mt-2">
            {tournaments.map((tournament, index) => (
                <label key={index} className="text-light">
                    <input
                        type="checkbox"
                        name="filter_tournoi"
                        checked={false} // Remplace par une variable d'état si tu veux gérer les cases à cocher
                    />
                    {tournament}&nbsp; &nbsp; &nbsp;
                </label>
            ))}
        </div>
    )

}


export default Tournaments;