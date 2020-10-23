import React, { Component } from 'react'
import Grade from './Grade'

export default class GradeList extends Component {

  handleChangeGradeValue = (changedModule) => {
    this.props.onGradesUpdate(changedModule);
  }

  render() {
    const { modules, className } = this.props;
    return (
      <div className={className}>
        <h4>Grades</h4>
        {
          modules.map((item) => {
            return <Grade key={item.id} module={item} onChangeGrade={this.handleChangeGradeValue} />
          })
        }
      </div>
    );
  }
}

