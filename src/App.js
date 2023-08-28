import "./App.css"
import Home from "./routes/home/Home";
import {Routes, Route} from "react-router-dom";
import NavBar from "./routes/navbar/NavBar";
import Authentication from "./routes/authentication/Authentication";
import Shop from "./routes/shop/Shop";


function App() {

  return(
    <Routes>

      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
    
    </Routes>
  );
}

export default App;
