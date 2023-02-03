import './App.css';
import { Main } from './App.style';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Formation } from './components/Formation/Formation';
import { Experiences } from './components/Experiences/Experiences';
import { Certificates } from './components/Certificates/Certificates';
import { Awards } from './components/Awards/Awards';
import { Tecnologies } from './components/Tecnologies/Tecnologies';
import { Contact } from './components/Contact/Contact';
import { Projects } from './components/Projects/Projects';

function App() {
  return (
    <Main>
      <Header/>
      <About/>
      <Contact/>
      <Projects/>
      <Tecnologies/>
      <Formation/>
      <Experiences/>
      <Awards/>
      <Certificates/>
    </Main>
  );
}

export default App;
