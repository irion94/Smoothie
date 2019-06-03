import * as  React from 'react'
import logo from '../logo_horizontal_alpha.png';
import {Link} from "react-router-dom";
import '../App.css'

class MyHeader extends React.Component {

    render() {
        return (
            <nav
                style={{height: 50, backgroundColor: 'rgb(58,162,134)'}}
                className="navbar fixed-top align-top"
            >
                <div style={{marginLeft: 20, backgroundColor: 'rgb(58,162,134)'}} className="rounded float-left">
                    <img height={100} src={logo} alt={"logo"}/>
                </div>
                <ul className="navbar">
                    <Link className="btn-lg btn-green" to={'/'}>
                        <li className="list-inline-item nav-link disabled">
                            <button className="bg-transparent border-0 font-weight-light navButtonFontColor">Home</button>
                        </li>
                    </Link>
                    <Link className="btn-lg btn-green" to={'/1'}>
                        <li className="list-inline-item nav-link disabled">
                            <button className="bg-transparent border-0 font-weight-light navButtonFontColor">Loose Weight</button>
                        </li>
                    </Link>
                    <Link className="btn-lg btn-green" to={'/2'}>
                        <li className="list-inline-item nav-link disabled">
                            <button className="bg-transparent border-0 font-weight-light navButtonFontColor">Add Muscle</button>
                        </li>
                    </Link>
                </ul>
            </nav>
        )
    }
}



export default MyHeader