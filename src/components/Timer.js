const Timer = ({ limitRequestLeft, activeButton, danger, handleButtonClick }) => (
    <div className="row">
      <div className="col-12 mx-auto">
        <div>
          {danger ? (
            <div className="col-10 alert alert-danger mx-auto">{danger}</div>
          ) : null}
        </div>
        <h3 className="text-center text-success">
          Il te reste {limitRequestLeft} appels{" "}
        </h3>
        <p className="text-center">
          <button
            onClick={() => handleButtonClick(360000000)}
            className={`btn ${
              activeButton === 360000000 ? "btn-danger" : "btn-primary"
            }`}
          >
            stop it
          </button>
          &nbsp;
          <button
            onClick={() => handleButtonClick(36000000)}
            className={`btn ${
              activeButton === 36000000 ? "btn-danger" : "btn-primary"
            }`}
          >
            1h
          </button>
          &nbsp;
          <button
            onClick={() => handleButtonClick(60000)}
            className={`btn ${
              activeButton === 60000 ? "btn-danger" : "btn-primary"
            }`}
          >
            1 mn
          </button>
          &nbsp;
          <button
            onClick={() => handleButtonClick(5000)}
            className={`btn ${
              activeButton === 5000 ? "btn-danger" : "btn-primary"
            }`}
          >
            5 s
          </button>
        </p>
      </div>
    </div>
  );
  
  export default Timer;
  