import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
      //select pickert de memes
      <select>
        <option value="cart-jimmi-ensuelo">Cart jimmi en el suelo</option>
        <option value="cart-jimmi">Cart jimmi</option>
        <option value="leonardodicaprio">Leonardo dicaprio</option>
        <option value="MNM">M&M</option>
        <option value="mujer-sorprise">Mujer sorprendida</option>
        <option value="negrito-ojoabierto">Negrito ojos abiertos</option>
        <option value="negrito-saludando">Negrito saludando</option>
        <option value="pikachu">Pikachu</option>
        <option value="shek">shrek</option>
      </select>
      //input text primer linea
      <input type="text" />
      //input text segunda linea
      <input type="text" />
      //boton exportar
      <button>Exportar</button>
    </div>
  );
}

export default App;
