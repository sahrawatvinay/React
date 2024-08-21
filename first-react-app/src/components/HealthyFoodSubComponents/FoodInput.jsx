import fipStyles from "./FoodInput.module.css";
const FoodInput = ({ handleInput, inputValue }) => {
  return (
    <>
      <input
        type="text"
        className={fipStyles.fipInput}
        onKeyDown={handleInput}
      />
      <p>{inputValue}</p>
    </>
  );
};

export default FoodInput;
