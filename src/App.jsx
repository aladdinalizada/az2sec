import Header from "./layouts/header/header";
import Hero from "./pages/Hero/Hero";
import Zero from "./pages/Zero/Zero";

function App() {
  localStorage.setItem("lang", "az");
  return (
    <>
      <div className="App">
        <Zero />
        <Header />
        <Hero />
      </div>
    </>
  );
}

export default App;
