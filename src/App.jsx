import AboutMe from "./Sections/AboutMe";
import ContactMe from "./Sections/ContactMe";
import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Cursor from "./Cursor";
import Where from "./Sections/Where";

function App() {

  return (<>
    <div className=' '>
      {/* <Cursor /> */}
      <div id="Home"><Hero /></div>
      <div id="AboutMe"><AboutMe /></div>
      <Where />
      <div id="Projects"><Projects /></div>
      <div id="Skills"><Skills /></div>
      <div id="ContactMe"><ContactMe /></div> 
    </div>
  </>);
}

export default App
