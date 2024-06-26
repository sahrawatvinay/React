import { useState } from "react";

const Contact = () => {
  // eslint-disable-next-line
  const [car, setDetails] = useState({
    name: "gt",
    brand: "ford",
    color: "black",
    year: 2001,
  });

  return (
    <>
      <h1>Contact Me</h1>
      <p>
        My car is {car.name} , {car.brand}, color is {car.color}, year is
        {car.year}
      </p>
    </>
  );
};

export default Contact;
