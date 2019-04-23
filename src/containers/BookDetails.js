import React, {Component} from 'react';
import {Row, Col, Media, FormGroup, Label, Input} from 'reactstrap';

import bookCover from "../images/book1.jpeg";
import userCover from "../images/user1.png";


class BookDetails extends Component {
  constructor(props) {
    super(props)
    this.state={
      isLoggedIn: true,
      book: {
        title: "Harry Potter 1",
        isbn: '978-3551557414',
        evaluations: [{
          rating: "4",
          review: "I read the books as a teenager and everything JK "+
          "writes is fantastic. I am currently rereading them "+
          "in german since I learned it a long time ago and wanted "+
          "to keep at least part of my language skills. With and "+
          "engaging and captivating story and just the right level "+
          "of advanced vocabulary, theses books are a great way to "+
          "keep your german alive!",
        },{
          rating: "3",
          review: "Lorem ipsum",
        }]
      },
      evaluation: {
        rating: "1",
        review: ""
      }
    }
  }

  handleChange = event => {
    let evaluation = this.state.evaluation
    const {name, value} = event.target
    evaluation[name] = value
    this.setState({
      evaluation: evaluation
    })
  }

  addEvaluation = () => {
      let book = this.state.book
      book.evaluations.push(this.state.evaluation)
      this.setState({
        book: book
      })
      this.resetEvaluation()
    }

    resetEvaluation = () => {
    this.setState({
      evaluation: {
        rating: "1",
        review: ""
      }
    })
  }

    render() {
      return (
        <div>
          <h1>
            Book Details
          </h1>
          <Row  className='d-flex justify-content-center'>
            <Col xs="3">
             <img src={bookCover} className="img-rounded img-thumbnail" alt="Book Cover" />
           </Col>
           <Col xs="9">
            <Row>
              <p className="font-weight-bold mr-1">Titel: </p>
              <p>{this.state.book.title}</p>
            </Row>
            <Row>
              <p className="font-weight-bold mr-1">ISBN: </p>
              <p>{this.state.book.isbn}</p>
            </Row>
          </Col>
        </Row>
        <div className="mt-4"></div>
        <Row>
          {this.state.book.evaluations.map((evaluation, index) =>
            <Col xs="12" key={index} className="mt-4">
              <Media>
                <Media left href="#">
                  <Media object src={userCover} alt=""
                    className="rounded"/>
              </Media>
              <Media body>
                <Media heading>
                    Rating: {evaluation.rating} / 5
                </Media>
                {evaluation.review}
                </Media>
              </Media>
            </Col>
            )}
          </Row>
          <div className="mt-4"></div>
          <Row>
            <Col xs="12" key="index" className="mt-4">
              <Media>
                <Media left href="#">
                  <Media object src={userCover} alt=""
                    className="rounded"/>
                </Media>
                <Media body>
                  <FormGroup row>
                    <Label for="selectRating" sm={3}>Rating (of 5): </Label>
                    <Col sm={9}>
                      <Input type="select"
                        name="rating"
                        value={this.state.evaluation.rating}
                        onChange={this.handleChange}
                        id="selectRating">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label for="review" sm={3}>Review: </Label>
                    <Col sm={9}>
                      <Input type="textarea"
                        name="review"
                        value={this.state.evaluation.review}
                        onChange={this.handleChange}
                        id="textAreaReview" />
                    </Col>
                  </FormGroup>
                  <input type="button"
                   value="Cancel"
                   className="btn btn-outline-danger mr-2"
                   onClick={this.resetEvaluation} />
                 <input type="button"
                   value="Submit"
                   className="btn btn-outline-info"
                   onClick={this.addEvaluation} />
               </Media>
             </Media>
           </Col>
         </Row>
       </div>
     )
   }
 }

export default BookDetails
