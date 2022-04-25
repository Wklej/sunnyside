const Description = ({img, desc, name, rank}) => {
    return ( 
        <div className="col g-0 text-center">
            <img src={img} className="roundImg" />
            <div className="row g-0">{desc}</div>
            <div className="row g-0">
                <p>{name}</p>
                <p>{rank}</p>
            </div>
        </div>
     );
}
 
export default Description;