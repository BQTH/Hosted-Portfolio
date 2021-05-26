import React from 'react';
import emailjs from 'emailjs-com';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_242dqdy', 'template_fe5yw0m', e.target, 'user_a7Ttq9v1SCvKQsJDqcgm6')
            .then((result) => {
                console.log(result.text);
                alert("Your message has been send!")
                
            e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Unfortunatly something went wrong, your message has not been send.")
            });
    }

    return (
        <div style={{ width: "100vw" }} className="contact-me">
            <h1 className="projectpage-h1">CONTACT ME</h1>
            <p style={{textAlign: "center"}} className="projectpage-p">Feel free to leave a message</p>
            <form style={{ marginTop: "20px" }} className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="email" />
                <label>Message</label>
                <textarea name="message" />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
}