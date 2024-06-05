import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_t3gnfja', 'template_ggfr5id', form.current, 'p_wbEWbW2pRvW-8v-')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });

          e.target.reset()
      };

  return (
    <section id='contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__option'>
                    <MdOutlineEmail className='contact__option-icon'/>
                    <h4>Email</h4>
                    
                    <a href="mailto:hasibulhasan.official03@gmail.com" target="_blank">Send a Email</a>
                </article>

                <article className='contact__option'>
                    <RiMessengerLine className='contact__option-icon'/>
                    <h4>Messenger</h4>
                    
                    <a href="https://m.me/hasibulhasan.mahi.3" target="_blank">Send a Message</a>
                </article>

                <article className='contact__option'>
                    <BsWhatsapp className='contact__option-icon'/>
                    <h4>WhatsApp</h4>
                    
                    <a href="https://api.whatsapp.com/send?phone=+8801643183705" target="_blank">Send a Message</a>
                </article>
            </div>
            {/* END OF CONTACT OPTIONS */}
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='name'placeholder='Your Full Name' required />
                <input type="email" name='email' placeholder='Your Email' required />
                <textarea name="message" rows="7" placeholder='Your Message' required />
                <button type="submit" className='btn btn-primary center'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact