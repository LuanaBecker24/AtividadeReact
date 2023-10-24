import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Destaques from "./components/Destaques";
import "./App.css"

const App = () => {
  return (
    <div className="centro">
      <Header/>
      <Home/>
      <Destaques />
      <Footer/>
    </div>
  )
};

export default App;