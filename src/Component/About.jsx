import React from 'react';
import ovi from '../assets/ovi-3.png'
import { IoCloudDownload } from "react-icons/io5";
import cv from '../../public/AshikurRahmanOviResume.pdf'
import Typed from 'react-typed';
const About = () => {
    return (
        <div className='max-w max-w max-w-screen-xl mx-auto'>
            {/* <!--strat about section--> */}

<section className="about" id="about">
   <h2 className="border_bottom text-3xl ">About Me</h2>

   <div className="container about_container my-10">

      <div className="about_img">

        <img src={ovi} alt="" />

      </div>

      <div className="about_text">

               <div className="text">
                   I am Ashikur Rahman Ovi and i`am a  
                   <Typed className='ml-2 text-[#29e9bc]'
                strings={[
                    'Fontend Developer',
                    'Backend Developer',
                    'Web Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop 
                />
        
               </div>
 

               
       <p>

           I Llive In Bangladesh Rangpur Devision.Iam Study Computer Science And Technology In Rangpur Ideal Institute Of Technology,
           A dynamic MERN Stack Developer with a recent completion of a comprehensive Web Development course from Programming Hero.
            My journey in coding and programming began early on, and I've turned my passion into a fulfilling profession over the years.
            Proficient in crafting captivating user experiences with HTML, CSS, and Tailwind CSS. On the frontend, I wield the power of React and JavaScript to bring designs to life.
            Comfortable navigating the backend landscape with Node.js, Express.js, and MongoDB. I thrive in architecting robust and scalable server-side solutions.
  </p>


     
  
      <a href={cv} download='' className="btns "> <div className='flex items-center gap-3'><IoCloudDownload className='text-2xl anima animate-bounce'/> <h1> Resume</h1></div></a>

       </div>


   
</div>

</section>

{/* <!--end about section--> */}
        </div>
    );
};

export default About;