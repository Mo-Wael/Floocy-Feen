interface IProps {

}

const RightSide = ({} : IProps) => {
    return (
        <div className="right-side">
            <h1>Today<br/>{new Date().toLocaleDateString()}</h1>
            <div className="addExpanse">
                <h2>Add Expanse</h2>
                <form>
                    <label htmlFor="name">for What?</label>
                    <input type="text" id="name" placeholder="Expanse Name"/>
                    <label htmlFor="value">how much?</label>
                    <input type="number" id="value" placeholder="Expanse Value"/>
                    <button type="submit" className="addButton">Add</button>
                </form>
            </div>
        </div>  
    )
}

export default RightSide