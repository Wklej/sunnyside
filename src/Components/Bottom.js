import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faNpm } from "@fortawesome/free-brands-svg-icons"

const Bottom = () => {

    const arr = (images) => {
        let array = []

        for (let i = 0; i < images.length; ++i) {
            array.push(
                <button className="btn">
                    <FontAwesomeIcon icon={images[i]} />
                </button>
            )
        }
        return array
    }

    return ( 
        <div className="col text-center">
            <p>sunnyside</p>
            <div className="row justify-content-center g-0">
                <div className="col-1">About</div>
                <div className="col-1">Services</div>
                <div className="col-1">Project</div>
            </div>
            <div className="col">
                {arr([faFacebook, faInstagram, faTwitter, faPinterest])}
            </div>
        </div>
     );
}
 
export default Bottom;