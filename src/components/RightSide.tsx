interface IProps {

}

const RightSide = ({} : IProps) => {
    return (
        <div className="right-side">
            <h1>Today<br/>{new Date().toLocaleDateString()}</h1>
            <div className="addExpanse">
                <h2>Add Expanse</h2>
                <form>
                    <input type="text" placeholder="Expanse Name"/>
                    <input type="number" placeholder="Expanse Value"/>
                    <button type="submit" className="addButton">Add</button>
                </form>
            </div>
        </div>  
    )
}

export default RightSide