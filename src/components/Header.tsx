interface IProps {

}

const Header = ({} : IProps) => {
    return (
        <div className="header">
            <div className="left-header">
                <h1>Flowcy Feen 💸</h1>
                <button title="lang" className="langButton">En / AR</button>
            </div>
            <div className="right-header">
                <button title="Home">Home</button>
                <button title="Calendar">Calendar</button>
            </div>
        </div>  
    )
}

export default Header