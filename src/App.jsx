import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import ContentHeading from "./Content Heading";
import ContentEntry from "./Content Entry";
import ContentName from "./ContentName";
import ContentPosts from "./ContentPosts";
import ContentTags from "./ContentTags";


const App = () =>{
  return(
      <div className="w3-content" style={{maxWidth: '1400px'}}>
          <Header/>
          <div className="w3-row">
              <div  className="w3-col l8 s12">
                  <ContentHeading/>
                  <ContentEntry/>
              </div>
              <div className="w3-col l4">
                  <ContentName/>
                  <ContentPosts/>
                  <ContentTags/>
              </div>
          </div>
          <Footer/>
      </div>
  )
}

export default App;