import './assets/styles/App.css';
import Testimonio from './components/Testimonio';
import Example from './components/Example';

function App() {
  const testimonios = [
    {
      name: "Shawn Wang",
      image: "shawn",
      location: "Singapur",
      cargo: "Ingeniero de Software",
      empresa: "Amazon",
      text: "Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitasen freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
    },
    {
      name: "Sarah Chima",
      image: "sarah", 
      location: "Nigeria", 
      cargo: "Ingeniera de Software", 
      empresa: "ChatDesk",
      text: "freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
    },
    {
      name: "Emma Bostian", 
      image: "emma", 
      location: "Suecia", 
      cargo: "Ingeniera de Software", 
      empresa: "Spotify",
      text: "Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
    }
  ]
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Example />
        {
          testimonios.map( testimonio => {
            return (
              <Testimonio 
                key={testimonio.name}
                name={testimonio.name} 
                image={testimonio.image} 
                location={testimonio.location} 
                cargo={testimonio.cargo} 
                empresa={testimonio.empresa} 
                text={testimonio.text} 
              />      
            )      
          })
        }
      </div>
    </div>
  );
}

export default App;
