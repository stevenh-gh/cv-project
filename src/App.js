import React from "react";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Personal from "./components/Personal/Personal";

class App extends React.Component {
  render() {
    return (
      <div className="container mx-auto grid grid-cols-12">
        <div className="col-span-6 col-start-4">
          <Header />
          <Personal />
          <hr />
          <Education />
          <hr />
          <Experience />
        </div>
      </div>
    );
  }
}

export default App;
