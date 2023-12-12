import React from 'react';
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <div className='pt-10'>
            

<div className="container footer_container ">
         
   <div className="footer_1">
        <a href="#" className="footer_logo"> 
        <a href="#">
            <h4 className='font-bold'> <span className='text-[#29e9bc]'>ASHI</span>KUR <span className='text-[#29e9bc]'>RAH</span>MAN <span className='text-[#29e9bc]'>OVI</span></h4>
        </a>
           <p className='text-sm'>Any fool can write code that a computer can understand.Good programmers write code that humans can understand</p>
        </a>
   </div>

            
   <div className="footer_2">
     
          <h4>permalinks</h4>
         
         <ul className="permalinks text-sm spa space-y-2">

           <li><a href="#"  className='hover:text-[#29e9bc]'>Home</a></li>
           <li><a href="#about"  className='hover:text-[#29e9bc]'>about</a></li>
           <li><a href="#protfolio"  className='hover:text-[#29e9bc]'>protfolio</a></li>
           <li><a href="#contact"  className='hover:text-[#29e9bc]'>contact</a></li>


         </ul>
  </div>

   <div className="footer_3">

       <h4>privacy</h4>
         
       <ul className="privacy text-sm spa space-y-2">

         <li><a href="#"  className='hover:text-[#29e9bc]'>privacy & policy</a></li>
         <li><a href="#"  className='hover:text-[#29e9bc]'>terms & condition </a></li>
         <li><a href="#"  className='hover:text-[#29e9bc]'>refound policy</a></li>
      


       </ul>
   </div>


   <div className="footer_3">

       <h4 >contact me</h4>
         
        <div className='text-sm spa space-y-2'>
           <p>+880 1581782193</p>
           <p className="mail">ashikurovi2003@gmail.com</p>
        </div>

        <ul className="so_link">

           <li><a  className='hover:text-[#29e9bc]' href="https://www.facebook.com/mdovi.7398" target="blank"> <FaFacebook /></a></li>
           <li><a  className='hover:text-[#29e9bc]' href="https://www.instagram.com/ashikurrahmanovi.1/" target="blank"> <FaInstagram/> </a></li>
           <li><a   className='hover:text-[#29e9bc]' href="https://www.linkedin.com/in/ashikur-rahman-ovi-972ab4261/" target="blank"><FaLinkedin/> </a></li>
           <li><a   className='hover:text-[#29e9bc]' href="https://www.youtube.com/@theinspirationcorner1" target="blank"><FaYoutube/> </a></li>
     
           <li><a href="https://github.com/ashikurbd71" target="blank"><FaGithub/></a></li>

        </ul>
   </div>

</div>


</div>

<div className="footer_copyright">
   <small>Copyright &copy; DEVELOPER ASHIKUR OVI</small>
</div>


        
        </>
    );
};

export default Footer;