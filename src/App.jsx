import './App.css';
import ButtonStarWars from './components/ButtonStarWars';
import { FaEmpire, FaRebel, FaMandalorian, FaJournalWhills, FaJediOrder, FaSith } from 'react-icons/fa';
import { GiDeathStar } from 'react-icons/gi';

function App() {
  return (
    <main>
      <div>
        <ButtonStarWars>
          <FaRebel />
            Rebel
          <FaRebel />
        </ButtonStarWars>
        <ButtonStarWars>
          <FaEmpire />
            Empire
          <FaEmpire />
        </ButtonStarWars>      
        <ButtonStarWars>
          <FaMandalorian />
            Mandalorian
          <FaMandalorian />
        </ButtonStarWars>
      </div>  
      <div>
        <ButtonStarWars>
          <FaJournalWhills />
            Journal of the Whills
          <FaJournalWhills />
        </ButtonStarWars>
      </div>
      <div>  
        <ButtonStarWars>
          <FaJediOrder />
            Jedi Order
          <FaJediOrder />
        </ButtonStarWars>
        <ButtonStarWars>
          <FaSith />
            Sith
          <FaSith />
        </ButtonStarWars>     
        <ButtonStarWars>
          <GiDeathStar />
            Death Star
          <GiDeathStar />
        </ButtonStarWars>  
      </div>          
    </main>
  )
}

export default App