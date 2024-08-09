import { useState, useEffect } from "react";
import axios from "axios";
import { formatDateToFrench, today } from "../functions/utils";
import JoUrl from "../functions/JoUrl";

const Olympics = () => {
    const [data, setData] = useState(null);
    const [selectedDiscipline, setSelectedDiscipline] = useState(""); // État pour la discipline sélectionnée
    const [disciplines, setDisciplines] = useState([]);
    const [running, setRunning] = useState(false);
    const [next, setNext] = useState(false);
    const [disciplinesLoaded, setDisciplinesLoaded] = useState(false); // Nouvel état pour le chargement des disciplines

    const jo_url = JoUrl();

    const getEvents = async () => {
        try {
            const response = await axios.get(jo_url);
            setData(response.data.units);
        } catch (error) {
            console.warn(error);
        }
    };

    const getDisciplines = async () => {
        try {
            if (data) {
                let dis = [];

                data.forEach((element) => {
                    if (!dis.includes(element.disciplineName)) {
                        dis.push(element.disciplineName);
                    }
                });

                dis.sort((a, b) => a.localeCompare(b, 'fr', { sensitivity: 'base' }));

                setDisciplines(dis);
                setDisciplinesLoaded(true); // Marquer les disciplines comme chargées
            }
        } catch (error) {
            console.warn("Erreur lors de la récupération des disciplines:", error);
        }
    };

    // Utiliser useEffect pour appeler getEvents lors du montage du composant
    useEffect(() => {
        getEvents();
    }, []); // Passer un tableau vide pour simuler componentDidMount

    // Appeler getDisciplines une fois que les données sont récupérées
    useEffect(() => {
        if (data) {
            getDisciplines();
        }
    }, [data]); // Réexécuter quand data change

    // Gérer la sélection de la discipline
    const handleDisciplineChange = (event) => {
        setSelectedDiscipline(event.target.value);
    };

    // Fonction de gestion du changement pour la case à cocher "en cours"
    const handleRunningChange = (e) => {
        setRunning(e.target.checked);
    };

    // Fonction de gestion du changement pour la case à cocher "à venir"
    const handleNextChange = (e) => {
        setNext(e.target.checked);
    };

    // Filtrer les événements par la discipline sélectionnée et le statut
    const filteredData = data
        ? data.filter((item) => {
              const isToday = new Date(item.startDate).toDateString() === new Date().toDateString();
              const isRunning = item.status === "RUNNING";
              const isSelectedDiscipline = selectedDiscipline === "" || item.disciplineName === selectedDiscipline;

              return (
                  isToday && // Tous les événements d'aujourd'hui
                  isSelectedDiscipline && // Discipline sélectionnée ou toutes
                  (!running || isRunning) // Filtrer "en cours" seulement si coché
              );
          })
        : [];

    return (
        <div>
            <div className="container mb-4" style={{ width: "90%" }}>
                <div className="row">
                    <div className="col-12 mx-auto text-light">
                        <h1 className="text-center">Paris 2024 </h1>
                        <h4 className="text-center">
                            {filteredData.length > 0
                                ? filteredData.length === 1
                                    ? "1 événement"
                                    : filteredData.length + " événements"
                                : "Aucun événement"}
                        </h4>
                        <div className="col-12 text-light text-center">
                            <select onChange={handleDisciplineChange} disabled={!disciplinesLoaded}>
                                <option value="">-- Sélectionnez une discipline --</option>
                                {disciplines.map((item) => (
                                    <option key={item} value={item}>
                                        {item}
                                    </option>
                                ))}
                            </select>
                            &nbsp;&nbsp;&nbsp;

                            <label>
                                <input
                                    type="checkbox"
                                    checked={running}
                                    onChange={handleRunningChange}
                                    className="m-l-3"
                                />
                                <span className="checkbox-label">en cours</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    checked={next}
                                    onChange={handleNextChange}
                                    className="m-l-3"
                                />
                                <span className="checkbox-label">à venir</span>
                            </label>
                        </div>
                        <div className="row justify-content-center">
                            {filteredData.length > 0 ? (
                                filteredData.map((item, index) => (
                                    <div key={index} className="col-md-3 border border-primary rounded mx-2 my-2">
                                        <span>
                                            <b>{item.disciplineName}</b>
                                        </span>{" "}
                                        <br />
                                        <span>{item.venueDescription}</span> <br />
                                        <span>{item.eventUnitName}</span> <br />
                                        <span>{item.phaseName}</span>
                                        <br />
                                        <span>{formatDateToFrench(item.startDate)}</span>
                                        <h6>
                                            {item.competitors.length === 2
                                                ? item.competitors.map((competitor, competitorIndex) => (
                                                      <span key={competitorIndex}>
                                                          <p>
                                                              {competitor.name}{" "}
                                                              {/* <b>
                                                                  {competitor.results.winnerLoserTie
                                                                      ? competitor.results.winnerLoserTie
                                                                      : ""}
                                                              </b>{" "}
                                                              <b>
                                                                  {competitor.results.mark ? competitor.results.mark : ""}
                                                              </b> */}
                                                          </p>
                                                      </span>
                                                  ))
                                                : ""}
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
