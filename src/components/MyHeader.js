import * as  React from 'react'
import logo from '../logo_horizontal_alpha.png';
import '../App.scss'
import $ from "jquery";

class MyHeader extends React.Component {

    componentDidMount() {
        let j$ = $,
            $nav = j$("#navigation"),
            $slideLine = j$("#slide-line"),
            $currentItem = j$(".current-item"),
            $logoHeight = j$("#logo");

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

        this.scrollTimer = null;
        j$(window).scroll(function () {
            let top = j$(document).scrollTop();
            clearTimeout(this.scrollTimer);
            this.scrollTimer = setTimeout(
                function () {
                    if (top < 50) {
                        $logoHeight.animate({height: '150px'});
                    }
                    else {
                        $logoHeight.animate({height: '80px'});
                    }
                }, 100);
        });


    }

    render() {
        return (
            <header
                style={{height: 90, backgroundColor: 'rgb(58,162,134)'}}
                className="navbar fixed-top" id="navigation"
            >
                <div style={{marginLeft: 20, backgroundColor: 'rgb(58,162,134)'}} className="rounded row">
                    <img id="logo" src={logo} alt={"logo"}/>
                </div>
                <nav className="nav-fixed-top navbar-expand-sm btn-green">
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active current-item">
                                <a className="nav-link">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link">Features</a>
                            </li>
                            <li className="nav-item btn-green">
                                <a className="nav-link btn">Pricing</a>
                            </li>
                        </ul>
                        <span id="slide-line"/>
                    </div>
                </nav>
                {/*<ul className="list-group-horizontal">*/}
                {/*<li className="current-item list-inline-item">*/}
                {/*<button*/}
                {/*className="bg-transparent border-0 font-weight-light navButtonFontColor font-weight-bold">Add*/}
                {/*Muscle*/}
                {/*</button>*/}
                {/*</li>*/}
                {/*<li className="list-inline-item">*/}
                {/*<button className="bg-transparent border-0 font-weight-light navButtonFontColor">Add Muscle*/}
                {/*</button>*/}
                {/*</li>*/}
                {/*<li className="list-inline-item">*/}
                {/*<button className="bg-transparent border-0 font-weight-light navButtonFontColor">Add Muscle</button>*/}
                {/*</li>*/}
                {/*<li className="list-inline-item">*/}
                {/*<button className="bg-transparent border-0 font-weight-light navButtonFontColor">Add Muscle*/}
                {/*</button>*/}
                {/*</li>*/}
                {/*</ul>*/}
            </header>
        )
    }
}



export default MyHeader