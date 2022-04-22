const ImageWithText = ({img, title, content}) => {
    return ( 
        <div className="col-6 posR p-0">
            <img src={img} className="img-fluid posR" />
            <div className="posA">
                <p className="posR">{title}</p>
                <p className="posR">{content}</p>
            </div>
        </div>
     );
}

export default ImageWithText;