import { checkBackSlash, checkItf } from "../utils";
import PlayerRanking from "./PlayerRanking";

const Matchs = ({ donnees }) => (
  <div className="row">
    <div className="overflow-auto col-12">
      <table className="table table-striped">
        <thead></thead>
        <tbody>
          {donnees.map((match, index) =>
            !checkBackSlash(match["Home Player"]) ? (
              !checkItf(match["Tournament"]) ? (
                <tr key={index} className="border-bottom">
                  <td
                    className={`large-width-td ${
                      match["Surface"].includes("clay")
                        ? "bg-warning text-light"
                        : match["Surface"] === "Grass"
                        ? "bg-success text-light"
                        : "bg-info text-light"
                    }`}
                  >
                    {match["Tournament"]} - {match["Surface"]}
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>{match["Home Player"] || "N/A"} </td>
                          <td>
                            <PlayerRanking playerName={match["Home Player"]} />
                          </td>
                        </tr>

                        <tr>
                          <td>{match["Away Player"] || "N/A"} - </td>
                          <td>
                            <PlayerRanking 
                              playerName={match["Away Player"]}
                            ></PlayerRanking>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="text-danger">
                            <b>{match["Live Home Odd"]}</b>{" "}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-danger">
                            <b>{match["Live Away Odd"]}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="text-success">
                            {match["Sets Player 1"]}
                          </td>
                        </tr>
                        <tr>
                          <td className="text-success">
                            {match["Sets Player 2"]}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>{match["Set1 Player 1"]}</td>
                        </tr>
                        <tr>
                          <td>{match["Set1 Player 2"]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>{match["Set2 Player 1"]}</td>
                        </tr>
                        <tr>
                          <td>{match["Set2 Player 2"]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td>{match["Set3 Player 1"]}</td>
                        </tr>
                        <tr>
                          <td>{match["Set3 Player 2"]}</td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                  <td>
                    <table>
                      <tbody>
                        <tr>
                          <td className="text-success">
                            <b>{match["Player 1 Score"]}</b>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-success">
                            <b>{match["Player 2 Score"]}</b>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
              ) : null
            ) : null
          )}
        </tbody>
      </table>
    </div>
  </div>
);

export default Matchs;
