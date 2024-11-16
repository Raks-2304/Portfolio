import reactImage from './assets/logo.avif';
import {CORE_CONCEPTS} from './data.js';
const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  let description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImage} />
      <h1>Rakshitha Narayanan</h1>
      <p>
      Hi! I'm a 3rd-year Computer Science and Engineering student with a CGPA of 9.31, focusing on full-stack development, especially the MERN stack and React. 
      I also have expertise in HTML, CSS, Java, JavaScript, C++, DSA, algorithms, and beginner-level cloud computing. 
      I’m passionate about applying technology to solve real world problems and am always learning new skills. 
      Outside of coding, I focus on fitness and personal growth. Let’s work to create something impactful!
      </p>
    </header>
  );
}

function CoreConcept (props){
  return(
   <li>
       <img src={props.image} alt={props.title}/>
       <h3>
        {props.title}
       </h3>
       <p>{props.description}</p>
   </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main> 
        <section id="core-concepts">
        <h2>Take a look at some of my projects here</h2>
        <ul>
          <CoreConcept
          title= {CORE_CONCEPTS[0].title}
          description={CORE_CONCEPTS[0].description}
          image={CORE_CONCEPTS[0].image}
          />
          <CoreConcept {...CORE_CONCEPTS[1]}
           />
          <CoreConcept
            {...CORE_CONCEPTS[2]}
          />
           <CoreConcept
           title= {CORE_CONCEPTS[3].title}
           description={CORE_CONCEPTS[3].description}
           image={CORE_CONCEPTS[3].image}
          />
        </ul>
        </section>
        
      </main>
    </div>
  );
}

export default App;