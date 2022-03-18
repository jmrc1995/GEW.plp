
import './index.css';
import Banner from './components/Banner';
import Circles from './components/Circles';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className='parent-container'>
      <Navigation/>
      <Banner />
      <Circles />
      <Footer/>
    </div>
  );
}

export default App;
