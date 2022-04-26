const Description = ({img, desc, name, rank}) => {
    return ( 
        <div className="col g-0 text-center">
            <img src={img} className="roundImg" />
            <p className="p2 text-muted">{desc}</p>
                <p className="fs-3">{name}</p>
                <p className="rank text-muted">{rank}</p>
            </div>
     );
}
 
export default Description;