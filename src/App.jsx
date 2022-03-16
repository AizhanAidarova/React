import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const App = () =>{
  return(
      <div className="w3-content" style={{maxWidth: '1400px'}}>
          <Header/>
          <Content/>
          <Footer/>
      </div>
  )
}

export default App;