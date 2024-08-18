import FoodHeading from "./HealthyFoodSubComponents/FoodHeading";
import ErrorMessage from "./HealthyFoodSubComponents/FoodErrorMessage";
import FoodItemsList from "./HealthyFoodSubComponents/FoodItemsList";

function HealthyFood() {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];

    return (
        <>
            <FoodHeading></FoodHeading>
            <ErrorMessage></ErrorMessage>
            <FoodItemsList></FoodItemsList>
        </>
    );
}

export default HealthyFood;