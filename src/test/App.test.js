import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import MyHeader from "../components/MyHeader";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("Feature component", () => {
    test("it matches the snapshot", () => {
        const component = create(<MyHeader />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
