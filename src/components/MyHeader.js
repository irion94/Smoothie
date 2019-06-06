import * as  React from 'react'
import $ from "jquery";
import PropTypes from 'prop-types'

import logo from '../assets/logo_horizontal_alpha.png';
import '../styles/App.scss'

class MyHeader extends React.Component {

    componentDidMount() {
        window.addEventListener("scroll", this.resizeHeaderOnScroll);

        let j$ = $,
            $nav = j$("#navigation"),
            $slideLine = j$("#slide-line"),
            $currentItem = j$(".current-item");

        j$(function () {
            if ($currentItem[0]) {
                $slideLine.css({
                    "width": $currentItem.width(),
                    "left": $currentItem.position().left
                });
            }

            j$($nav).find("li").click(
                function () {
                    $slideLine.css({
                        "width": j$(this).width(),
                        "left": j$(this).position().left
                    });
                },
            );
        });
    }

    resizeHeaderOnScroll() {
        const distanceY = window.pageYOffset || document.documentElement.scrollTop,
            shrinkOn = 50,
            headerEl = document.getElementById("logo");

        if (distanceY > shrinkOn) {
            headerEl.classList.add("smaller");
        } else {
            headerEl.classList.remove("smaller");
        }
    }


    render() {
        const allRefs = this.props.refs;
        return (
            <header
                style={{backgroundColor: 'rgb(58,162,134)'}}
                className="navbar fixed-top" id="navigation"
            >
                <div style={{marginLeft: 20, backgroundColor: 'rgb(58,162,134)'}} className="logo-content row">
                    <img id="logo" src={logo} alt={"logo"}/>
                </div>
                <nav className="nav-fixed-top navbar-expand-sm btn-green">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item current-item">
                                <a className="nav-link btn" onClick={() => this.props.scrollToRef(allRefs.first)}>OUR PRODUCTS</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" onClick={() => this.props.scrollToRef(allRefs.second)}>HEALTHY & DELICIOUS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.scrollToRef(allRefs.third)}>LOSE WEIGHT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => this.props.scrollToRef(allRefs.fourth)}>ADD MUSCLE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" onClick={() => this.props.scrollToRef(allRefs.fifth)}>ABOUT US</a>
                            </li>
                        </ul>
                        <span id="slide-line"/>
                    </div>
                </nav>
            </header>
        )
    }
}

MyHeader.propTypes = ({
    scrollToRef: PropTypes.func.isRequired,
    refs: PropTypes.object.isRequired,
});



export default MyHeader