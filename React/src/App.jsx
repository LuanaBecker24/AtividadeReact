import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css"

const App = () => {
  return (
    <div className="centro">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
};

export default App;