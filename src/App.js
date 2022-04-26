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
import Description from './Components/Description';
import Emily from './images/image-emily.jpg'
import Jennie from './images/image-jennie.jpg'
import Thomas from './images/image-thomas.jpg'
import milks from './images/desktop/image-gallery-milkbottles.jpg'
import orange from './images/desktop/image-gallery-orange.jpg'
import sugarcubes from './images/desktop/image-gallery-sugarcubes.jpg'
import cone from './images/desktop/image-gallery-cone.jpg'
import RowWithImages from './Components/RowWithImages';
import Bottom from './Components/Bottom';


const App = () => {

	const dummyDesc = "Dummy description bla bla bla\
	 asda sdasda, sadasdasd \
	 asdasdasdasdasdasd."

  return ( 

	<div className="app">
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
			<div className="row g-0">
				<p className='text-center'>Client testimonials</p>
			</div>
			<div className="row g-0">
				<Description img={Emily} desc={dummyDesc} name={'Emily R.'} rank={'Marketing Director'} />
				<Description img={Thomas} desc={dummyDesc} name={'Thomas S.'} rank={'Chief Operating Officer'} />
				<Description img={Jennie} desc={dummyDesc} name={'Jennie F.'} rank={'Business Owner'} />
			</div>
			
			<RowWithImages imgArr={[milks, orange, cone, sugarcubes]} />

			<Bottom />
		
		</div>
	</div>
   );
}
 
export default App;