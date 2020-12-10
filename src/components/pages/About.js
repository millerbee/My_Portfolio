import React from "react";
// import About from "./pages/About";
// import React from "react-router-dom";
import weather from './images/Weather.png';
import adopt from './images/Adopt.png';
import clocks from './images/Clocks2.png';
import books from './images/books.JPG'
import burgers from './images/burgers.JPG'
import quiz from './images/Quiz2.png'
import notes from './images/notes.JPG'

const About = () => (
  <div>
    
     <section className="section-portfolio">
        <div className="row" id="images">
          <figure>
          <img src={weather} alt ="girl with umbrella" className="img-responsive" ></img>
          <figcaption><a href = "https://millerbee.github.io/My-Weather-Dashboard/"  className = "caption">Weather Forecast</a></figcaption>
          </figure>

          <figure>
          <img src={adopt} alt ="paw heart" className="img-responsive"></img>
          <figcaption><a href = "https://millerbee.github.io/Class_Project_1/"  className = "caption">Pet Page</a></figcaption>
          </figure>

            <figure>
            <img src={clocks}  alt = "Clocks" className="img-responsive"></img>
            <figcaption> <a href="https://millerbee.github.io/Daily_Planner/" className = "caption">Day Planner </a></figcaption>
            </figure>
  
            <figure>
            <img src={books} alt ="Code Quiz" className="img-responsive"></img>
            <figcaption><a href = "https://intense-earth-81966.herokuapp.com/" className = "caption">Bookshelf</a></figcaption>
            </figure>
        </div>
     </section>   
  

 

     <section className="section-portfolio1" >
        <div className="row" id="images">
            
                   <figure>
                    <img src= {burgers} alt ="Cheeseburgers" className="img-responsive" ></img>
                    <figcaption><a href = "https://lit-everglades-83231.herokuapp.com/" target="_blank" class = "caption">Burgers!</a></figcaption>
                    </figure>

                    <figure>
                        <img src={quiz} alt ="Code Quiz" class="img-responsive"></img>
                        <figcaption><a href = "https://millerbee.github.io/Code_Quiz/" target="_blank" class = "caption">Code Quiz</a></figcaption>
                        </figure>

                    <figure>
                        <img src= {notes} alt ="Ink and Quill" class="img-responsive"></img>
                        <figcaption><a href = "https://fierce-coast-18964.herokuapp.com/ " target="_blank" class = "caption">Notes</a></figcaption>
                        </figure>
             </div>
   </section>
</div>

);



export default About;
