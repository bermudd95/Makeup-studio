import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    
    const form = useRef();
      
    const sendEmail = (e) => {
        e.preventDefault();
      
        emailjs.sendForm('service_u2f5wlu', 'template_oq0mgol', form.current, 'dkSCkT9G1nrflBiqD')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div className='bg-teal-200 h-screen'>
        <div className='py-4 text-center'>
            <h1 className='text-2xl font-bold'>
                Schedule your next visit!
            </h1>
            <h4 className='pt-5'>
                Please fill out the form below in order to schedule your next beauty visit.
            </h4>
        </div>
        <form ref={form} onSubmit={sendEmail} className='max-w-[600px] m-auto pt-5'>
            <div className='grid grid-cols-2 gap-2'>
                <input name='user_name' className='border shadow-lg p-3 rounded-lg' type='text' placeholder='Full Name' />
                <input name='user_email' className='border shadow-lg p-3 rounded-lg' type='email' placeholder='Email' />
            </div>
            <input name='user_subject' className='border shadow-lg rounded-lg p-3 w-full my-2' type='text' placeholder='Subject' />
            <textarea name='message' className='border shadow-lg rounded-lg p-3 w-full' cols='30' rows='10' placeholder='Message' />
            <button className='bg-blue-600 hover:bg-blue-400 border shadow-lg rounded-lg p-3 w-full mt-2'>
                Submit
            </button>
         </form>
    </div>
  )
}

export default Contact