const User = (props) => {
  return (
    <div className="bg-light col-6 mx-auto mt-4">
      <br></br>
      <hr></hr>
      {/* <i class="fa-solid fa-user"></i> */}
      <b style={{ wordBreak: "break-all" }}>{props.apiKey}</b>
    </div>
  );
};

export default User;
