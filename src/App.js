import './App.css';
import Testimonio from './components/Testimonio.js';

function App() {
  return (
    <div className="App">
      <div className='contenefor-principal'>
        <h1>Esto es lo que dicen mis personajes favoritos:</h1>
        <Testimonio 
          nombre='Rosmery Rosario'
          pais='República Dominicana'
          imagen='merlina'
          cargo='Ingeniera de Software'
          empresa='freelancer'
          testimonio='"En este artículo encontrarás una breve introducción a React. Aprenderás por qué es tan importante para el desarrollo web y por qué deberías aprenderlo. Luego encontrarás un curso gratuito de React en nuestro canal de YouTube en español con el cual puedes aprender los fundamentos de React creando cuatro proyectos interactivos paso a paso."' />
        <Testimonio 
          nombre='Izuku Midoriya'
          pais='Japón'
          imagen='deku'
          cargo='Héroe'
          empresa='la Asociación de Héroes'
          testimonio='"Izuku Midoriya tiene ojos verdes redondos, cabello verde oscuro descuidado con reflejos negros y cuatro pecas simétricas debajo de los ojos en ambas mejillas. Izuku es inicialmente muy delgado, pero gracias a diez meses de entrenamiento intenso se vuelve bastante musculoso.​ A medida que pasa el tiempo, el cuerpo de Izuku continúa volviéndose más musculoso y pronunciado. También posee cicatrices en su brazo derecho y mano luego de una pelea con Todoroki."' />
        <Testimonio 
          nombre='Hinata Shoyo'
          pais='Japón'
          imagen='hinata'
          cargo='Deportista'
          empresa='la liga juvenil de boleiball'
          testimonio='"Hinata tiene una personalidad alegre y enérgica. Se emociona fácilmente y puede ser bastante ruidoso, un rasgo solo superado por Nishinoya y Tanaka . En su mayor parte, Hinata es muy simple, lo que a veces lo lleva a tomar decisiones precipitadas. Sin embargo, también se muestra bastante observador. Es capaz de leer las señales sociales y puede ser increíblemente empático con las luchas de los demás. Como tal, a menudo dice exactamente lo que otros necesitan escuchar para impulsarse en la dirección correcta."' />
      </div>
    </div>
  );
}

export default App;
