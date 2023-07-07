import React from "react";
import "./App.css";
import Card from "./components/Card";

const App = () => {
  return (
    <div className="App">
      <Card
        imgSrc="https://picsum.photos/300/200"
        imgAlt="Card Image"
        title="Card Title"
        description="Card Description lorem5 fklsdj asdljf fsldajf aslfj lafj lakdfsj alfk"
        buttonText="Learn More"
        link="cardPage"
      />
    </div>
  );
};

export default App;
