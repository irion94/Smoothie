import * as React from 'react'
import PropTypes from 'prop-types'

/**
 *
 * @param content: array, contain objects with subtitle and text fields.
 * @param title: string, title of content.
 * @param column: bool, if true content is arranged according to columns.
 * @param textAlign: string, define text-align (left, center, right...)
 * @param titleStyle: object, define title style
 * @param subtitleStyle
 * @returns {*}
 * @constructor
 */

const TextContent = ({content, title, column, textAlign, titleStyle, subtitleStyle}) => (
    <div className="text-content">
        <h3 style={titleStyle}>{title}</h3>
        <div className="row justify-content-center p-lg-5">
            {
                content.map((el, index) =>
                    <div key={index} className={`${column && "col"} text-${textAlign}`}>
                        <h4 style={subtitleStyle}>{el.subtitle}</h4>
                        <p>{el.text}</p>
                    </div>
                )
            }
        </div>
    </div>
);


TextContent.propTypes = ({
    title: PropTypes.string,
    content: PropTypes.array,
    column: PropTypes.bool,
    textAlign: PropTypes.string,
    titleStyle: PropTypes.object,
    subtitleStyle: PropTypes.object
});

TextContent.defaultProps = ({
    content: [{
        subtitle: "Subtitle",
        text: "Lorem ipsu..."
    }],
    title: "Title",
    column: false,
    textAlign: 'center',  //left, right
    address: false,
    titleStyle: {},
    subtitleStyle: {}

});

export default TextContent

