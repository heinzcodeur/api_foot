import { useState, useEffect } from "react";
import axios from "axios"; // Assurez-vous d'importer axios si ce n'est pas déjà fait
import { today } from "../functions/utils";
import JoUrl from "../functions/JoUrl";

const Olympics = () => {
    const [data, setData] = useState(null);


    const jo_url = JoUrl();
    const getEvents = () => {
        axios
            .get(jo_url)
            .then((res) => {
                setData(res.data.units);
            })
            .catch((error) => {
                console.warn(error);
            });
    };

    // Utiliser useEffect pour appeler getEvents lors du montage du composant
    useEffect(() => {
        getEvents();
    }, []); // Passer un tableau vide pour simuler componentDidMount

    return (
        <div >
            {/* Vérifiez si les données sont disponibles avant de les mapper */}

            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto text-light">
                        <h1 className="text-center">Paris 2024</h1>
                        <div className="row justify-content-center">
                            {data ? (
                                data.map((item, index) => (
                                    <div key={index} className="col-md-3 border border-primary rounded mx-2 my-2">
                                        <span>{item.disciplineName}</span> <br />
                                        <span>{item.venueDescription}</span> <br />
                                        <span>{item.eventUnitName}</span> <br />
                                        <span>{item.phaseName}</span>
                                        <h6>
                                            {item.competitors.length === 2 ? (
                                                item.competitors.map((competitor, competitorIndex) => (
                                                    <div key={competitorIndex}>{competitor.name}</div>
                                                ))
                                            ) : ''}
                                        </h6>
                                    </div>
                                ))
                            ) : (
                                <p>Chargement des événements...</p> // Afficher un message de chargement ou un indicateur
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Olympics;
