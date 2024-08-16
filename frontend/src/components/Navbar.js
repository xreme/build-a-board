import { Link } from 'react-router-dom';

const Navbar = () => {

    return(
        <header>
            <div className="container">
                <Link to = '/'>
                <img src="https://cdn1.iconfinder.com/data/icons/skateboard-and-surfskate-1/512/skate-skates-skateboard-surfskate-sports-activities-repair-fix-512.png"
                width={100} height={100} alt="skateboard"
                ></img>
                <h1>Build-a-Board</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar