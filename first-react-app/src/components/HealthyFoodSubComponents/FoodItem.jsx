import hfstyles from "./HealthFood.module.css"
const handleBuyButtonClicked = () => {
    console.log("BUY CLICKED", event);
};
const FoodItem = ({ foodItem }) => {
    return (
        <li className="list-group-item"><span>{foodItem}</span><button className="btn btn-info" style={{float: "right"}}>buy</button></li>
    );
};

export default FoodItem;