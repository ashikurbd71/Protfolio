import React from 'react';
import { FaLaptopCode } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaFileCode } from "react-icons/fa";
const Service = () => {
    return (
        <div className='max- max-w-screen-xl mx-auto '>

            {/* <!--START SERVICES section--> */}

<div className="service" id="service">
            <h2 className="border_bottom text-3xl">What I Do ?</h2>
     <div className="container service_container my-10 lg:px-0 px-10" >
        <div className="cards">
            <div className="card ">
                <div className="sbox">
                <div className='flex justify-center items-center mb-3 text-black text-5xl'> <FaLaptopCode/></div>
                    <h3 className='font-bold'>Fontend Development</h3>
                    <p className='  font-medium'>Proficient in crafting captivating user experiences with HTML, CSS, and Tailwind CSS. On the frontend, I wield the power of React and JavaScript to bring designs to life.</p>
                    <a href="#contact" >Contack Me</a>
                </div>
            </div>
        

             <div className="card">
                <div className="sbox">
                <div className='flex justify-center items-center mb-3 text-black text-5xl'> <FaCode/></div>
                    <h3 className='font-bold'>Backend Development</h3>
                    <p className='  font-medium'>Comfortable navigating the backend landscape with Node.js, Express.js, and MongoDB. I thrive in architecting robust and scalable server-side solutions.</p>
                    <a href="#contact" >Contack Me</a>
                </div>
            </div>

            <div className="card">
                <div className="sbox">
                <div className='flex justify-center items-center mb-3 text-black text-5xl'> <FaFileCode/></div>
                    <h3 className='font-bold'>Figma To HTML</h3>
                    <p className='  font-medium'>

                 

                    Convert Figma designs to HTML code with precision, preserving visual integrity, ensuring responsiveness, maintaining design fidelity seamlessly, and optimizing for performance</p>
                    <a href="#contact" >Contack Me</a>
                </div>
            </div>
        </div>
     </div>


</div>

{/* <!--end SERVICES section--> */}

        </div>
    );
};

export default Service;