import React, { Component } from 'react'
import './prop.css'

export default class Prop extends Component {
  render() {
    return (
      
      <div className="container container__prop">
        <h5>Final Project Proposal</h5>
        <h2>COMP 584</h2>
        <h5 className='text-light'>Junhe Chen, Byron Urrutia, Briana Pimentel, Melissa Little</h5>
        <div className="container container__content prop__content">
          <div className="prop__img">

          </div>

          <div className="prop__cards">

          <article className="prop__card">
              
              <h5>Project Concept</h5>
              <small>E-commerce website for adult clothing. The clothing being
sold will have coding/programmer themes and graphics.</small>
            </article>
            
            <article className="prop__card">
              
              <h5>Frame Work</h5>
              <small>React</small>
              <br />
              <small>SpringBoot</small>
            </article>

            
          </div>

        </div>

      </div>
    )
  }
}
