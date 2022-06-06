// import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const Navbar = () => {
    return ( 

        <div className="navbar fixed-top">
            {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button> */}
            <p className="col-6 logo">sunnyside</p>
            <a href="#" className="col-1 a3">About</a>
            <a href="#" className="col-1 a3">Services</a>
            <a href="#" className="col-1 a3">Projects</a>
            <button className="btn btn-lg rounded-pill btn-contact">CONTACT</button>
        </div>
        // <>
        //     <nav className="navbar navbar-expand-sm navbar-light bg-light">
        //             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        //                 <span className="navbar-toggler-icon"></span>
        //             </button>
        //             {/* <div className="collapse navbar-collapse" id="navbarNav">
        //             <ul className="navbar-nav">
        //                 <li className="nav-item">
        //                 <a className="nav-link active" aria-current="page" href="#">Home</a>
        //                 </li>
        //             </ul>
        //             </div> */}
        //     </nav>
        // </>
     );
}
 
export default Navbar;