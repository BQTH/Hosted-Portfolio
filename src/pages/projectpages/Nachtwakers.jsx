import React from 'react'
import NWdesign from './assets/nachtwakers/Nwdesign.png'
import Fade from 'react-reveal/Fade'

function nachtwakers() {
    return (
        <div style={{ background: "#181A1B", width: "100vw", height: "100%" }}>
            <Fade bottom duration={500}>
        <div className="container">
            <div className="row">
                <div className="col s12">
                    <h1 className="projectpage-h1">
                        NACHTWAKERS</h1>
                   
                    <p className="projectpage-p">During this project it was our goal to brand a Ska band from the Tilburg Rock Academy. 
I focused mainly on photography, poster design and the development of the website.
</p>
                    <h4 style={{textAlign: "center"}} className="projectpage-h4">DESIGNS</h4>
                     <div className="row ta-center">
                <img src={NWdesign} style={{width: "50%"}} alt=""/>
            </div>
                </div>
            </div>
            
        </div>
        </Fade>
    </div>
    )
}

export default nachtwakers
