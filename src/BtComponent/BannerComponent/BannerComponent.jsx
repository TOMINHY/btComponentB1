import React, { Component } from 'react'

export default class BannerComponent extends Component {
  render() {
    return (
      <div className='banner__title'>
        <div className="baner">
          <div className="baner-body">
            <h5 className="baner-title">A warm Welcome!</h5>
            <p className="baner-text">Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?</p>
            <a href="#" className="btn btn-primary">Call to action!</a>
          </div>
        </div>
      </div>
    )
  }
}
