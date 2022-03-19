import img from '../images/desktop/image-header.jpg'
import '../App.css'

const WeAre = () => {
    return (
        <div>
            <img src={img} className="img-fluid" />
            <p className='carousel-caption'>We are creatives</p>
        </div> 
     );
}
 
export default WeAre;