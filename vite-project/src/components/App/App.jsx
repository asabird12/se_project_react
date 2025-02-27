import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  console.log("app is working");
  return (
    <div className="page__content">
      <div className="page">
        <Header />
        <Footer />
      </div>
    </div>
  );
}

export default App;
