import Item from "../../Item/Item"
import './Home.scss';


const Home = () => {
    return (<div className="home">
        {/* <Toolbar /> */}
        <div className='items'>
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    </div>)
}

export default Home;