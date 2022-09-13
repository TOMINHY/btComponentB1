import React, { Component } from 'react'
import BannerComponent from '../BannerComponent/BannerComponent'
import FooterComponent from '../FooterComponent/FooterComponent'
import HeaderComponent from '../HeaderComponent/HeaderComponent'
import ItemComponent from '../ItemComponent/ItemComponent'

export default class BodyComponent extends Component {
  render() {
    return (
      <div className='body'>
        
        <BannerComponent/>
        <ItemComponent/>
        
      </div>
    )
  }
}
