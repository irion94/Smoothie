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



    render() {
        const {scrollToRef, refs} = this.props;
        return (

                <nav id="navigation" className="sticky-top btn-green w-100">
                    <div className="float-right">
                        <ul className="flex-row navbar-nav mr-auto">
                            <li className="nav-item current-item">
                                <a className="nav-link btn" onClick={() => scrollToRef(refs.first)}>OUR PRODUCTS</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" onClick={() => scrollToRef(refs.second)}>HEALTHY & DELICIOUS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToRef(refs.third)}>LOSE WEIGHT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => scrollToRef(refs.fourth)}>ADD MUSCLE</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link btn" onClick={() => scrollToRef(refs.fifth)}>ABOUT US</a>
                            </li>
                        </ul>
                        <span id="slide-line"/>
                    </div>
                </nav>
        )
    }
}

MyHeader.propTypes = ({
    scrollToRef: PropTypes.func.isRequired,
    refs: PropTypes.object.isRequired,
});



export default MyHeader