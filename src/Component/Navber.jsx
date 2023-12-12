import React, { useEffect, useRef } from 'react';
import { FaBars } from "react-icons/fa";
import { useState } from 'react';
<script src="main.js"></script>
const Navber = () => {
    
        const [isDropdownVisible, setDropdownVisible] = useState(false);
        const dropdownRef = useRef(null);
      
        const toggleDropdown = () => {
          setDropdownVisible(!isDropdownVisible);
        };
      
        const closeDropdown = (event) => {
          // Check if the click is outside the dropdown
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownVisible(false);
          }
        };
      
        useEffect(() => {
          // Attach the event listener when the component mounts
          document.addEventListener('mousedown', closeDropdown);
      
          // Detach the event listener when the component unmounts
          return () => {
            document.removeEventListener('mousedown', closeDropdown);
          };
        }, []);

    return (
        <div>
            {/* <!--nav start--> */}

<nav className='lg:px-0 px-5'>

    <div className="container nav_container">

        <a href="#">
            <h4 className='font-bold'> <span>ASHI</span>KUR <span>RAH</span>MAN <span>OVI</span></h4>
        </a>

       
        <ul className="nav_manu">

            <li><a href="#">Home</a></li>
            <li><a href="#about">about</a></li>
            <li><a href="#service">service</a></li>
            <li><a href="#skills">skills</a></li>
            <li><a href="#protfolio">protfolio</a></li>
            <li><a href="#contact">contact</a></li>
   


        </ul >

        <div>
      <button onClick={toggleDropdown}><FaBars/></button>

      <div
        ref={dropdownRef}
        id="dropdown"
        className={`z-1 ${isDropdownVisible ? '' : 'hidden'} bg-[#13131a]  divide-y divide-gray-100 rounded-lg shadow w-40 mt-40 dark:bg-gray-700`}
      >
        <ul className="text-white  spa space-y-2 py-2 mx-10">

<li className='hover:text-[#29e9bc]'><a href="#">Home</a></li>
<li className='hover:text-[#29e9bc]'><a href="#about">about</a></li>
<li className='hover:text-[#29e9bc]'><a href="#service">service</a></li>
<li className='hover:text-[#29e9bc]'><a href="#skills">skills</a></li>
<li className='hover:text-[#29e9bc]'><a href="#protfolio">protfolio</a></li>
<li className='hover:text-[#29e9bc]'><a href="#contact">contact</a></li>



</ul >
      </div>
    </div>


  

    </div>

</nav>

{/* <!--end nav--> */}


        </div>
    );
};

export default Navber;