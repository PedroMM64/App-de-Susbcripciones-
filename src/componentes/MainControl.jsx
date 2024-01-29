import { useState } from "react";
import Balance from "./Balance";
import FormSubs from "./FormSubs";
import DisplayItems from "./DisplayItems";

const MainControl = ({ count }) => {
    const [subs, setSubs] = useState([])
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");

    const eliminarItem = id => {
        const newList = subs.filter(item => item.id != id);
        setSubs(newList);
    }

    const editItem = id => {
        subs.map(item => {
            if(item.id === id){
                setType(item.type);
                setPrice(item.price);
            }
        })
    }

    return (
        <>
            <div className="main-form">
                <Balance count={count} />
                <FormSubs
                    setType={setType}
                    setPrice={setPrice}
                    type={type}
                    price={price}
                    setSubs={setSubs}
                    subs={subs}
                />
            </div>
            <DisplayItems subs={subs} eliminarItem = {eliminarItem} editItem = {editItem} />
        </>
    );
}

export default MainControl;