import Header from "components/molecules/Header";
import RouterView from 'router/index';

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <RouterView />
    </div>
  );
}

export default App;
