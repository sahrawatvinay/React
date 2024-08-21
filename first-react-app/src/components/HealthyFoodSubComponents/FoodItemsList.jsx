import FoodItem from "./FoodItem";
import hfstyles from "./HealthFood.module.css"
import { useState } from "react";

const FoodItemsList = ({ healthyFoodItems }) => {
    let [boughtitems, setboughtitems] = useState([]);
    const handleBuyButton = (event, item) => {
        let newItems = [...boughtitems, item];
        setboughtitems(newItems);
    };
    return (
        <ul className={`${hfstyles["hf-backgrnd-item"]} list-group`}>
            {healthyFoodItems.map((item) => <FoodItem key={item} foodItem={item} active={boughtitems.includes(item)} handleBuyClick={(event) => handleBuyButton(event, item)}></FoodItem>)}
        </ul>
    );
};

export default FoodItemsList;