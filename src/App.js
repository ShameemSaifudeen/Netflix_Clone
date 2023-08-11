import Navbar from "./Components/NavBar/Navbar";
import React from "react";
import './App.css'
import Banner from "./Components/Banner/Banner"; 
import Rowposter from "./Components/RowPoster/Rowposter";
import {orginals,actions,comedy,romance,horror} from './Urls'

function App() {
  return (
    <div className="App">
     <Navbar/>
     <Banner/>
     <Rowposter url={orginals} title='Netflix Orginals'/>
     <Rowposter url={actions} title='Action' isSmall/>
     <Rowposter url={romance} title='Romance' isSmall/>
     <Rowposter url={comedy} title='Comedy' isSmall/>
     <Rowposter url={horror} title='Horror' isSmall/>

    </div>
  );
}

export default App;
