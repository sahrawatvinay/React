import FoodHeading from "./HealthyFoodSubComponents/FoodHeading";
import ErrorMessage from "./HealthyFoodSubComponents/FoodErrorMessage";
import FoodItemsList from "./HealthyFoodSubComponents/FoodItemsList";
import Container from "./HealthyFoodSubComponents/Container";
import FoodInput from "./HealthyFoodSubComponents/FoodInput";
import { useState } from "react";

function HealthyFood() {
  let [foodInputValue, setfoodInputValue] = useState("");
  let [food, setfood] = useState(["dal", "paneer", "ghee"]);
  let getInputValue = (event) => {
    if (event.key === "Enter") {
      let valueToAdd = event.target.value;
      setfoodInputValue(valueToAdd);
      event.target.value = "";
      let newFood = [...food, valueToAdd];
      setfood(newFood);
    }
  };
  return (
    <>
      <Container>
        <FoodHeading></FoodHeading>
        <FoodInput
          handleInput={getInputValue}
          inputValue={foodInputValue}
        ></FoodInput>
        <ErrorMessage healthyFoodItems={food}></ErrorMessage>
        <FoodItemsList healthyFoodItems={food}></FoodItemsList>
      </Container>
    </>
  );
}

export default HealthyFood;
