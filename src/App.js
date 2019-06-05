import React from 'react';
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

import ContentItem from "./components/ContentItem";
import HealthyContent from "./components/items_content/HealthyContent";
import LooseWeight from "./components/items_content/LooseWeight";
import AddMuscle from "./components/items_content/AddMuscle";
import NewsletterForm from "./components/NewsletterForm";
import OurProduct from "./components/items_content/OurProduct";

import img1 from '../src/res/smoothie1.jpg'
import img2 from '../src/res/smoothie2.jpg'
import img3 from '../src/res/smoothie3.jpg'
import img4 from '../src/res/smoothie4.jpg'
import img5 from '../src/res/smoothie5.jpg'

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };

        this.allRefs = ({
            first: React.createRef(),
            second: React.createRef(),
            third: React.createRef(),
            fourth: React.createRef(),
            fifth: React.createRef(),
        });

        this.scrollToRef = this.scrollToRef.bind(this)
        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);
    }

    scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth', block: 'center'});

    handleClick() {
        if (!this.state.visible) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            visible: !prevState.visible,
        }));
    }

    handleOutsideClick(e) {
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }


    //
    // isBottom(el) {
    //     return el.getBoundingClientRect().bottom <= window.innerHeight;
    // }
    //
    //
    // componentDidMount() {
    //     document.addEventListener('scroll', this.trackScrolling);
    // }
    //
    // componentWillUnmount() {
    //     document.removeEventListener('scroll', this.trackScrolling);
    // }
    //
    // trackScrolling = (e) => {
    //     const wrappedElement = document.getElementById('bottom');
    //     if (this.isBottom(wrappedElement)) {
    //         console.log('header bottom reached');
    //         this.handleClick()
    //
    //
    //         //document.removeEventListener('scroll', this.trackScrolling);
    //     }
    // };


    render() {
        return (
            <div>
                {/*Header*/}
                <MyHeader refs={this.allRefs} scrollToRef={this.scrollToRef}/>

                <div style={{paddingLeft: 70, paddingTop: 200, paddingBottom: 150, width: '70%'}}
                     className="container-fluid">

                    {/*Content Start*/}
                    <ContentItem
                        forwardRef={this.allRefs.first}
                        image={img1}
                        imageRight
                    >
                        <OurProduct/>
                    </ContentItem>
                    <ContentItem
                        forwardRef={this.allRefs.second}
                        image={img2}
                    >
                        <HealthyContent/>
                    </ContentItem>
                    <ContentItem
                        forwardRef={this.allRefs.third}
                        image={img3}
                        imageRight
                    >
                        <LooseWeight/>
                    </ContentItem>
                    <ContentItem
                        forwardRef={this.allRefs.fourth}
                        image={img4}
                    >
                        <AddMuscle/>
                    </ContentItem>
                    <ContentItem
                        forwardRef={this.allRefs.fifth}
                        image={img5}
                        imageRight
                    >
                        <AddMuscle/>
                    </ContentItem>

                    {/*Mailing Button & Mailing Content*/}
                    <div
                        ref={node => {
                            this.node = node;
                        }}
                        className="fixed-bottom-right"
                    >
                        <ReactCSSTransitionGroup
                            transitionName="example"
                            transitionEnterTimeout={500}
                            transitionLeaveTimeout={500}
                        >
                            {
                                this.state.visible && (
                                    <NewsletterForm/>
                                )
                            }
                        </ReactCSSTransitionGroup>
                        <FontAwesomeIcon
                            onMouseDown={() => this.handleClick()}
                            icon={faEnvelope} size="2x"
                            color='white'
                        />
                    </div>

                </div>
                {/*Footer*/}
                <MyFooter id={"bottom"}/>
            </div>
        );
    }
};

export default App;