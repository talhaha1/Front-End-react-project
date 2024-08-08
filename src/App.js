import NavBar from './Components/NavBar/nav'
import Footer from './Components/Footer/footer'
import Services from './Components/Services/services'
import DigitalMarketing from './Components/DigitalMarketing/digitalMarketing';
import Home from './Components/Home/home';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <Services/>
      <DigitalMarketing/>
      <Footer/>
    </div>
  );
}

export default App;
