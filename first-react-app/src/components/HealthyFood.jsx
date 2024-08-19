import FoodHeading from "./HealthyFoodSubComponents/FoodHeading";
import ErrorMessage from "./HealthyFoodSubComponents/FoodErrorMessage";
import FoodItemsList from "./HealthyFoodSubComponents/FoodItemsList";
import Container from "./HealthyFoodSubComponents/Container";

function HealthyFood() {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];

    return (
        <>
            <Container>
                <FoodHeading></FoodHeading>
                <ErrorMessage healthyFoodItems={food}></ErrorMessage>
                <FoodItemsList healthyFoodItems={food}></FoodItemsList>
            </Container>

            <Container>
                <p>These are some healthy food items which will keep you fit and fine</p>
            </Container>
        </>
    );
}

export default HealthyFood;