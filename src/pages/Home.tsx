import Header from "../components/Header"
import LeftSide from "../components/LeftSide"
import RightSide from "../components/RightSide"

interface IProps {

}

const Home = ({} : IProps) => {
    return (
        <>
        <Header />
        <div className="home">
            <LeftSide />
            <RightSide />
        </div>
        </>
    )
}

export default Home