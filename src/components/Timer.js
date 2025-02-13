import React from "react";

const Timer = ({ activeButton, handleButtonClick }) => {
  const buttons = [
    { label: "stop", value: 360000000 },
    { label: "1h", value: 36000000 },
    { label: "10 mn", value: 600000 },
    { label: "1 mn", value: 60000 },
    { label: "30 S", value: 30000 },
    { label: "10 s", value: 5000 },
  ];

  const getButtonClass = (value) => {
    return activeButton === value ? "btn-danger" : "btn-primary";
  };

  return (
    <div className="row mt-4">
      <div className="col-12 mx-auto">
        <p className="text-center">
          {buttons.map((button) => (
            <React.Fragment key={button.value}>
              <button
                onClick={() => handleButtonClick(button.value)}
                className={`btn ${getButtonClass(button.value)}`}
              >
                {button.label}
              </button>
              &nbsp;
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Timer;
