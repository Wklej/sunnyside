import img from '../images/desktop/image-header.jpg'
import '../App.css'

const WeAre = () => {
    return (
        <div className='posR'>
            <img src={img} className="img-fluid" />
            <p className='posA'>We are creatives</p>
        </div> 
     );
}
 
export default WeAre;