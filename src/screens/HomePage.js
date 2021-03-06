import React from 'react';
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import $ from 'jquery'

import ContentItem from "../components/ContentItem";
import NewsletterForm from "../components/NewsletterForm";

import img1 from '../assets/smoothie1.jpg'
import img2 from '../assets/smoothie2.jpg'
import img3 from '../assets/smoothie3.jpg'
import img4 from '../assets/smoothie4.jpg'
import img5 from '../assets/smoothie5.jpg'
import TextContent from "../components/TextContent";
import HeaderLogo from "../components/HeaderLogo";

import '../styles/App.scss'

class HomePage extends React.Component {

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

        this.scrollToRef = this.scrollToRef.bind(this);
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

    componentDidMount(){
        let j$ = $,
            $slideLine = j$("#slide-line");

        const sections = $('#sections').children()
            , nav = $('ul')
            , nav_height = nav.outerHeight();


        $(window).on('scroll', function () {
            const cur_pos = $(this).scrollTop();
            sections.each(function() {
                const top = $(this).offset().top - nav_height *  8,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    $slideLine.css({
                        "width": nav.find('li[id='+$(this).attr('id')+']').width(),
                        "left": nav.find('li[id='+$(this).attr('id')+']').position().left
                    });
                }
            });
        });
    }

    render() {
        return (
            <div>
                {/*Header*/}
                <HeaderLogo/>
                <MyHeader refs={this.allRefs} scrollToRef={this.scrollToRef}/>
                <div id="sections" className="container">
                    {/*Content Start*/}
                    <ContentItem
                        id="1"
                        forwardRef={this.allRefs.first}
                        image={img1}
                        imageRight
                    >
                        {/*<OurProduct/>*/}
                        <TextContent
                            column
                            title={"Our Products"}
                            content={[
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                },
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                }
                            ]}
                        />
                    </ContentItem>

                    <ContentItem
                        id="2"
                        forwardRef={this.allRefs.second}
                        image={img2}
                    >
                        {/*Healthy*/}
                        <TextContent
                            textAlign={"center"}
                            title={"Health and Delicious"}
                            content={[
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                },
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                }
                            ]}
                        />
                    </ContentItem>

                    <ContentItem
                        id="3"
                        forwardRef={this.allRefs.third}
                        image={img3}
                        imageRight
                    >
                        {/*Loose Weight*/}
                        <TextContent
                            column
                            textAlign={"left"}
                            title={"Loose Weight"}
                            content={[
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                },
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                }
                            ]}
                        />
                    </ContentItem>

                    <ContentItem
                        id="4"
                        forwardRef={this.allRefs.fourth}
                        image={img4}
                    >
                        {/*Add Muscle*/}
                        <TextContent
                            textAlign={"left"}
                            title={"Add Muscle"}
                            content={[
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                },
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac libero nibh. Morbi condimentum elit non urna pharetra tincidunt et id erat. Maecenas pharetra ante vitae purus sollicitudin, gravida porta elit pellentesque."
                                }
                            ]}
                        />
                    </ContentItem>

                    <ContentItem
                        id="5"
                        forwardRef={this.allRefs.fifth}
                        image={img5}
                        imageRight
                    >
                        {/*About us*/}
                        <TextContent
                            textAlign={"right"}
                            title={"About us"}
                            content={[
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent velit dui, lacinia ac dignissim in, iaculis sed diam. Nam nec vehicula est, in viverra quam. Vivamus mollis rutrum ipsum eget."
                                },
                                {
                                    subtitle: "Lorem ipsu",
                                    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris cursus facilisis convallis. Sed maximus elit elit, quis suscipit mauris ultrices vel. Sed scelerisque rhoncus elit nec porta. Vestibulum mattis elit."
                                }
                            ]}
                        />
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
                            id="mailing-button"
                            onMouseDown={() => this.handleClick()}
                            icon={faEnvelope}
                            size="2x"
                            color='white'
                        />
                    </div>
                </div>
                {/*Footer*/}
                <MyFooter id={"bottom"}/>
            </div>
        );
    }
}

export default HomePage;