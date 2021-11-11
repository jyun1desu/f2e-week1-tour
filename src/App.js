import { BrowserRouter as Router } from "react-router-dom";

import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import RouterView from "router/index";

import "./App.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <RouterView />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
