const ErrorMessage = () => {
    //let food = [];
    let food = ["dal", "paneer", "ghee", "milk", "curd"];
    return (
        <>{food.length === 0 && <p>I am hungry.</p>}</>
    );
};

export default ErrorMessage;