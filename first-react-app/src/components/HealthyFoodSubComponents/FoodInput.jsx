import fipStyles from "./FoodInput.module.css"
const FoodInput = ({handleInput}) => {
    return (
        <input type="text" className={fipStyles.fipInput}
            onChange={handleInput} />
    )
}

export default FoodInput;