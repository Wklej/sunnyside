import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar';
import WeAre from './Components/WeAre';
import TextSlide from './Components/TextSlide';
import ImageSlide from './Components/ImageSlide';
import eggPic from './images/desktop/image-transform.jpg'
import cupPic from './images/desktop/image-stand-out.jpg'
import cherries from './images/desktop/image-graphic-design.jpg'
import oranges from './images/desktop/image-photography.jpg'
import ImageWithText from './Components/ImageWithText';
import img from './images/desktop/image-header.jpg'

const App = () => {
  return ( 
	<div className="container-fluid p-0">
		<Navbar />
		<WeAre />
        
		<div className="row g-0">
			<TextSlide title={"title1"} content={"bla blah bla"} />
			<ImageSlide img={eggPic} />
		</div>
		<div className="row g-0">
			<ImageSlide img={cupPic} />
			<TextSlide title={"title2"} content={"dupa dupa dupa"} />
		</div>
		<div className="row g-0">
			<ImageWithText img={cherries} title={"Graphic Design"} content={"cherry content"} />
			<ImageWithText img={oranges} title={"Photography"} content={"orange content"} />
		</div>
      
      
      
      
    </div>
   );
}
 
export default App;