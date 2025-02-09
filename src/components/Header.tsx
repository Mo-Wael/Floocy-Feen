import { Link } from "react-router-dom"
interface IProps {

}

const Header = ({} : IProps) => {
    return (
        <div className="header">
            <div className="left-header">
                <h1>Flowcy Feen 💸</h1>
                <button type="button" >En / AR</button>
            </div>
            <div className="right-header">
                <Link to='/' >Home</Link>
                <Link to='/calendar' >Calendar</Link>
            </div>
        </div>  
    )
}

export default Header