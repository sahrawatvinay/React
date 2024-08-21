const FoodItem = ({ foodItem, handleBuyClick, active }) => {
    return (
        <li className={`list-group-item ${active && "active"}`}><span>{foodItem}</span>
            <button onClick={handleBuyClick} className="btn btn-info" style={{ float: "right" }}>buy</button>
        </li>
    );
};

export default FoodItem;