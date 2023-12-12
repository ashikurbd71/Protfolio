import React from 'react';
import ovi from'../assets/ovi-2.png'
import { FaLocationArrow } from "react-icons/fa";
import Typed from 'react-typed';
const Banner = () => {
    return (
        <>
        <div>
           <header>

<div className="container header_container " id="home">

     <div className="header_left">
         <div className="header_left_img">
          <img src={ovi} alt="" />
         </div>
     </div>

       <div className="header_right">

            <div className="text-1">
                Hello,this is
            </div>
            <div className="text-2">
                Ashikur Rahman Ovi

            </div>
            <div className="text-3 gap-1">
                 And I`m a 

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
           {/* <a href="https://www.linkedin.com/in/ashikur-ovi/" > */}
           <a href="https://www.linkedin.com/in/ashikur-ovi/" target='blank'  className="btns">  <div className='flex items-center gap-3'> Here Me <FaLocationArrow className='text-2xl ani animate-bounce' /></div></a>
           {/* </a> */}
       </div>
</div>

</header>

{/* <!--end header-->  */}
        </div>
        </>
    );
};

export default Banner;