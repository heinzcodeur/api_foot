<div>
    <img className="player-image" src={athlete.player_logo} alt={athlete.player_name} />
              {flagError === 0 ? (athlete.player_country === "USA" ? (
                    <img className="background-flag" 
                        src='https://media.cnewyork.net/uploads/2021/02/drapeau-americain.jpg' 
                        alt={athlete.player_country} 
                    />
                ) : athlete.player_country === "World" ? (
                    <img className="background-flag" 
                        src='https://tbmods.ru/garry-s-mod-pak-russkogo-oruzhiya-dlya-tfa.html' 
                        alt={athlete.player_country} 
                        />
                ):(
                    <img
                    className="background-flag"
                    src={athlete.flag}
                    alt={athlete.player_country}
                  />
                )
                ) : (
                    <span>no flag</span>
                    // <img className="background-flag" src={athlete.flag} />
                )}
</div>