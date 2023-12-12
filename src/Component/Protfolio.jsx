import React from 'react';
import img1 from '../assets/ruby.png'
import img2 from '../assets/blog.png'
import img3 from '../assets/brand.png'

const Protfolio = () => {
    return (
        <>
        <div className='max-w-screen-xl mx-auto '>

        <div className="container protfolio_container" id="protfolio">

        <h2 className="border_bottom  text-3xl ">Leatest Projects</h2>

            <div className='grid lg:grid-cols-3 gap-4 grid-cols-1 my-10 lg:px-0 px-10 '>

       {/* card-1 */}

       <a href="#" className="group relative border-2 border-white block bg-black">
  <img
    alt="Developer"
    src={img1} 
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">

  
    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
            <div className='flex jus justify-center gap-2 items-center'>


            <a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://ruby-medical-camps.surge.sh/"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Demo
  </span>
</a>


<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Ruby-Medical-Camp-Client"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Font Code
  </span>
</a>

<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Ruby-Medical-Camp-Server"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Server Code
  </span>
</a>

            </div>
            <p className="sm:text-xl mt-4 font-medium uppercase tracking-widest text-white">Ruby-Medical-Camp
</p>

         <h1>
         This is a medical camp management website. This website has roles of all three. Here participants can join different camps. Can register for upcoming Camps.Organizers can add new Camps from their dashboard. And he can manage them.Professionals can make wishes in the upcoming times
         </h1>
        </p>
      </div>
    </div>
  </div>
</a>


         {/* card-1 */}

         <a href="#" className="group relative border-2 border-white block bg-black">
  <img
    alt="Developer"
    src={img2} 
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">

  
    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
            <div className='flex jus justify-center gap-2 items-center'>


            <a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://phsquarespace.surge.sh/"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Demo
  </span>
</a>


<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Blog-Client-Side"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Font Code
  </span>
</a>

<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Blog-Server-Side"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Server Code
  </span>
</a>

            </div>
            <p className="sm:text-xl mt-4 font-medium uppercase tracking-widest text-white">Squarespace 
</p>

         <h1>
         This is a blog website. Here the user can read the blogs. Available Blogs can be viewed in Available Blog Station and can be sorted and filtered according to the name of the blog as desired. And user can update and manage blogs post by visiting his dashboard
         </h1>
        </p>
      </div>
    </div>
  </div>
</a>
     {/* card-1 */}

     <a href="#" className="group relative border-2 border-white block bg-black">
  <img
    alt="Developer"
    src={img3} 
    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
  />

  <div className="relative p-4 sm:p-6 lg:p-8">

  
    <div className="mt-32 sm:mt-48 lg:mt-64">
      <div
        className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
      >
        <p className="text-sm text-white">
            <div className='flex jus justify-center gap-2 items-center'>



            <a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://bd-committee.surge.sh/"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Demo
  </span>
</a>


<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Brand-Shop-Client"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Font Code
  </span>
</a>



<a
  className="group inline-block rounded-full bg-gradient-to-r from-[#13131a] via-[#13131a] to-[#29e9bc] p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
  href="https://github.com/ashikurbd71/Brand-Shop-Server"
>
  <span
    className="block rounded-full bg-white px-4 py-3 text-sm font-medium group-hover:bg-transparent"
  >
   Server Code
  </span>
</a>

            </div>
            <p className="sm:text-xl mt-4 font-medium uppercase tracking-widest text-white">Bd-Shop
</p>

         <h1>
         This is a Simple e-commerce website. Here the products of various brands have been shown. Different brands can add their products. And he can delete and update them later. Users can see the products of their choice. You can buy it at will. The products he buys will be added to the add to card section.
         </h1>
        </p>
      </div>
    </div>
  </div>
</a>


            </div>
            </div>
        </div>
        </>
    );
};

export default Protfolio;