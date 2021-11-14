import { useEffect, Suspense } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "components/molecules/Header";
import Footer from "components/molecules/Footer";
import RouterView from "router/index";

import "./App.scss";

const AppContent = () => {
  const { pathname, search } = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname, search]);

  return (
    <div className="App">
      <Header />
      <div className="content">
        <RouterView />
      </div>
      <Footer />
    </div>
  );
};
function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<div>loading</div>}>
        <Router>
          <AppContent />
        </Router>
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
