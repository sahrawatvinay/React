import ctnStyle from "./Container.module.css";

const Container = ({ children }) => {
    return (
        <div className={ctnStyle.container}>{children}</div>
    );
};

export default Container;