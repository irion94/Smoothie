import React from 'react';
import MyHeader from "./components/MyHeader";
import {Home} from "./screens/Home";
import {BrowserRouter as Router} from "react-router-dom";
import MyFooter from "./components/MyFooter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ContentItem from "./components/ContentItem";
import faker from "faker";

const App = () => {

    const myRef = React.createRef() // Create ref object

    const scrollToRef = (ref) => ref.current && window.scrollTo(0, ref.current.offsetTop)

    React.useEffect(() => { // Add to scroll after component has mounted
        scrollToRef(myRef)
    }, []) // passing an empty array useEffect will run only once, similar to componentDidMount

    return (
            <Router>
                <MyHeader/>
                <button style={{marginTop:100}} className="btn" onMouseDown={() => scrollToRef(myRef)}>
                    lol
                </button>
                <div style={{paddingTop: 120, paddingLeft: 70, width: '70%'}} className="container">
                    <ContentItem photo={'https://unsplash.it/500/300?random'} imageRight/>
                    <ContentItem photo={'https://unsplash.it/500/300?random'}/>
                    <ContentItem photo={'https://unsplash.it/500/300?random'} imageRight/>
                    <ContentItem photo={faker.image.food()}/>
                    <ContentItem photo={faker.image.food()} imageRight/>
                    <ContentItem photo={faker.image.food()} />
                    <ContentItem photo={faker.image.food()} imageRight/>
                    <ContentItem photo={faker.image.food()} />
                    <ContentItem forwardRef={myRef} photo={faker.image.food()} imageRight/>
                    <ContentItem photo={faker.image.food()} />
                    <div className="fixed-bottom-right">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'/>
                    </div>z
                </div>
                <MyFooter/>
            </Router>
        );
}

export default App;