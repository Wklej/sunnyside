import img from '../images/desktop/image-header.jpg'
import '../App.css'

const WeAre = () => {
    return (
        <div className='posR'>
            <p className='posA weAreFont'>We are creatives</p>
            <img src={img} className="img-fluid" />
        </div> 
     );
}
 
export default WeAre;