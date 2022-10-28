import './App.css';
import Inputs from './components/Inputs/Inputs.jsx';
import CardProvider from './components/Context/Context';
import CardsList from './components/CardContainer/CardsList';
import Header from './components/Header/Header';

function App() {
  return (
    <CardProvider>
        <Header/>
        <Inputs/>
        <CardsList/>
    </CardProvider>
  );
}

export default App;
