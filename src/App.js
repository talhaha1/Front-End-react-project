
import './App.css';
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Stats from "./Components/Stats/Stats"
import Whoweare from "./Components/Whoweare/whoweare"
// import OurServics from "./Components/OurServics/OurServics"
import Testimonials from "./Components/Testimonials/Testimonials"
function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Stats />
      <Whoweare />
      {/* <Footer /> */}
      {/* <OurServics /> */}
      {/* <Testimonials /> */}
    </div>
  );
}

export default App;
