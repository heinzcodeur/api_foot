import { useState, useEffect } from "react";
import axios from "axios"; // Assurez-vous d'importer axios si ce n'est pas déjà fait
import { formatDateToFrench, today } from "../functions/utils";
import JoUrl from "../functions/JoUrl";

const Olympics = () => {

    const [data, setData] = useState(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState(""); // État pour la discipline sélectionnée
    const [disciplines, setDisciplines] = useState([]);

    const getDisciplines = async () => {
        try {
            const response = await axios.get('/files/fixtures_03_08.json');
            let dis = [];

            response.data.units.forEach((element) => {
                console.log(element.disciplineName);

                // Vérifier l'existence de la discipline dans le tableau
                if (!dis.includes(element.disciplineName)) {
                    dis.push(element.disciplineName);
                }
            });

            // Trier le tableau par ordre alphabétique
            dis.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));


            setDisciplines(dis);
            // setData(response.data.units); // Mettre à jour l'état des données
        } catch (error) {
            console.warn("Erreur lors de la récupération des disciplines:", error);
        }
    };

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
        getDisciplines();
        getEvents();
    }, []); // Passer un tableau vide pour simuler componentDidMount


    // Gérer la sélection de la discipline
    const handleDisciplineChange = (event) => {
        setSelectedDiscipline(event.target.value);
    };

    // Filtrer les événements par la discipline sélectionnée
    const filteredData = data ? data.filter((item) => item.disciplineName === selectedDiscipline) : '';


    return (
        <div >
            {/* Vérifiez si les données sont disponibles avant de les mapper */}

            <div className="container">
                <div className="row">
                    <div className="col-12 mx-auto text-light">
                        <h1 className="text-center">Paris 2024 </h1>
                        <h4 className="text-center">{data ? data.length : ''} évènements</h4>
                        <div className="col-12 text-light text-center">
                        <select onChange={handleDisciplineChange}>
                        <option value="">-- Sélectionnez une discipline --</option>

                                {disciplines.map((item) => (
                                    <option key={item} value={item}>{item}</option>
                                ))
                                }
                            </select>

                        </div>
                        <div className="row justify-content-center">
                        {selectedDiscipline && filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                    <div key={index} className="col-md-3 border border-primary rounded mx-2 my-2">
                                        <span>{item.disciplineName}</span> <br />
                                        <span>{item.venueDescription}</span> <br />
                                        <span>{item.eventUnitName}</span> <br />
                                        <span>{item.phaseName}</span><br></br>
                                        <span>{formatDateToFrench(item.startDate)}</span>
                                        <h6>
                                            {item.competitors.length === 2 ? (
                                                item.competitors.map((competitor, competitorIndex) => (
                                                    <span key={competitorIndex}>
                                                        <p>{competitor.name} <b>{competitor.results.winnerLoserTie ? competitor.results.winnerLoserTie : ''}</b> <b>{competitor.results.mark ? competitor.results.mark : ''}</b></p>

                                                    </span>
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
