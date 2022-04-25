const RowWithImages = ({imgArr}) => {

    const arr = () => {
        let array = []

        for (let i = 0; i < imgArr.length; ++i) {
            array.push(
                <div className="col">
                    <img src={imgArr[i]} className="img-fluid" />
                </div>
            )
        }
        return array
    }

    return ( 
        <div className="row g-0">
			{arr()}
		</div>
     );
}
 
export default RowWithImages;