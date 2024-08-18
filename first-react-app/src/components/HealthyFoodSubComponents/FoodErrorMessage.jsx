const ErrorMessage = ({healthyFoodItems}) => {
    return (
        <>{healthyFoodItems.length === 0 && <p>I am hungry.</p>}</>
    );
};

export default ErrorMessage;