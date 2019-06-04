import * as React from 'react'
import Img from 'react-image'
import faker from 'faker'
import PropTypes from 'prop-types'

class ContentItem extends React.Component {

    componentWillMount() {
        if (this.props.imageRight) {
            this.imagePosition = 'order-1 rounded-right ml-2';
            this.contentOrder = 'order-0 rounded-left'
        }
        else {
            this.imagePosition = 'order-0 rounded-left mr-2 pr-1';
            this.contentOrder = 'order-1 rounded-right'
        }
    }

    render(){
        return(
            <div ref={this.props.forwardRef} className="row justify-content-center">
                <div className="row ">
                    Title
                </div>
                <div className="row rounded-circle p-3" style={{width: "inherit"}}>
                    <div className={`${this.imagePosition}`}>
                        <Img className={`img ${this.imagePosition}`} src={this.props.photo}/>
                    </div>
                    <div className={`col ${this.contentOrder}`} style={{backgroundColor: 'rgba(0,0,0,0.1'}}>
                        {
                            faker.random.words(50)
                        }
                    </div>
                </div>
            </div>
        )
    }
}

ContentItem.propTypes = ({
   imageRight: PropTypes.bool
});

ContentItem.defaultProps = ({
    imageRight: false
});

export default ContentItem