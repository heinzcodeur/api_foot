const Main = ({ players }) => {
    return (
      <div className="row">
        <div className="col-8">
          <h1>hello roi</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati soluta esse explicabo beatae, perspiciatis laudantium blanditiis nobis odio
            repudiandae architecto nisi dolorum tempore hic. Soluta officia illum dolores numquam neque!
          </p>
          <ul>
          {players.map((player, index) => (
            <li key={index}>
              {player.rowName} {player.ranking}
              <br />
            </li>
                      ))}

          </ul>
        </div>
      </div>
    );
  };
  
  export default Main;
  