const FornSubs = () => {
    return ( 
        <div className="add-subscription">
            <h3>Agregar Subscripciones</h3>
            <form action="">
                <p>Servicio</p>
                <select name="" id="">
                    <option value="">--Elegir una subscripcion</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyPlus">Disney Plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starPlus">Star Plus</option>
                    <option value="primeVideo">Prime Video</option>
                    <option value="spotify">Spotify</option>
                    <option value="appleTv">Apple TV</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="$20" />
                <input type="submit" value="Agregar" />
            </form>
        </div>
    );
}

export default FornSubs;