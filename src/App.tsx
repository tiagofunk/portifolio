import './App.css';
import { Main } from './App.style';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';
import { Formation } from './components/Formation/Formation';
import { Experiences } from './components/Experiences/Experiences';

function App() {
  return (
    <Main>
      <Header/>
      <About/>
      <Formation/>
      <Experiences/>
    </Main>
  );
}

export default App;
