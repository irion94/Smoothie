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
                        // j$("#navigation").animate({height: "90px"});
                        // j$("#navigation ul li a").animate({height: "80px", padding: 30})
                    }
                    else {
                        $logoHeight.animate({height: '70px'});
                        // j$("#navigation").animate({height: "50px"});
                        // j$("#navigation ul li a").animate({height: "40px", padding: 5})

                    }
                }, 50);
        });
    }


    render() {
        return (
            <header
                style={{backgroundColor: 'rgb(58,162,134)'}}
                className="navbar fixed-top" id="navigation"
            >
                <div style={{marginLeft: 20, backgroundColor: 'rgb(58,162,134)'}} className="rounded row">
                    <img id="logo" src={logo} alt={"logo"}/>
                </div>
                <nav className="nav-fixed-top navbar-expand-sm btn-green">
                    <div className="collapse navbar-collapse">
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
            </header>
        )
    }
}



export default MyHeader