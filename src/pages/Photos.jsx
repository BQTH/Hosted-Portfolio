import React, { Component } from "react";
import NightPhotography from '../components/Slider/NightPhotography/NightPhotographySlider'
import Nachtwakers from '../components/Slider/Nachtwakers/NachtwakersSlider'

export default class CustomArrows extends Component {
  render() {
    return (
      <div style={{width: "100vw"}}>
        <div style={{width: "90vw", margin: "80px auto"}}>
        <Nachtwakers/>
        <NightPhotography/>
        </div>
      </div>
    );
  }
}