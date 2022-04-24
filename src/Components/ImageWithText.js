const ImageWithText = ({img, title, content}) => {
    return ( 
        <div className="col-6 posR">
            <img src={img} className="img-fluid" />
            <div className="posA">
                <p className="posR">{title}</p>
                <p className="posR">{content}</p>
            </div>
        </div>
     );
}

export default ImageWithText;