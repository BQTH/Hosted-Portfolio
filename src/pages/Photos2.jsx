import React from 'react'

import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//import img
import smartsmoker1 from './projectpages/assets/smartsmoker/1.png'
import smartsmoker2 from './projectpages/assets/smartsmoker/2.png'

function Designs() {
    const onInit = () => {
        console.log('lightGallery has been initialized');
    };
    return (
        <div style={{width: "100vw" , marginTop: "100px"}} className="App">
            <LightGallery
                download = {false}
                mode = {'lg-fade'}
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
            >
                <a href={smartsmoker1}>
                    <img style={{width: "100px", height: "100px"}} alt="smoker1" src={smartsmoker1} />
                </a>
                <a href={smartsmoker2}>
                    <img style={{width: "100px", height: "100px"}} alt="smoker2" src={smartsmoker2} />
                </a>
            </LightGallery>
        </div>
    );
}

export default Designs
