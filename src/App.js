import React from 'react';
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ContentItem from "./components/ContentItem";
import faker from "faker";

const App = () => {

    const allRefs = ({
        firstRef: React.createRef(),
        secRef: React.createRef(),
        thRef: React.createRef(),
    });

    const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth', block: 'center'})

    return (
        <div>
            <MyHeader refs={allRefs} scrollToRef={scrollToRef}/>
            <div style={{paddingLeft: 70, paddingTop: 200, paddingBottom: 150, width: '70%'}} className="container-fluid">
                <ContentItem forwardRef={allRefs.firstRef} image={'https://unsplash.it/500/500?food'} imageRight/>
                <ContentItem forwardRef={allRefs.secRef} image={'https://unsplash.it/500/500?food'}/>
                <ContentItem forwardRef={allRefs.thRef} image={'https://unsplash.it/500/450?food'} imageRight/>
                <div className="fixed-bottom-right">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'/>
                </div>
            </div>
            <MyFooter/>
        </div>
    );
};

export default App;