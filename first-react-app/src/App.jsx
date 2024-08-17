import BootstrapElements from "./components/BootstrapElements";

function App() {
  let name = "vinay";
  let numbr = 619;
  let getFullName = (lastName) => {
    return name + " " + lastName;
  }

  return <p>
    Request No. : {numbr} Hello, My name is {name}, full name is {getFullName("Sahrawat")}; <br />
    <BootstrapElements></BootstrapElements>
  </p>
}

export default App;