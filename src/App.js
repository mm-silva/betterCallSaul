import logo from './logo.svg';
import './App.css';
import Navsbar from './components/Navbar';
import Carousel from './components/Carousel';
import Resume from './components/Resume';
import Figure from 'react-bootstrap/Figure';

function App() {
  return (
    <div>
            <Navsbar></Navsbar>
      <Figure className="position-absolute w-100">
          <Figure.Image style={{width:"100%"}}
            alt="171x180"
            src="/img/banner1.jpg"
          />
        </Figure>,
      <Carousel/>
      <Resume/>
    </div>   
  );
}

export default App;
