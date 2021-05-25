import React from 'react'
import smartsmoker1 from './assets/smartsmoker/1.png'
import smartsmoker2 from './assets/smartsmoker/2.png'
import smartsmoker3 from './assets/smartsmoker/3.png'
import smartsmoker4 from './assets/smartsmoker/4.png'
import smartsmoker5 from './assets/smartsmoker/5.png'
import smartsmoker6 from './assets/smartsmoker/6.png'
import Fade from 'react-reveal/Fade';


function Smartsmoker() {
    return (
        <div style={{ background: "#181A1B", width: "100vw", height: "100%" }}>
            <Fade bottom duration={500}>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="projectpage-h1">
                            SMARTSMOKER</h1>
                        <h4 className="projectpage-h4">THE PROBLEM</h4>
                        <p className="projectpage-p">Cooking with a smoker is a slow process that requires the cook to pay a lot of attention to the smoker to make sure the temperatures are just right. This may not be that big a deal for a hobbyist but for a professional user this can be quite a hassle when there’s also other things to be done.</p>
                        <h4 className="projectpage-h4">DESIGN CHALLENGE</h4>
                        <p className="projectpage-p">Design a solution that enables professional smoker users to control and monitor the smoker remotely.</p>
                        <h4 className="projectpage-h4">OUR SOLUTION</h4>
                        <p className="projectpage-p">We want to help those professional users by creating a smart smoker. We did this by using sensors to read temperatures and actuators to respond to those temperatures. Within the app a user can choose 2 modes. A full automatic one in which he/she defines the desired temperature and the smoker controls itself to achieve that goal. Or a manual mode in which the user can choose how far open and closed curtain valves on the smoker are with a temperature read out and thus controls the smoker remotely from f.e. the kitchen. Also in manual mode a desired temperature can be set so that the cook can be notified when the temperature rises or drops above or below the desired temperature and can respond accordingly by adjusting the valves.</p>
                        <h4 className="projectpage-h4">DESIGNS</h4>
                    </div>
                </div>
                <div className="row projectpage-imgcontainer">
                    <div className="col l2 m6 s6"><img className="materialboxed" 
                        src={smartsmoker1} alt="" /></div>
                    <div className="col l2 m6 s6"><img className="materialboxed"
                        src={smartsmoker2} alt="" /></div>
                    <div className="col l2 m6 s6"><img className="materialboxed"
                        src={smartsmoker3} alt="" /></div>
                    <div className="col l2 m6 s6"><img className="materialboxed"
                        src={smartsmoker4} alt="" /></div>
                    <div className="col l2 m6 s6"><img className="materialboxed"
                        src={smartsmoker5} alt="" /></div>
                    <div className="col l2 m6 s6"><img className="materialboxed"
                        src={smartsmoker6} alt="" /></div>
                </div>

            </div>
            </Fade>
        </div>
    )
}

export default Smartsmoker
