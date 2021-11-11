import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import RouterView from "router/index";

import "./App.scss";

function App() {

  return (
    <div className="App">
      <Header />
      <div className="content">
        <RouterView />
      </div>
      <Footer />
    </div>
  );
}

export default App;
