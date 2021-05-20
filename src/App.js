import './App.css';

//imported components
import MyNavBar from './components/Nav/MyNavBar';
import MyCarousel from "./components/MyCarousel/MyCarousel.component";
import TitleMessage from './components/TitleMessage/title-message.component';

const App = () => {
  return (
    <div className="App">
      <MyNavBar />
      <MyCarousel />
      <TitleMessage />
    </div>
  );
}

export default App;
