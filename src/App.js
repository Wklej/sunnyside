import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './Components/Navbar';
import WeAre from './Components/WeAre';
import TextSlide from './Components/TextSlide';
import ImageSlide from './Components/ImageSlide';
import eggPic from './images/desktop/image-transform.jpg'
import cupPic from './images/desktop/image-stand-out.jpg'

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Navbar />

        <div className="row">
          <div className="col">
            <WeAre />
          </div>
        </div>
        
        <div className="container-fluid">
          <div className="row">
              <TextSlide title={"title1"} content={"bla blah bla"} />
              <ImageSlide img={eggPic} />
          </div>
          <div className="row">
              <ImageSlide img={cupPic} />
              <TextSlide title={"title2"} content={"dupa dupa dupa"} />
          </div>
        </div>

        







      {/* 

  We are creatives

  Transform your brand

  We are a full-service creative agency specializing in helping brands grow fast. 
  Engage your clients through compelling visuals that do most of the marketing for you.

  Learn more

  Stand out to the right audience

  Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 

  Learn more

  Graphic design
  Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.

  Photography
  Increase your credibility by getting the most stunning, high-quality photos that improve your business image.

  Client testimonials

  We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
  Emily R.
  Marketing Director

  Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
  Thomas S.
  Chief Operating Officer

  Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
  Jennie F.
  Business Owner

  About
  Services
  Projects
  Contact
  </p>
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
      </header>
    </div>
  );
}

export default App;
