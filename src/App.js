import './App.css';
import Heroe from './componentes/heroes';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Heroes de DC</h1>
        <Heroe
        nombre='Flash'
        imagen='flash'
        cargo='Superheroe'
        testimonio='Flash es el nombre de varios superhéroes ficticios que aparecen en los cómics estadounidenses publicados por DC Comics. '/>
        <Heroe
        nombre='Wonder Woman'
        imagen='wonderWoman'
        cargo='Superheroe'
        testimonio='Es una princesa guerrera de las Amazonas, pueblo ficticio basado en el de las amazonas de la mitología griega.'/>
        <Heroe
        nombre='Batman'
        imagen='batman'
        cargo='Superheroe'
        testimonio='Batman es un personaje de cómic creado por los estadounidenses Bob Kane y Bill Finger, ​ y propiedad de DC Comics. Apareció por primera vez en la historia titulada «El caso del sindicato químico» de la revista Detective Comics N.º 27, lanzada por la editorial National Publications el 30 de marzo de 1939.'/>
      </div>
    </div>
  );
}

export default App;
