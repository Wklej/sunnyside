const TextSlide = ({title, content}) => {
    return (  
        <div className="col-6">
            <p>{title}</p>
            <p className="mt-2">{content}</p>
        </div>
    );
}
 
export default TextSlide;