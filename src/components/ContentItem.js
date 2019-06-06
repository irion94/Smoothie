import * as React from 'react'
import PropTypes from 'prop-types'

const ContentItem = ({image, imageRight, forwardRef, children}) => (
    <div ref={forwardRef} className="container p-3 center">
        <div className="row align-items-center">
            <div className={`col text-center align-self-center ${imageRight ? 'order-0' : 'order-1'}`}> {children} </div>
            <div className={`col ${imageRight ? 'order-1' : 'order-0'}`}>
                <img src={image} className="img-fluid rounded-circle w-100 h-auto"/>
            </div>
        </div>
    </div>

);

ContentItem.propTypes = ({
    imageRight: PropTypes.bool,
    children: PropTypes.object
});

ContentItem.defaultProps = ({
    imageRight: false,
    children: "Text or Content"
});

export default ContentItem