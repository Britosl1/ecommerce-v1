import Boxes from "./components/Boxes";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Boxes.ConvertionRate />
      <Boxes.ConversionRatePerTrafficChannel />
    </>
  );
}

export default App;
