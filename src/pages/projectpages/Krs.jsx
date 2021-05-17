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
                    <p className="projectpage-p">Working from home has many pro's and
                    cons, this was shown by the results of a google form distributed under the target group
                    audience. A pro for lots of people is that you can create your ideal work enviroment based on
                    your personal workflow at home. A frequently mentioned con is that the online enviroment arises
                    the feeling of distance between teachers and students. My specific study makes use of big open
                    learning centres where the teachers, or as we prefer to call them, coaches are seated in a
                    central area. If you need help or feedback you can just walk up to them and ask. This of course
                    works well in a physical learning enviroment. you can easily see the availability of a teacher
                    because they're sitting right there and if not, you can just approach them and ask. Online this
                    changes you don't have an insight in the teachers availability and whereabout. All you have is a
                    little status bal this switches caller when the teacher is in a call. Now to get help or
                    feedback you have to approach the teacher through the chat or give them a call without knowing
                    whether you are disturbing them or not. this increases the communicative barrier between
                    students and teachers.</p>
                    <h4 className="projectpage-h4">DESIGN CHALLENGE</h4>
                    <p className="projectpage-p">Design a digital solution to bring
                    teachers and students working from home closer together.</p>
                    <h4 className="projectpage-h4">OUR SOLUTION</h4>
                    <p className="projectpage-p">We've tackled the problem of distance
                    between teachers an students working from home by virtualizing our analogue school enviroment
                    using gamification. With this solution students and teachers can once again (virtually) see each
                    other thus taking away the lack of availability insight like mentioned before. If a teacher or
                    fellow student is online and present in the virtual OIL (open learning centre) he/she can be
                    approached by simply interacting with their character just like in the analogue school
                    enviroment.</p>
                    <h4 className="projectpage-h4">DESIGNS</h4>
                </div>
            </div>
            <div className="row projectpage-imgcontainer">
                <div className="col l3 m6 s6"><img
                    src={wsyimg1} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg2} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg3} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg4} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg5} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg6} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg7} alt="" /></div>
                <div className="col l3 m6 s6"><img
                    src={wsyimg8} alt="" /></div>

            </div>

        </div>
    </div>
    )
}
