
import { useState } from 'react'
import './App.css'
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  const [type,settype]=useState(false);

  function handlenav(){
    settype(!type);
  }
 console.log(type);

  return (
    <>
    <nav className='fixed backdrop-blur-lg top-0 w-screen z-10'>
    <div className="grid grid-cols-3 gap-5 justify-items-center ">
      <div className='p-3' >
        <span className='flex ' ><img  className=" w-7" src="https://cdn-icons-png.flaticon.com/128/12559/12559759.png"  alt=" noimage" /> <p className='pl-3 text-white'> 𝕸𝖔𝖗𝖌𝖆𝖓</p></span>
      </div>
      <div className={ `${type?"show":"close"}  p-3`}>
        <ul  className=' flex gap-4 '>
          <li className='text-white font-bold' > <a href="#home1" >Home</a></li>
          <li className='text-white font-bold'  ><a href="#about" >About</a></li>
          <li className='text-white font-bold'  ><a href="#portfolio" >Portfolio</a></li>
          <li className='text-white font-bold' ><a href="#skills" >Skills</a></li>
          <li className='text-white font-bold' ><a href="#contact" >Contact</a></li>
        </ul>
      </div>
      <div className='p-3' > 
      
      <span className='flex text-white  gap-3' > <button className=' bg-red-700  lg:w-40 w-20 rounded  h-6 text-white '>Connect</button></span>
      </div>
      <div  id="burg" className='pt-3' > 
        <button className='bg-white'   onClick={handlenav}><GiHamburgerMenu /></button>
      </div>
    
    </div>

    </nav>
  


    <main id="home1 " className='w-screen mt-20 h-screen' >
      <div className='grid lg:grid-cols-2 text-white  sm:grid-cols-1 justify-items-center items-center '>
      <div className='lg:order-none order-1 '>
        <h1  data-aos="fade-left" data-aos-duration='1000' className="font-bold p-3 text-4xl ">Hey! my name is <span className='text-green-600'> Morgan-wen</span>  <br/> I'm a webdeveloper... </h1> <br/>
       <ul  data-aos="fade-down" data-aos-duration='2000'  className='flex gap-3 p-3'>
        <li>< img className='w-9'  src="https://cdn-icons-png.flaticon.com/128/15047/15047587.png" alt="noimage"/></li>
        <li>< img className='w-9' src="https://cdn-icons-png.flaticon.com/128/2504/2504957.png" alt="noimage"/></li>
        <li>< img className='w-9' src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="noimage"/></li>
        <li>< img style={{border:"2px solid white"}} className='w-9  rounded' src="https://cdn-icons-png.flaticon.com/128/5969/5969020.png" alt="noimage"/></li>
        <li>< img className='w-9' src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="noimage"/></li>
        <li>< img className='w-9' src="https://cdn-icons-png.flaticon.com/128/9946/9946341.png" alt="noimage"/></li>
       </ul> <br/>
        <button data-aos="fade-up" data-aos-duration='1000' className="bg-green-700 h-9 ml-3 w-32 "><a href='#' download >Download</a></button>
      </div>
      <div  className='pt-3'>
        <img id="imo" data-aos="fade-up" data-aos-duration='500' className="  lg:w-72 w-56"src="https://portfolioofdivyansh.netlify.app/images/intro-img.png\" alt="noimage"/>
      </div>

      </div>
    </main>

    <section   id ="about" className=' bg-[#0E0B16] w-screen h-screen'>
      <div className='grid lg:grid-cols-2  sm:grid-cols-1   justify-items-center items-center'>
        <div className='mt-10'><img className='lg:w-72 w-40  ' src="https://pbs.twimg.com/media/GkZP9r3XkAA3Vjh?format=jpg&name=small" alt="noimage" /></div>
        <div className='mt-10'> 
          <p data-aos="fade-down" data-aos-duration='500'  className='text-white text-4xl font-bold text-center p-6'>About me</p>
        <p  data-aos="fade-down" data-aos-duration='1000'  className='text-white text-2xl font-bold p-6  text-center'>Hi! I'm <span className='text-red-600'> Morgan-wen</span> Morgan-wen, a web developer and programmer.</p> <br/>
          <p  data-aos="fade-down" data-aos-duration='1000'  id="para" className='text-white p-6 overflow-auto md:overflow-y-scroll h-48 first-line:text-red-700 text-center'>A highly motivated and skilled Frontend Developer with a strong foundation in core web technologies, including HTML, CSS, JavaScript, and React.  Proficient in building responsive and user-friendly web applications, leveraging modern frameworks like Tailwind CSS and Bootstrap for efficient styling and layout.  Experienced in utilizing Git and GitHub for version control and collaborative development, ensuring seamless teamwork and code management.  Adept at translating design mockups and wireframes into clean, well-documented, and maintainable code.  Possesses excellent problem-solving and debugging skills, with a keen eye for detail and a commitment to delivering high-quality user experiences.  Effective communicator, fluent in Hindi and English, with a basic understanding of French.  Eager to contribute to innovative projects and continuously expand my skillset in the ever-evolving world of frontend development.</p>
          <hr/>
          <div  data-aos="fade-up" data-aos-duration='1000'  className='grid lg:grid-cols-2  sm:grid-cols-1'>
            <div className='gap-1'>
             <p className='text-white pl-3'> <span className='text-green-700'>Name</span>:divyansh</p>
             <p className='text-white pl-3'><span className='text-green-600'>Age</span>:18</p>

            </div>
            <div className='gap-1'>
            <p className='text-white pl-3'><span className='text-green-600'>From</span>:U.S.A</p>
             <p className='text-white pl-3'><span className='text-green-600'>Email</span>:morgan-wen377590@gmail.com</p>
            </div>
          </div>

        </div>
      </div>

    </section>
   
    <section id="portfolio" className='pt-20 '>
      <h1  data-aos="fade-up" data-aos-duration='1000'  className='text-white text-6xl pb-6 underline text-center font-bold'>Portfolio</h1>
      <div data-aos="fade-up"  data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 justify-items-center pt-10 items-center'>
        <div className='lg:order-none  order-1' >
          <p className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56 ' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 justify-items-center items-center pt-10'>
        <div className='lg:order-none  order-1'>
        <p  className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 justify-items-center pt-10 items-center'>
        <div className='lg:order-none  order-1'>
        <p  className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3 '>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 justify-items-center  pt-10 items-center'>
        <div className='lg:order-none  order-1'>
        <p  className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 pt-10 justify-items-center items-center'>
        <div className='lg:order-none  order-1' >
        <p  className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2  grid-cols-1 pt-10 justify-items-center items-center'>
        <div  className='lg:order-none  order-1'>
        <p className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>


      <div data-aos="fade-up" data-aos-duration='1000' className='grid lg:grid-cols-2 pt-10 grid-cols-1 justify-items-center items-center'>
        <div className='lg:order-none  order-1'>
        <p   className='text-center text-white text-4xl font-bold'>Captiz-movies</p>
          <p  className='text-center text-white p-3'>Developed "Captiz-Movies," a multi-page movie website using React, enhancing user experience with dynamic routing powered by React Router. Implemented efficient data fetching and caching with React Query, optimizing performance and simplifying asynchronous state management.  Integrated user feedback functionality, enabling users to add and delete feedback, contributing to a more interactive and engaging platform.  This project showcases proficiency in modern React development practices, including API integration, dynamic routing, and user interface design.</p>
        </div>
        <div>
          <img className='w-56' src="https://portfolioofdivyansh.netlify.app/gif/click.gif" alt="noimage" />
        </div>
      </div>

    </section>

    <section  className='p-20'> 
      <p data-aos="fade-up"  data-aos-duration='1000'  className='text-center font-bold lg:text-4xl p-5 text-white md:text-3xl text-2xl'><a href="#">Click to visit My github</a></p>

      <h2 className='text-center font-bold lg:text-5xl underline text-white md:text-3xl text-2xl m-10'>Achivements</h2>

      <div  data-aos="fade-down"  data-aos-duration='1000'className='lg:flex gap-2  grid sm:grid-cols-1'>
        <div className='flex  gap-2 '>
          <div><img className='lg:w-64 md:h-64 w-60 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQHquDOOcSvKwA/feedshare-shrink_800/feedshare-shrink_800/0/1717836671455?e=1743033600&v=beta&t=qF7lxpr12ZGU2AlIVahn_TTWCRSd0plAB34My3Hwp9k" alt="noimage" /></div>
          <div><img className='lg:w-64 md:h-64  w-60 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQF_SQ7Gi_v8xQ/feedshare-shrink_800/feedshare-shrink_800/0/1717836674124?e=1743033600&v=beta&t=litSEL5kMDEQCU_2POn0-uY7ZgjWGsRRLjJDHfWw0RY" alt="noimage" /></div>
          <div><img className='lg:w-64 w-60 lg:h-64 md:h-64 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQFIxZoDyzK3DA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717836668751?e=1743033600&v=beta&t=vSFKnSrUOzSDsBpmoqalV7qInIhfd3yG6C8W40rqyDI" alt="noimage" /></div>
          <div><img className='lg:w-64 w-60 lg:h-64 md:h-64 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQHrCXBOFhg0Fw/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717836669543?e=1743033600&v=beta&t=_w-cforqbDGF_qYEwJgzuu_w7gZ4T-1pcosrtpACvic" alt="noimage" /></div>

        </div>
        <div className='flex gap-2'>
          <div><img className='lg:w-64 md:h-64  w-60 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQF_SQ7Gi_v8xQ/feedshare-shrink_1280/feedshare-shrink_1280/0/1717836674124?e=1743033600&v=beta&t=3J7g1umpC9obfMydgiDDNfPyoYaC7oNmvAJKymL_UtY" alt="noimage" /></div>
          <div><img className='lg:w-64 md:h-64 w-60 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQG6wbHQOt2WZg/feedshare-shrink_1280/feedshare-shrink_1280/0/1717836676692?e=1743033600&v=beta&t=0SkrZI_zLo_dbMPtB0KrRikO5Z0y4OtAvCDHYZP0Vj0" alt="noimage" /></div>
          <div><img className='lg:w-64 w-60 lg:h-64 md:h-64 h-48 ' src="https://media.licdn.com/dms/image/v2/D5622AQHIo07KNutazQ/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1717836683184?e=1743033600&v=beta&t=2kkgbHT0Gwq_J9pLK5F3Pig_ENaoTdTewobHyHiC954" alt="noimage" /></div>
          <div><img className='lg:w-64 w-60 lg:h-64 md:h-64 h-48' src="https://pbs.twimg.com/card_img/1892587913629798400/D5L2qmO7?format=jpg&name=medium" alt="noimage" /></div>

        </div>
      </div>
      

    </section>

    <section id="skills" className='p-24 bg-[#0E0B16]  w-screen'>
      <h2  data-aos="fade-down"  data-aos-duration='1000' id="fil" className='text-center font-bold lg:text-6xl  text-5xl  pb-12 text-white '> Skills</h2>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-3 w-auto justify-items-center items-center ' >
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
              <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
              <p className='font-bold text-center pt-14 text-2xl'>Frontend skills</p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl '>HTML,CSS,J.S,REACT,T.S,SASS AND BOOSTRAP</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/6213/6213731.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Backend skills</p>
            </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-12 text-2xl'>NEXT.JS, POSTMAN, NODE.JS</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28'  src="https://cdn-icons-png.flaticon.com/128/270/270798.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'> verson-control</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-12 text-2xl'>GIT-BASH/GITHUB</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'>
            <img className='relative left-28'  src="https://cdn-icons-png.flaticon.com/128/3732/3732413.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Management skills</p>
               </div>
            <div className='cardback'> 
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>HEAD-BOY,C.R,HOUSE-CAPTAIN,SPEAKER...</p>
            </div>

          </div>
          
        </div>
        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/4219/4219718.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Languages skills</p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>ENGLISH(2 ACCENT), FRENCH, HINDI</p>
            </div>

          </div>
          
        </div>

        <div className='maincard'>
          <div className='card'>
            <div className='cardfront'> 
            <img className='relative left-28' src="https://cdn-icons-png.flaticon.com/128/7185/7185812.png" alt="noimage" />
            <p className='font-bold text-center pt-14 text-2xl'>Public speaking </p>
               </div>
            <div className='cardback'>
            <img className='relative left-28 pt-4'src="https://cdn-icons-png.flaticon.com/128/12294/12294398.png" alt="noimage" />
            <p className='font-bold text-center pt-11 text-2xl'>SCHOOL,COLLEGE,PUBLIC-STAGE LEVEL</p>
            </div>

          </div>
          
        </div>
       
       
      </div>

          <h2 id="fil"  data-aos="fade-down"  data-aos-duration='1000' className='lg:text-6xl  text-4xl  text-white font-bold pt-20 text-center'>Languages</h2>
      

      <div className='animate pt-6'>
        <div className='slide lg:gap-4 gap-2'>
         
          < img className ='w-40  three' src="https://www.svgrepo.com/show/373535/css.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/373705/js-official.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452092/react.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452129/vs-code.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/374061/sass.svg" alt="noimage" />
          < img className ='w-40  three' src="https://cdn-icons-png.flaticon.com/128/5968/5968672.png" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452210/git.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452207/framer.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/303293/bootstrap-4-logo.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/452207/framer.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/475654/github-color.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/374118/tailwind.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/354118/nodejs.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/354202/postman-icon.svg" alt="noimage" />
          < img className ='w-40  three' src="https://www.svgrepo.com/show/331488/mongodb.svg" alt="noimage" />
        </div>
      </div>



    </section>

   <section id="contact" className='p-24'>
    <h2 id="fil" data-aos="fade-up"  data-aos-duration='1000' className='lg:text-6xl  text-5xl underline  text-white font-bold pt-20 text-center'>Contact</h2>
    <div className=' grid lg:grid-cols-2 grid-cols-1  justify-items-center items-center pt-24'>

      <div  className=' order-1'>
      <form data-aos="fade-up"  data-aos-duration='1000'>
        <lable className="text-white text-2xl" HTMLfor="name" >Name:</lable> <br/>
        <input className=' lg:w-96  h-10 rounded w-auto p-6'  id="name" type="text" /><br/>
        <lable className="text-white text-2xl" HTMLfor="email" >Email:</lable> <br/>
        <input className='lg:w-96 h-10 rounded w-auto p-6'  id="email" type="email" /><br/>
        <label className='text-white text-2xl' HTMLfor="message" >Message:</label><br/>
        <input className='lg:w-96 h-30 rounded  w-auto p-6'  id="message" type="text" /><br/>
        <button type="submit" className=" bg-green-800 w-20 mt-4 text-white" >Submit</button>
        
        

      </form>
      </div>
      <div className=' lg:order-none '>
        <img data-aos="fade-up"  data-aos-duration='1000' className=" w-60" src="https://www.svgrepo.com/show/185543/phone-book-contacts.svg" alt="noimage" />
      </div>
     
    </div>
   </section>

   <footer className='pt-24 bg-[#2d1663] w-screen '>
   <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center items-center pb-8 '>
    <div><img className='w-24' src="https://portfolioofdivyansh.netlify.app/images/Divyansh%20Goyal%20logo%20transparent.png" alt="noimage" /></div>
    <div className='pb-4'>
      <ul  className='flex gap-2'>
        <li className='text-white font-bold'><a href="#home" >Home</a> </li>
        <li className='text-white font-bold'><a href="#about" >About</a></li>
        <li className='text-white font-bold'><a href="#portfolio" >Portfolio</a></li>
        <li className='text-white font-bold'><a href="#skills" >Skills</a></li>
        <li className='text-white font-bold'><a href="#contact" >Contact</a></li>
      </ul>
    </div>
    <div className='pb-4'>
      <ul className='flex gap-2'>
        <li><img className='w-12' src="https://cdn.dribbble.com/userupload/19914420/file/original-fa73e948d55a3424ad17c41c939c4059.gif" alt="noimage" /></li>
        <li><img className='w-10' src="https://assets-v2.lottiefiles.com/a/f62481a4-1172-11ee-aa7c-232f008dfb14/Sl4fTVnhQL.gif" alt="noimage"/></li>
        <li><img className='w-10' src="https://media.tenor.com/-QZ6G1KAOcsAAAAM/whatsapp-logo-whatsapp.gif" alt="noimage" /></li>
        <li><img className='w-10' src="https://media2.giphy.com/media/jqNPzdTTxQfOgOqpO4/giphy.gif?cid=6c09b952oiiddz5sg7ihngbaa8fgkzofk1j911s04u9su0df&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" alt="noimage" /></li>
        <li><img className='w-10' src="https://media3.giphy.com/media/XyJPNKBskIDWR3Md8K/giphy.gif?cid=6c09b952geel61ogutu5kgn3j4fkulvpqwerga1ubd519sgs&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="noimage" /></li>
        <li><img className='w-10' src="https://media1.giphy.com/media/Sj1dYtM7i9wD4ujgDt/giphy.webp?cid=ecf05e47a1442az6ajyghpg44h25ka2ely22l98bzh8360xd&ep=v1_gifs_related&rid=giphy.webp&ct=g" alt="noimage" /></li>
        <li><img className='w-10' src="https://media0.giphy.com/media/XEy1qyv7GdLpmqHEPV/giphy.webp?cid=ecf05e4766dyt67lpu6brskdvploseaxbick6ovc7f0a38m4&ep=v1_gifs_related&rid=giphy.webp&ct=g" alt="noimage" /></li>
        
      </ul>
    </div>
   </div>
   </footer>




    

      
    </>
  )
}

export default App
