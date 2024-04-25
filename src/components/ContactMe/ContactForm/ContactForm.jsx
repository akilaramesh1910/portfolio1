import React from 'react'
import "./ContactForm.css"

const ContactForm = ({setFirstName,setLastName,handleSubmit}) => {
  return (
    <div className="contact-form-content">
        <form onSubmit={handleSubmit}>
            <div className="name-container">
                <input 
                  type="text" 
                  name='firstname' 
                  placeholder='First Name'
                  onChange={e => setFirstName(e.target.value)}
                />
                <input 
                  type="text" 
                  name='lastname' 
                  placeholder='Last Name'
                  onChange={e => setLastName(e.target.value)}
                />
            </div>
            <input type="text" name='email' placeholder='Email'/>
            <textarea type="text" name="message" placeholder='Message...' rows={3}></textarea>
            <button>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm