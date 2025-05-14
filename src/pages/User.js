const User = (props) => {

    return (
        <div className="bg-light col-6 mx-auto mt-4 text-break">
            <br></br>
            <hr></hr>
            <i class="fa-solid fa-user"></i>
            <b>{props.apiKey}</b>
        </div>
    )
};

export default User;