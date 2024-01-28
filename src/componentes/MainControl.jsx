import Balance from "./Balance";
import FornSubs from "./FormSubs";

const MainControl = ({ count }) => {
    return (
        <div className="main-form">
            <Balance count = {count} />
            <FornSubs />
        </div>
    );
}

export default MainControl;