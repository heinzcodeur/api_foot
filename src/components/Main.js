import Filter from "./Filter";

const Main = ({ data }) => { // Définir la props 'data' ici

  return (
    <div className="container mt-2">
      <div className="row">
        <h1 className="text-light text-center">Main page</h1>
      </div>
      <div className="row">
        <Filter data={data} />
      </div>
    </div>
  );
};

export default Main;