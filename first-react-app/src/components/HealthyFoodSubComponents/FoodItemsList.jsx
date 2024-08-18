const FoodItemsList = () => {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];
    return (
        <ul className="list-group">
            {food.map((item) =>
                <li key={item} className="list-group-item">{item}</li>
            )}
        </ul>
    );
};

export default FoodItemsList;