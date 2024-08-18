import FoodItem from "./FoodItem";
import hfstyles from "./HealthFood.module.css"

const FoodItemsList = ({ healthyFoodItems }) => {
    return (
        <ul className={`${hfstyles["hf-backgrnd-item"]} list-group`}>
            {healthyFoodItems.map((item) => <FoodItem key={item} foodItem={item}></FoodItem>)}
        </ul>
    );
};

export default FoodItemsList;