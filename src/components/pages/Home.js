import React from "react";
import working from './images/working.png'
import linkedin from './images/linkedin.png'
import github from './images/github.png'
import resume from './images/resume1.png'
import email from './images/email.JPG'

const Home = () => (
  
    <section className="section-aboutMe">
     <div className ="row"> 
        <div class="col-md-6" > 
         <img src={working} alt="woman working" id="profpic"></img>
           <p>
              Hi and welcome to my portfolio page!  My name is Brenda and I am a QA Tester.  I graduated Metro State University of Denver with a major in CIS and a minor in Business.  After graduation I worked in the Database Administration area, and a couple of years later I took courses at Villanova Univeristy for Software Testing Principles and Practice.  I have been in that field for about 13 years and enjoy not only the detective work behind it but the various tools and technologies Testers are exposed to including SoapUI, ReadyAPI, Insomnia, Postman, SQL Developer, MySQL, MS-SQL, Oracle SOA Suite, WireShark, Axiros ACS, Linux and vSphere to name a few.
           </p>
           </div>

       <div className= "links">
       <div className= "col-md-8">
        <a href="https://www.linkedin.com/in/brenda-miller-b8414463/"><img src = {linkedin} alt="linkedin" className ="hubs" ></img></a>
        <a href="https://github.com/millerbee/"><img src = {github} alt ="github"  className ="hubs"></img></a>
        <a href="assets/Brenda_Miller_Oct2020.pdf"><img src = {resume} alt= "resume" className ="hubs" ></img></a>
        <a href="mailto:millerbgos@gmail.com"><img src = {email} alt="email" className ="hubs"></img></a>
       </div>
         </div>  
         </div>   
      </section>  
   
 
);


export default Home;
