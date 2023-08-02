import { MemoryRouter as Router } from "react-router-dom";
import { Home, Footer, Header } from "./pages";

function App() {
  return (
    <Router>
      <div className="layout">
        <Header />
        <Home />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
