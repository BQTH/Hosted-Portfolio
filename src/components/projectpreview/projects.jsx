import React from 'react'
import axios from 'axios'
import Fade from 'react-reveal/Fade';

var isLoaded = false;

export default class ProjectList extends React.Component {

    state = {
        projects: []
    }

    componentDidMount() {
        axios.get(`https://bqth-api.herokuapp.com/projects`)
            .then(res => {
                //save gotten project data from api in a variable
                const projects = res.data;

                //Sort by priority
                projects.sort(function (a, b) {
                    return a.priority.localeCompare(b.priority);
                });

                //set state to projects from the json placeholder api
                this.setState({ projects });

            })

        isLoaded = true;
    }


    render() {
        return (
            <div>
                {isLoaded ? (
                    <div>
                        {this.state.projects.map(project =>
                            <div className="projectimg"
                                style={{
                                    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), 
                            url(${project.urlbackimg})`
                                }}>
                                <div className="row ">
                                <Fade bottom duration={500}>
                                    <div className="col l6 m12" style={{ padding: 0}}>
                                        <div className="outervalign" style={{zIndex: 1}}>
                                            <div className="innervalign">
                                                <div className="infobox">
                                                    <h2>{project.title}</h2>
                                                    <p>{project.description}</p>

                                                    <div className="button">
                                                        <a href={project.title.toLowerCase()} ><button className="btn">See more</button></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col l6 m12 " style={{ padding: 0 }}>

                                        <div className="outervalign">
                                            <div className="innervalign">

                                                {project.urlpreviewimg.length === 3 ? (
                                                    <div id="previewphotos">
                                                        <img className="project-img 3 col l4 m4 s4" alt="" src={project.urlpreviewimg[0]} />
                                                        <img className="project-img 3 col l4 m4 s4" alt="" src={project.urlpreviewimg[1]} />
                                                        <img className="project-img 3 col l4 m4 s4" alt="" src={project.urlpreviewimg[2]} />
                                                    </div>
                                                ) : project.urlpreviewimg.length === 2 ? (
                                                    <div id="previewphotos">
                                                        <img className="project-img 2" alt="" src={project.urlpreviewimg[0]} />
                                                        <img className="project-img 2" alt="" src={project.urlpreviewimg[1]} />
                                                    </div>
                                                ) : (
                                                    <div id="previewphotos">
                                                        <img className="project-img one" alt="" src={project.urlpreviewimg[0]} />
                                                    </div>
                                                )}

                                            </div>
                                        </div>
                                    </div>
                                    </Fade>
                                </div>
                            </div>
                        )}
                    </div>
                ) : (<div className="loading-div" >
                    <div class="spinner">
                        <div class="cube1"></div>
                        <div class="cube2"></div>
                    </div>
                    <p style={{ margin: "70px", color: "white" }}>Getting data from the api.<br /> Please wait, this may take a moment.</p>
                </div>)}
            </div>
        )
    }
}

