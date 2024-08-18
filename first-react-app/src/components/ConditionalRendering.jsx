function HealthyFood() {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];

    return (
        <>
            <h3>Healthy Food items</h3>
            {food.length === 0 && <p>I am hungry.</p>}
            <ul className="list-group">
                {food.map((item) =>
                    <li className="list-group-item">{item}</li>
                )}
            </ul>
        </>
    );
}

export default HealthyFood;