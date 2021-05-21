import "./App.css";
import Fade from "react-reveal/Fade";
import { Parallax } from "react-parallax";
import Container from "react-bootstrap/Container";
import ProjectTimeline from "./components/Project-Timeline/ProjectTimeline.component";
// import Slide from ""

//imported components
import MyNavBar from "./components/Nav/MyNavBar";
// import MyCarousel from "./components/MyCarousel/MyCarousel.component";
// import TitleMessage from './components/TitleMessage/title-message.component';
import About from "./pages/About/About.component";

const App = () => {
  return (
    <div className="App">
      <MyNavBar /> {/* <MyCarousel /> */} {/* <TitleMessage /> */}{" "}
      {/* About me section */}{" "}
      <div>
        <Parallax
          blur={{
            min: -30,
            max: 30,
          }}
          bgImage={require("./assets/Bg1.png")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
          {/* Project timeline */}
          <div>
            <Container className="container-box rounded">
              
                
                <ProjectTimeline />
              
            </Container>
          </div>
          ProjectTimeline
        </Parallax>
      </div>
    </div>
  );
};

export default App;
