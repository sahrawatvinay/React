import BootstrapElements from "./components/BootstrapElements";
import HealthyFood from "./components/HealthyFood";

function App() {
  let name = "vinay";
  let numbr = 619;
  let getFullName = (lastName) => {
    return name + " " + lastName;
  };

  return <>
    Request No. : {numbr} Hello, My name is {name}, full name is {getFullName("Sahrawat")}; <br />
    <BootstrapElements></BootstrapElements>
    <HealthyFood></HealthyFood>
  </>
}

export default App;