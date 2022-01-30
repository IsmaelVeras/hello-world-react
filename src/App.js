import Card from './components/Card';
import './App.css';

function App() {
  
  var titulo = "Camisa Básica Pollo"

  return (
    <div className="App">
        <Card 
          title={titulo}
          description="Cor: Laranja" 
          price="R$ 25,40"
          promotion={true}
        />
    </div>
  );
}

export default App;
