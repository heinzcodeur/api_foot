import React, { useEffect, useState } from "react";
import axios from "axios";
import Navigation from "./Navigation";

const Countries = () => {
    const apikey_first = "7a3522b864msh458ad29cbfda53dp191cd6jsn8a9ecb8f7113";
    const tennis_live = "https://sports-live-scores.p.rapidapi.com/tennis/live";
    const tennis_bis = "https://allsportsapi2.p.rapidapi.com/api/tennis/events/18/7/2023";

    const [donnees, setData] = useState([]);
    // const [list_matchs, setListMatchs] = useState([]);
    const [limitRequestLeft, setLimitRequestLeft] = useState(0); // Utilisation de useState pour gérer limitRequestLeft


    useEffect(() => {
        axios.get(tennis_live, {
            headers: { "X-RapidAPI-Key": apikey_first },
        })
            .then((res) => {
                // Mise à jour de la variable limit_request_left avec le nombre d'appels restants
                console.log(limitRequestLeft);

                // Mise à jour de l'état 'donnees' avec la réponse de l'API
                setData(res.data.matches);
                console.log(donnees);
                setLimitRequestLeft(res.headers['x-ratelimit-requests-remaining']);                
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); // Les crochets vides signifient que le useEffect s'exécute seulement une fois au montage du composant

    return (
        <div>
            <Navigation />
            <hr />
            <h3 className="text-center">Il te reste {limitRequestLeft} appels</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>&nbsp;&nbsp;&nbsp;</th>
                        <th className="text-center">liste des matchs de ce jour</th>
                        <th>&nbsp;&nbsp;&nbsp;</th>
                    </tr>
                </thead>
                <tbody>
                    {donnees.map((match, index) => (
                        <tr key={index} className="border-bottom">
                            <td>{match["Tournament"]} - {match["Surface"]}</td>
                            <td>
                                <tr>
                                    <td>{match["Home Player"]}</td>
                                    <td><b>{match["Live Home Odd"]}</b></td>
                                    {/* <td><b>{match["Sets Player 1"]}</b></td> */}
                                </tr>
                                <tr>
                                    <td>{match["Away Player"]} &nbsp;</td>
                                    <td><b>{match["Live Away Odd"]}</b></td>
                                    {/* <td><b>{match["Sets Player 2"]}</b></td> */}
                                </tr>

                            </td>
                            <td>

                                <tr>
                                    <td>{match["Sets Player 1"]}</td></tr>
                                <tr>
                                    <td>{match["Sets Player 2"]}</td></tr>
                            </td>
                            <td>

                                <tr>
                                    <td>{match["Set1 Player 1"]}</td></tr>
                                <tr>
                                    <td>{match["Set1 Player 2"]}</td></tr>
                            </td>
                            <td>
                                <tr>
                                    <td>{match["Set2 Player 1"]}</td></tr>
                                <tr>
                                    <td>{match["Set2 Player 2"]}</td></tr>
                            </td>
                            <td>
                                <tr>
                                    <td>{match["Set3 Player 1"]}</td></tr>
                                <tr>
                                    <td>{match["Set3 Player 2"]}</td></tr>
                            </td>
                            <td>

                                <tr>
                                    <td className="text-success"><b>{match["Player 1 Score"]}</b></td></tr>
                                <tr>
                                    <td className="text-success"><b>{match["Player 2 Score"]}</b></td></tr>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
};

export default Countries;
