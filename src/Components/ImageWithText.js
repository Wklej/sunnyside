const ImageWithText = ({img, title, content}) => {

    const colorPhoto = {
        color: 'hsl(198, 62%, 26%)'
    };

    const colorGraphic = {
        color: 'hsl(167, 40%, 24%'
    };

    return ( 
        <div className="col-6 posR text-center">
            <img src={img} className="img-fluid" />
            <div className={"posA imageText"} 
                style={title === 'Photography' ? colorPhoto : colorGraphic }>
                <h1 className="posR">{title}</h1>
                <p className="posR pt-3">{content}</p>
            </div>
        </div>
     );
}

export default ImageWithText;