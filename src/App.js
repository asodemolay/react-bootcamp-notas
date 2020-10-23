import React, { Component, Fragment } from 'react';
import './App.css';
import GradeList from './components/grades/GradeList';
import Summary from './components/summary/Summary';

export default class App extends Component {

  constructor() {
    super();

    this.state = {
      modules: [
        { id: 1, desc: "Módulo 01 - Fundamentos (0 - 100)", grade: 0 },
        { id: 2, desc: "Módulo 02 - Angular (0 - 100)", grade: 0 },
        { id: 3, desc: "Módulo 03 - React (0 - 100)", grade: 0 },
        { id: 4, desc: "Módulo 04 - Vue (0 - 100)", grade: 0 },
        { id: 5, desc: "Módulo 05 - Desafio Final (0 - 100)", grade: 0 },
      ]
    };
  }

  handleGradesUpdate = (updatedModule) => {
    const { modules } = this.state;
    const i = modules.findIndex((item) => { return item.id === updatedModule.id })
    modules[i].grade = updatedModule.grade;
    this.setState(modules);
  }

  render() {
    const { modules } = this.state;

    return (
      <Fragment>
        <h1>IGTI Bootcamp - grades</h1>
        <div className="row">
          <GradeList className="col l7 m6 s12" modules={modules} onGradesUpdate={this.handleGradesUpdate} />
          <Summary className="col l5 m6 s12" modules={modules} />
        </div>
      </Fragment>
    );
  }
};