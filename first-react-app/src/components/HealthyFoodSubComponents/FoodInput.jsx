import fipStyles from "./FoodInput.module.css"
const FoodInput = () => {
    const handleInputEvent = (event) => {
        console.log(event.target.value);
    };
    return (
        <input type="text" className={fipStyles.fipInput}
            onChange={handleInputEvent} />
    )
}

export default FoodInput;