const TextSlide = ({title, content}) => {
    return (  
        <div className="col-6">
            <p>{title}</p>
            <p className="mt-2">{content}</p>
            <a href="#">Learn more</a>
        </div>
    );
}
 
export default TextSlide;