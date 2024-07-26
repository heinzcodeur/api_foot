const Timer = ({ activeButton, handleButtonClick }) => {
    const buttons = [{ label: 'stop', duration: 360000000 },{ label: '10h', duration: 36000000 },{ label: '10 mn', duration: 60000 },{ label: '300 s', duration: 30000 },{ label: '100 s', duration: 10000 }];

    const makeButton = (item) => {
        let styl = '';
        item.duration === activeButton ? styl = 'btn btn-danger mr-2' : styl = 'btn btn-warning mr-2';
        return (
        <button className={`${styl}`} onClick={() => handleButtonClick(item.duration)}>{item.label}</button>
    );
}
  
    return (
      <div className="row mt-4">
        <div className="col-12 mx-auto">
          <p className="text-center">{buttons.map((item)=>{
                return(
                <button className={`${item.duration === activeButton ? 'btn btn-danger' : 'btn btn-success'} mr-2`} onClick={() => handleButtonClick(item.duration)}>{item.label}</button>
          )})}</p> 
        </div>
      </div>
    );
  };
  
  export default Timer;
  
  