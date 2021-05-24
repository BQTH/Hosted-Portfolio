import React from 'react'
import wsyimg1 from './assets/wsy/1.png'
import wsyimg2 from './assets/wsy/2.png'
import wsyimg3 from './assets/wsy/3.png'
import wsyimg4 from './assets/wsy/4.png'
import wsyimg5 from './assets/wsy/5.png'
import wsyimg6 from './assets/wsy/6.png'
import wsyimg7 from './assets/wsy/7.png'
import wsyimg8 from './assets/wsy/8.png'

export default function krs() {
    return (
        <div style={{ background: "#181A1B", width: "100vw", height: "100%" }}>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="projectpage-h1">
                            KRS</h1>
                        <h4 className="projectpage-h4">THE PROBLEM</h4>
                        <p className="projectpage-p">During my work as an international yachts supplier I had to keep track of my journeys in order to fill the details into a Microsoft excel sheet when back home. Afterwards this file was used by the company to calculate the worked hours and pay the employees accordingly. This process is something I wanted to simplify so that drivers could log their journeys while on the job. After completing a delivery the idea was that a driver could send the data to administration with a click of the button.  </p>
                        
                        <h4 className="projectpage-h4">MY SOLUTION</h4>
                        <p className="projectpage-p">My solution to this problem was an app with the working name KRS which stands for: kilometer registration system. Within the app a driver can create a delivery, a delivery is the complete journey. Within the delivery drivers can make sub journeys. For example: a driver sets off to make a delivery in Barcelona on a yacht called Rising sun. The driver then creates a new delivery for the rising sun. Within this delivery the driver makes multiple journeys for example from WSY to the first hotel, from the hotel to a winery, from the winery to a yacht etc. When the driver returns to WSY he completes the delivery and a summary of all journeys gets sent to administrations.
</p>
                        <h4 className="projectpage-h4">DESIGNS</h4>
                    </div>
                </div>
                <div className="row projectpage-imgcontainer">
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg1} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg2} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg3} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg4} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg5} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg6} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg7} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={wsyimg8} alt="" /></div>

                </div>

            </div>
        </div>
    )
}
