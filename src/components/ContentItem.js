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
                        {this.props.children}
                    </div>
                    <div className={`col ${this.imagePosition}`}>
                        <img src={this.props.image} style={{height:500, width: 500}}
                             className="img-fluid rounded-circle"/>
                    </div>
                </div>
            </div>

        )
    }
}

ContentItem.propTypes = ({
    imageRight: PropTypes.bool,
    children: PropTypes.object
});

ContentItem.defaultProps = ({
    imageRight: false,
    children: "Text or Content"
});

export default ContentItem