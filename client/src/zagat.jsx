import React from 'react';
import ReactDOM from 'react-dom';

export default class Zagat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // reviewsString: '',
    };
  }

  componentWillMount() {
  }

  render() {
    return (
      <div id="zagat">
        <div id="reviews" />
        {ReactDOM.render(
          React.createElement(Reviews),
          document.getElementById('reviews'),
        )}
        <script async src="http://localhost:8080/reviews.js" />
      </div>
    );
  }
}
