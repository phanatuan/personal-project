import React from "react";
import Header from "./Header";
import Routes from "./Routes";

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header/>
        <Routes/>
      </div>
    );
  }
}

export default App;
