const PlayerImg = ({src}) => {
    return(
    <img src={src} className="rounded-circle ml-1" style={{ width: '40', height: '40px', objectFit: 'cover'}}/>
    )
}

export default PlayerImg;