import React from 'react'
import walker1 from './assets/walker/1.png'
import walker2 from './assets/walker/2.png'
import walker3 from './assets/walker/3.png'
import walker4 from './assets/walker/4.png'
import walker5 from './assets/walker/5.png'
import walker6 from './assets/walker/6.png'
import walker7 from './assets/walker/7.png'
import walker8 from './assets/walker/8.png'


function Walker() {
    return (
        <div style={{ background: "#181A1B", width: "100vw", height: "100%" }}>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h1 className="projectpage-h1">
                            WALKER</h1>
                        <h4 className="projectpage-h4">THE PROBLEM</h4>
                        <p className="projectpage-p">We think there’s a lot to gain when it comes to getting people to move. In this case we’re focussing on walking. Walking is one of the easiest ways to stay moving and active and especially whilst working from home it’s good to go out for a daily walk. Only the problem is that walking daily can become quite boring because you f.e. walk the same route without a goal or challenge.</p>
                        <h4 className="projectpage-h4">DESIGN CHALLENGE</h4>
                        <p className="projectpage-p">Design a digital and mobile solution that inspires and motivates users to stay active and walking.</p>
                        <h4 className="projectpage-h4">OUR SOLUTION</h4>
                        <p className="projectpage-p">Our concept is an application designed to make walking more interesting. We achieve this by giving the users the option to generate a random route starting from their current location and based on landmarks and sightsee spots in the area, this way the user is always provided with a new route and something interesting along the way. When the user visits the landmarks during his/her walk  the user is provided with additional information about the landmarks. When a landmark is visited the user collects points. These points are added to a wallet and can be used for discount on f.e. a drink somewhere along the route. This way users get rewarded for their affords and can the app be used as a great tool for a day away alone or with friends and family. </p>
                        <h4 className="projectpage-h4">DESIGNS</h4>
                    </div>
                </div>
                <div className="row projectpage-imgcontainer">
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker1} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker2} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker3} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker4} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker5} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker6} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker7} alt="" /></div>
                    <div className="col l3 m6 s6"><img className="materialboxed"
                        src={walker8} alt="" /></div>
                </div>

            </div>
        </div>
    )
}

export default Walker
