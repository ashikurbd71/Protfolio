import React from 'react';
import img from '../assets/banner.jpg'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Swal from 'sweetalert2';
const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ufuile7', 'template_619stvq', form.current, 't24f2NMOEqSuvH5pl')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            title: "Thanks For Contact",
            text: "Wating For Your Feedback",
            icon: "success"
          });
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <div className=' max-w-screen-xl mx-auto'>

  <div id="contact" className='flex justify-center mt-5'><h2 className="border_bottom text-3xl">Contact Us</h2></div>

<div className='flex jjustify-between lg:flex-row md:flex-row  items-center  flex-col my-10'>


<div  className='flex-1 mt-8 px-10 lg:mr-6'>
    <img src={img} alt="" />
</div>

<div className='flex-1 w-full px-10'>
<form className="mt-8 space-y-6" ref={form} onSubmit={sendEmail}>
<div >
<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#29e9bc] dark:text-white">
Your email
</label>
<input
type="email"
name="email"
id="email"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="name@company.com"
required
/>
</div>

<div>
<label htmlFor="email" className="block mb-2 text-sm font-medium text-[#29e9bc] dark:text-white">
Subject
</label>
<input

type="email"
name="name"
id="sub"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
placeholder="Subject"
required
/>
</div>
<div>
<label for="message" className="block mb-2 text-sm font-medium text-[#29e9bc] dark:text-white">Your message</label>
<textarea id="message" name="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your thoughts here..."></textarea>

</div>
<div className="flex items-start">


<button type="submit" value="Send" className="btns bg-[#29e9bc]">Send Message</button>


</div>


</form>
</div>

</div>
            
        </div>
    );
};

export default Contact;

