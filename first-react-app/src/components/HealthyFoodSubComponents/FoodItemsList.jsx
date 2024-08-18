import FoodItem from "./FoodItem";

const FoodItemsList = ({ healthyFoodItems }) => {
    return (
        <ul className="list-group">
            {healthyFoodItems.map((item) => <FoodItem key={item} foodItem={item}></FoodItem>)}
        </ul>
    );
};

export default FoodItemsList;