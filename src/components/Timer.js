const Timer = ({activeButton, handleButtonClick }) => (
    <div className="row mt-4">
      <div className="col-12 mx-auto">
        
        <p className="text-center">
          <button
            onClick={() => handleButtonClick(360000000)}
            className={`btn ${
              activeButton === 360000000 ? "btn-danger" : "btn-primary"
            }`}
          >
            stop
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
            onClick={() => handleButtonClick(30000)}
            className={`btn ${
              activeButton === 30000 ? "btn-danger" : "btn-primary"
            }`}
          >
            30 S
          </button>
          &nbsp;
          <button
            onClick={() => handleButtonClick(5000)}
            className={`btn ${
              activeButton === 5000 ? "btn-danger" : "btn-primary"
            }`}
          >
            10 s
          </button>
        </p>
      </div>
    </div>
  );
  
  export default Timer;
  