import "./App.css"
import Home from "./routes/home/Home";
import {Routes, Route} from "react-router-dom";
import NavBar from "./routes/navbar/NavBar";
import SignIn from "./routes/sign-in/SignIn";


function App() {

  return(
    <Routes>

      <Route path="/" element={<NavBar/>}>
        <Route index element={<Home/>}/>
        <Route path="sign-in" element={<SignIn/>}/>
      </Route>
    
    </Routes>
  );
}

export default App;
