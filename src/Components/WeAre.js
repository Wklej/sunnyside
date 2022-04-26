import img from '../images/desktop/image-header.jpg'
import '../App.css'
import Arrow from '../images/icon-arrow-down.svg'

const WeAre = () => {
    return (
        <div className='posR'>
            <p className='posA weAreFont'>We are creatives</p>
            <img src={Arrow} className="arrow" />
            <img src={img} className="img-fluid" />
        </div> 
     );
}
 
export default WeAre;