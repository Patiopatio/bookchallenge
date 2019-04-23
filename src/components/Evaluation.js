import React, { Component } from 'react';
import {Media} from 'reactstrap';
import userCover from "../images/user1.png";


class Evaluation extends Component {
  render() {
    return (
      <Media>
        <Media left href="#">
          <Media object src={userCover} alt=""
            className="rounded"/>
          </Media>
        <Media body>
          <Media heading>
              Rating: {this.props.evaluation.rating} / 5
          </Media>
          {this.props.evaluation.review}
        </Media>
      </Media>
    )
  }
}

export default Evaluation
