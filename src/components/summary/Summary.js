import React, { Component } from 'react';
import css from './summary.module.css';

export default class Summary extends Component {

  getGradesSum(modules) {
    const gradeSum = modules.reduce((acc, curr) => {
      return { grade: acc.grade + parseFloat(curr.grade) };
    }, { grade: 0 });
    return gradeSum.grade;
  }

  getTotalPercentual(totalGrade, modules) {
    return (totalGrade / modules.length)
  }

  isApprovedInAllModules(modules) {
    return modules.every(v => {
      return v.grade >= 60
    })
  }

  isApprovedByTotalAverage(totalAverage) {
    return totalAverage >= 70;
  }

  decodeBool(bool) {
    return bool ? "YES! 🎓" : "No... 😟";
  }

  willStudentGraduate(approvation1, approvation2) {
    if (approvation1 || approvation2) {
      return (
        <h4>
          <span role="img" aria-label="Happy emoji">🥳</span>
           Yaaaaay!!!! <br />
           The student will graduate!
          <span role="img" aria-label="Party emoji">🎉</span>
        </h4>
      );
    }
    return;
  }

  render() {
    const { className, modules } = this.props;

    const totalGrade = this.getGradesSum(modules);
    const totalPercentual = this.getTotalPercentual(totalGrade, modules)
    const averageApproved = this.isApprovedInAllModules(modules);
    const totalPercentualApproved = this.isApprovedByTotalAverage(totalPercentual);
    const classLabels = `col s8 ${css.label}`;
    const classValues = `col s4`;
    const classAverage = classValues + " " + (averageApproved ? `${css.positive}` : `${css.negative}`);
    const classPercentual = classValues + " " + (totalPercentualApproved ? `${css.positive}` : `${css.negative}`);

    return (
      <div className={className}>
        <h4>Summary</h4>
        <div className="row">
          <span className={classLabels}>Total grades</span>
          <span className={classValues}>{totalGrade}</span>
        </div>
        <div className="row">
          <span className={classLabels}>Total percentual</span>
          <span className={classValues}>{totalPercentual}%</span>
        </div>
        <div className="row">
          <span className={classLabels}>Approved by average (60%)</span>
          <span className={classAverage}><strong>{this.decodeBool(averageApproved)}</strong></span>
        </div>
        <div className="row">
          <span className={classLabels}>Approved by total percentual (70%)</span>
          <span className={classPercentual}><strong>{this.decodeBool(totalPercentualApproved)}</strong></span>
        </div>
        {this.willStudentGraduate(averageApproved, totalPercentualApproved)}
      </div>
    )
  }
}
