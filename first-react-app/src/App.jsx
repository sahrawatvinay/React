import BootstrapElements from "./components/BootstrapElements";
import HealthyFood from "./components/ConditionalRendering";

function App() {
  let name = "vinay";
  let numbr = 619;
  let getFullName = (lastName) => {
    return name + " " + lastName;
  };

  return <p>
    Request No. : {numbr} Hello, My name is {name}, full name is {getFullName("Sahrawat")}; <br />
    <BootstrapElements></BootstrapElements>
    <HealthyFood></HealthyFood>
  </p>
}

export default App;