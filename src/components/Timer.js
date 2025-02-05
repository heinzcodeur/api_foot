import React from "react";

const Timer = ({ handleButtonClick, delay, activeButton, limitRequestLeft }) => {
  const buttons = [
    { delay: 360000000, label: "stop" },
    { delay: 36000000, label: "1h" },
    { delay: 600000, label: "1 mn" },
    { delay: 10000, label: "10 s" },
    { delay: 5000, label: "5 s" }
  ];

  return (
    <div className="fixed-top timer-fixed">
      <p className="text-center margin-auto p-revert">
        
        {buttons.map((button, index) => (
        //   <React.Fragment key={button.delay}>
            <button
              onClick={() => handleButtonClick(button.delay)}
              className={`btn ${
                activeButton === button.delay ? "btn-danger" : "btn-primary"
              } timer`}
            >
              {button.label}
              
            </button> 
            
            // {index < buttons.length - 1 && "\u00A0"}
        //   </React.Fragment>
        ))}
        <span className="text-center text-success">
              &nbsp; {limitRequestLeft} appels{" "} 
            </span>
      </p>
    </div>
  );
};

export default Timer;