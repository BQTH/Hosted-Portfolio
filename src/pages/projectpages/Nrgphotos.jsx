import React from 'react'
import Nrgdesign from './assets/nrgphotos/nrg-design.jpg'

function nrgphotos() {
    return (
        <div style={{ background: "#181A1B", width: "100vw", height: "100%" }}>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="projectpage-h1">
                        SCHOOLCORD</h1>
                   
                    <p className="projectpage-p">During this project I designed and developed a
                        portfolio/business website for a car photographer.
                        Programming languages used: HTML, CSS and Javascript for the website. Nodejs for the contact
                        form</p>
                    <h4 style={{textAlign: "center"}} className="projectpage-h4">DESIGNS</h4>
                     <div className="row ta-center">
                <img src={Nrgdesign} style={{width: "50%"}} alt=""/>
            </div>
                </div>
            </div>
            
        </div>
    </div>
    )
}

export default nrgphotos
