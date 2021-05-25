import React from 'react'
import Socials from './../components/socials/socials'
import Fade from 'react-reveal/Fade';

function Home() {
    return (
        <div>
            <section id="main">
                <div>
        
                    <Socials />
                    
                    <div class="oneline">
                    <Fade right duration={500}>
                        <h6>UI designer, Front-end developer and photographer with a passion for nature and music</h6>
                    </Fade>
                    </div>
                    
                </div>
            </section>
        </div>
    )
}

export default Home
