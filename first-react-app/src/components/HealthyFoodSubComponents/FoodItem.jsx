import hfstyles from "./HealthFood.module.css"

const FoodItem = ({ foodItem }) => {
    return (
        <span className={`${hfstyles["hf-item-bg-color"]}`}><li className="list-group-item">{foodItem}</li></span>
    );
};

export default FoodItem;