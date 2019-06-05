import React from 'react';
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import ContentItem from "./components/ContentItem";
import HealthyContent from "./components/HealthyContent";
import LooseWeight from "./components/LooseWeight";
import AddMuscle from "./components/AddMuscle";

const App = () => {

    const allRefs = ({
        firstRef: React.createRef(),
        secRef: React.createRef(),
        thRef: React.createRef(),
    });

    const scrollToRef = (ref) => ref.current.scrollIntoView({behavior: 'smooth', block: 'center'});

    return (
        <div>
            {/*Header*/}
            <MyHeader refs={allRefs} scrollToRef={scrollToRef}/>

            <div style={{paddingLeft: 70, paddingTop: 200, paddingBottom: 150, width: '70%'}} className="container-fluid">

                {/*Content Start*/}
                <ContentItem content={<HealthyContent/>} forwardRef={allRefs.firstRef} image={'https://api.potagercity.fr/images/fraises-box-5c927233bc8c2.jpg'} imageRight/>
                <ContentItem content={<LooseWeight/>} forwardRef={allRefs.secRef} image={'https://media1.popsugar-assets.com/files/thumbor/YQ_UvEoQqsexsEspvJjbNL0QN-c/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2015/08/25/668/n/1922729/63679add_edit_img_cover_file_845239_1440512157_1941013_855159504576023_195416366_n/i/Smoothie-Art.jpg'}/>
                <ContentItem content={<AddMuscle/>} forwardRef={allRefs.thRef} image={'https://feelgoodfoodie.net/wp-content/uploads/2016/10/Blueberry-Banana-Smoothie-6-400x600.jpg'} imageRight/>

                {/*Mailing Button*/}
                <div className="fixed-bottom-right">
                    <FontAwesomeIcon icon={faEnvelope} size="2x" color='white'/>
                </div>

            </div>
            {/*Footer*/}
            <MyFooter/>
        </div>
    );
};

export default App;