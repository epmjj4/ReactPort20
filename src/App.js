import './App.css';
import Fade from 'react-reveal/Fade';
import { Parralax} from 'react-parallax';
import { Container} from 'react-bootstrap';

//imported components
import MyNavBar from './components/Nav/MyNavBar';
import MyCarousel from "./components/MyCarousel/MyCarousel.component";
import TitleMessage from './components/TitleMessage/title-message.component';
import About from './pages/About/about.component';


const App = () => {
  return (
    <div className="App" style={{ position: 'relative'}}>
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
      {/* About me section */}
      <div>
        <Parralax   blur={{ min: -30, max: 30 }}
          bgImage={require('./assets/Bg1.png')}
          bgImageAlt=""
          strength={-200} >
            <Container className='container-box rounded'>
              <Fade duration={500}>
      <About />
      </Fade>
      </Container>
      </Parralax>
      </div>
    </div>
  );
}

export default App;
