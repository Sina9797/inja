import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Menu from "./components/Menu/Menu";
import "./Responsive.scss";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Index from "./Routes/Index/Index";
import { BrowserRouter,Routes,Route } from "react-router-dom";












function App() {
  return (
    <>
 
<BrowserRouter>
<Header/>
<Routes>

<Route path="/" element={<Index/>}  />



</Routes>

<Footer/>

</BrowserRouter>

    </>
  );
}

export default App;







