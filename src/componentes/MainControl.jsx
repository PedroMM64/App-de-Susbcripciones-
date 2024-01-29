import { useState } from "react";
import Balance from "./Balance";
import FormSubs from "./FormSubs";

const MainControl = ({ count }) => {
    const [subs, setSubs] = useState([])
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    return (
        <div className="main-form">
            <Balance count = {count} />
            <FormSubs 
                setType = {setType} 
                setPrice = {setPrice} 
                type = {type} 
                price = {price} 
                setSubs = {setSubs} 
                subs = {subs}
                />
        </div>
    );
}

export default MainControl;