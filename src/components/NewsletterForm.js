import React from 'react';
import PropTypes from 'prop-types'
import firebase from '../../src/firebase_config.js'

class NewsletterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            posted: false
        }
    }

    postEmail() {
        const db = firebase.firestore();
        db.collection("newsletter").add({email: this.state.email})
            .then(() => this.setState({posted: true}))
            .finally(() => this.setState({email: ""}))
            .catch(error => console.warn(error))

    }

    render() {
        return (
            <div ref={this.props.forwardRef} style={{padding: 300}} className="p-3 center fixed-bottom-right">
                {
                    !this.state.posted ?
                        <div id="container">
                            <h2>Subscribe</h2>
                            <p>SIGN UP FOR OUR MAILING LIST
                                TO GET UPDATES.</p>
                            <form>
                                <input onChange={(e) => this.setState({email: e.target.value})} type="email"
                                       placeholder="Type your Email" required/>
                                <br/>
                                <button onClick={() => this.postEmail()}>Subscribe</button>
                            </form>
                        </div> :
                        <div id="container">
                            <h2>Thank You!</h2>
                            <p>We will inform you when our product will be released!</p>
                        </div>
                }
            </div>
        );
    }
};

NewsletterForm.propTypes = ({
    imageRight: PropTypes.bool,
    content: PropTypes.object
});


export default NewsletterForm;