import React from 'react';
import PropTypes from 'prop-types'
import firebase from '../../src/firebase_config.js'

class NewsletterForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            loading: false,
            alert: {
                posted: false,
                message: ''
            },
        }
    }

    postEmail(e) {
        e.preventDefault();
        this.setState({loading: true})
        const email = this.state.email;
        if (email !== undefined && /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
            const db = firebase.firestore();
            db.collection('newsletter').where('email', '==', email).get()
                .then(snapshot => {
                    if (snapshot.empty) {
                        db.collection("newsletter").add({email: email})
                            .then(() => {
                                this.setState({
                                    alert: {
                                        posted: true,
                                        message: "We will inform you when our product will be released!"
                                    }
                                })
                            })
                            .finally(() => {
                                this.setState({email: "", loading: false});
                            })
                            .catch(error => console.warn(error))
                        return;
                    }
                    this.setState({
                        alert: {
                            posted: true,
                            message: 'This mail is already exist in our database.'
                        }
                    });
                })
                .catch(err => {
                    console.warn('Error getting documents', err);
                });
        }
    }

    render() {
        return (
            <div ref={this.props.forwardRef} style={{padding: 300}} className="p-3 center fixed-bottom-right">
                {
                    !this.state.alert.posted ?
                        <div id="container">
                            <h2>Subscribe</h2>
                            <p>SIGN UP FOR OUR MAILING LIST
                                TO GET UPDATES.</p>
                            <form>
                                <input onChange={(e) => this.setState({email: e.target.value})} type="email"
                                       placeholder="Type your Email" required/>
                                <br/>
                                <button disabled={this.state.loading} onClick={(e) => this.postEmail(e)}>
                                    {
                                        this.state.loading ? "Loading" : "Subscribe"
                                    }
                                </button>
                            </form>
                        </div> :
                        <div id="container">
                            <h2>Thank You!</h2>
                            <p>{this.state.alert.message}</p>
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