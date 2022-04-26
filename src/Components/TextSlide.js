const TextSlide = ({title, content}) => {
    return (  
        <div className="col-6 text-left posR">
            <div className="text">
                <h1>{title}</h1>
                <p className="text-muted p1">{content}</p>
                <a href="#" className="a1">Learn more</a>
            </div>
        </div>
    );
}
 
export default TextSlide;