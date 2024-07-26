const Roster = () => {
    {filteredData === null ? (
        <p>Loading...</p>
    ) : (
        filteredData.slice().reverse().map((item) =>
            <div key={item.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch mb-2 text-center $`{item.event_live === 1 ? bg-primary}`">
                <div className="border border-primary pt-2 d-flex flex-column justify-content-between w-100">
                    <ul className="text-light flex-grow-1 d-flex flex-column justify-content-between list-unstyled">
                        <li></li>
                        <li className="mb-2">
                                <PlayerImg src={item.event_first_player_logo} />
                            <span className="ms-2 text-primary m-l-3">{item.event_first_player}</span>
                            <span> VS </span>
                            <span className="ms-2 text-primary m-r-3">{item.event_second_player}</span>
                                <PlayerImg src={item.event_second_player_logo} />
                        </li>
                        <li>
                            <p>{item.event_type_type} </p>
                        </li>
                        <li>{item.tournament_round ? item.tournament_round : item.tournament_name}</li>
                        <li>
                            <p>{reverseDate(item.event_date)} - {item.event_time}</p>
                        </li>
                        <li className="text-success animated-item" style={{ transition: 'color 0.5s' }}>
                            <b>{item.event_game_result}</b>
                        </li>
                        <li>
                            {item.scores.length > 0 ? (
                                <span>
                                    {item.scores[0].score_first} - {item.scores[0].score_second} 
                                    {item.scores.length >= 2 && (
                                        <b>
                                            /{item.scores[1].score_first} - {item.scores[1].score_second} 
                                        </b>
                                    )}
                                    {item.scores.length >= 3 && (
                                        <>
                                            /{item.scores[2].score_first} - {item.scores[2].score_second}
                                        </>
                                    )}
                                </span>
                            ) : (
                                <>na</> // Valeur de repli si aucun score n'existe
                            )}

                            <p className="text-primary">{item.event_final_result}</p>
                            <p>match key: {item.event_key}</p>
                        </li>
                    </ul>
                </div>
                <br />
            </div>
        )
    )} 
};

export default Roster;