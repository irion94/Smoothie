import * as React from 'react'
import PropTypes from 'prop-types'

class ContentItem extends React.Component {

    componentWillMount() {
        if (this.props.imageRight) {
            this.imagePosition = 'order-1';
            this.contentOrder = 'order-0'
        }
        else {
            this.imagePosition = 'order-0';
            this.contentOrder = 'order-1'
        }
    }

    render(){
        return(
            <div ref={this.props.forwardRef} className="container p-3 center">
                <div className="row">
                    <div className={`col text-center align-self-center ${this.contentOrder}`}>
                        {this.props.text}
                    </div>
                    <div className={`col ${this.imagePosition}`}>
                        <img src={this.props.image}
                             className="img-fluid"/>
                    </div>
                </div>
            </div>

        )
    }
}

ContentItem.propTypes = ({
    imageRight: PropTypes.bool,
    text: PropTypes.object
});

ContentItem.defaultProps = ({
    imageRight: false,
    text: <div>
            <h3>Title</h3>
            <p>#whenever #whatever<br/>
                #dsth<br/>
                #Lorem / ipsu et</p>
            <a href="#">Click button!</a>
        </div>
});

export default ContentItem