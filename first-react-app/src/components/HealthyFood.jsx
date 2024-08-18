import FoodHeading from "./HealthyFoodSubComponents/FoodHeading";
import ErrorMessage from "./HealthyFoodSubComponents/FoodErrorMessage";
import FoodItemsList from "./HealthyFoodSubComponents/FoodItemsList";

function HealthyFood() {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];

    return (
        <>
            <FoodHeading></FoodHeading>
            <ErrorMessage healthyFoodItems={food}></ErrorMessage>
            <FoodItemsList healthyFoodItems={food}></FoodItemsList>
        </>
    );
}

export default HealthyFood;