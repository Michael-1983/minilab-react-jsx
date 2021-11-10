import "bootstrap/dist/css/bootstrap.min.css";
import Greeting from "./Greeting";
import Profile from "./Profile";
// Não se esqueça de importar os componentes!

function App() {
  return (
    <div className="container mt-5 mb-5 col-6">
      <small>Interpolação de variáveis</small>
      <Greeting />
      <hr />

      <small>Imagens</small>
      <Profile />
      <hr />

      <small>Renderização de listas</small>
      <hr />

      <small>Renderização condicional</small>
      <hr />
    </div>
  );
}

export default App;
