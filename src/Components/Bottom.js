import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faPinterest, faNpm } from "@fortawesome/free-brands-svg-icons"

const Bottom = () => {

    const arr = (images) => {
        let array = []

        for (let i = 0; i < images.length; ++i) {
            array.push(
                <button className="btn btn-lg">
                    <FontAwesomeIcon icon={images[i]} />
                </button>
            )
        }
        return array
    }

    return ( 
        <div className="col text-center bottom">
            <p className="fs-1">sunnyside</p>
            <div className="row justify-content-center g-0 pb-5 pt-2">
                <a href="#" className="col-1 a2">About</a>
                <a href="#" className="col-1 a2">Services</a>
                <a href="#" className="col-1 a2">Project</a>
            </div>
            <div className="col pb-5">
                {arr([faFacebook, faInstagram, faTwitter, faPinterest])}
            </div>
        </div>
     );
}
 
export default Bottom;