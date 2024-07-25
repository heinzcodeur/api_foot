const PlayerImg = ({ src }) => {
  return src ? (
    <img src={src} className="rounded-circle" style={{ width: "50px", height: "50px", objectFit: "cover" }} />
  ) : (
    <i className="fas fa-user rounded-circle"></i>
  );
};

export default PlayerImg;
