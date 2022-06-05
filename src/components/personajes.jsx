import { useFetch } from "../hooks/useFetch"
import '../assets/personajes.css'

const SinglePerson = ({personaje, indx}) => {
  return (
    <div key={indx} className='caja-personaje'>
      <img className="imagen-personaje" src={personaje.image} alt="pic" />
      <div className="texto">
        <p>{personaje.name}</p>
        <p>{personaje.gender}</p>
        <p>{personaje.species}</p>
        <p>{personaje.type}</p>
      </div>
  </div>
  )
}

const Personajes = () => {

  const {response} = useFetch('https://rickandmortyapi.com/api/character/?page=19', {})

  console.log(response)

  return(
    <div className="contenedor-personajes">
      {
        response &&         
        response.map((personaje, indx) => (
          <SinglePerson personaje={personaje} indx={indx}/>
        ))
      }
    </div>
  )
}

export default Personajes