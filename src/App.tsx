import './App.css';
import { Main } from './App.style';
import { Header } from './components/Header/Header';
import { About } from './components/About/About';

function App() {
  return (
    <Main>
      <Header/>
      <About/>
    </Main>
  );
}

export default App;
