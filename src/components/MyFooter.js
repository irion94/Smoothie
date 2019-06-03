import * as  React from 'react'

class MyFooter extends React.Component {

    method() {
        if (document.getElementById('list1').style.visibility === 'hidden') {
            document.getElementById('list1').style.visibility = 'visible';
        } else {
            document.getElementById('list1').style.visibility = 'hidden';
        }
    }

    render() {
        return (
            <footer className="font-small footer">
                <div>
                    <div className="col-md-6">
                        <h5 className="text-uppercase">Footer Content</h5>
                        <p>Other text</p>
                    </div>
                </div>
                <div className="footer-copyright text-center">© 2018 Copyright:
                    <a className="text-link" href="https://github.com/irion94"> Irion94</a>
                </div>
            </footer>
        )
    }
}

export default MyFooter