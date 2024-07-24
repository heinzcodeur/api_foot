const PlayerImg = ({src}) => {
    return(
    <img src={src} className="rounded-circle" style={{ width: '50px', height: '50px', objectFit: 'cover' }}/>
    )
}

export default PlayerImg;