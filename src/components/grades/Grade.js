import React, { Component } from 'react';
import css from './grade.module.css';

export default class Grade extends Component {

  constructor() {
    super();

    this.state = {
      id: 0,
      desc: "",
      grade: 0
    }
  }

  componentDidMount() {
    const { id, desc, grade } = this.props.module;
    this.setState({ id, desc, grade });
  }

  handleInputChange = (event) => {

    this.setState({
      grade: event.target.value,
    }, () => {
      this.props.onChangeGrade(this.state);
    });
  }

  render() {
    const { desc, grade } = this.state;
    return (
      <div className={`input-field col s12 ${css.inputContainer}`}>
        <p>{desc}</p>
        <input
          type="range"
          onChange={this.handleInputChange}
          min="0"
          max="100"
          value={grade}
        />
        <span className={grade >= 60 ? css.positive : css.negative}>{grade}</span>
      </div>
    )
  }
}
