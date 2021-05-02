import React from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
    function sendEmail(e) {
        e.preventDefault();

    emailjs.sendForm('service_86yt7ga', 'template_bzl7v58', e.target, 'user_OqE286xlHNXqDPkGhFPzj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    return (
        
                    <div style={{backgroundColor:'#1f2235',textAlign:'center'}} >
                        <h2 style={{color:'red'}}>Contact with Me</h2>
                        <br/>
            <form onSubmit={sendEmail}>
                    <div>

                        <div >
                            <input style={{width:'50%',padding:'0.5%'}} type="text"  placeholder="Name" name="name"/>
                        </div>
                        <br/>
                        
                        <div>
                            
                            <input style={{width:'50%',padding:'0.5%'}} type="email" className="form-control" placeholder="Email Address" name="email"/>
                            
                        </div>
                        <br/>

  
                        <div >
                            <input style={{width:'50%',padding:'0.5%'}} type="text" className="form-control" placeholder="Subject" name="subject"/>
                        </div>
                        <br/>
                        
                        <div >
                            <textarea  className="form-control" id="" cols="35" rows="10" placeholder="Your message" name="message"></textarea>
                        </div>
                        <br/>

                        <div >
                            <input type="submit" className="btn btn-info" value="Send Message" style={{padding:'15px',color:'black',backgroundColor:'grey'}}></input>
                        </div>
                    </div>
                </form>
            </div>
       
    );
};

export default ContactForm;