import './App.css';
import CardProvider from './components/Context/Context';
import CardsContainer from './components/CardContainer/CardsContainer';
import CardsList from './components/CardContainer/CardsList';

function App() {
  return (
    <CardProvider>
        <CardsList/>
    </CardProvider>
  );
}

export default App;
