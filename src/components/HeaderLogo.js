import logo from "../assets/logo_horizontal_alpha.png";
import * as React from "react";


class HeaderLogo extends React.Component{

    componentDidMount(){
        window.addEventListener("scroll", this.resizeHeaderOnScroll);
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

    render(){
        return(
            <div style={{marginLeft: 20, backgroundColor: 'rgb(58,162,134)'}} className="logo-content fixed-top float-left">
                <img id="logo" src={logo} alt={"logo"}/>
            </div>
        )
    }
}

export default HeaderLogo