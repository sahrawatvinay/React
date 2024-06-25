import { useState } from "react";

function App() {
  const buttonClicked = (a, b) => {
    console.log("Button  Clicked!!!", a, b);
  };
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <button onClick={(e) => buttonClicked("Vinay btn", e)}>Click Me</button>
      <Garage />
      <TxtArea />
    </div>
  );
}

function Car(props) {
  return <li>{props.brand}</li>;
}

function Garage() {
  const cars = [
    { id: 1, brand: "Ford" },
    { id: 2, brand: "BMW" },
    { id: 3, brand: "Audi" },
  ];
  return (
    <>
      <h4>Garage car collections : </h4>
      <ul>
        {cars.map((item) => (
          <Car key={item.id} brand={item.brand} />
        ))}
      </ul>
    </>
  );
}

function TxtArea() {
  const [val, setValue] = useState("default value");

  const setTextAreaValue = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <textarea value={val} onChange={setTextAreaValue}></textarea>
    </form>
  );
}
export default App;
