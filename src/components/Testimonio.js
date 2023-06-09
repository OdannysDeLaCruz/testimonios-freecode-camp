// import React from 'react'
import styles from '../assets/styles/Testimonio.module.css'

function Testimonio(props) {
  return (
    <div className={styles['contenedor-testimonio']}>
      <img 
        className={styles['imagen-testimonio']}
        src={require(`../assets/images/testimonio-${props.image}.png`)}
        alt={`Foto de ${ props.name }`}/>
      <div className={styles['contenedor-texto-testimonio']}>
        <p className={styles['nombre-testimonio title']}><strong>{ props.name }</strong> en { props.location }</p>
        <p className={styles['cargo-testimonio']}>{ props.cargo } en <strong>{ props.empresa }</strong></p>
        <p className={styles['texto-testimonio']}>"{ props.text }"</p>
      </div>
    </div> 
  )
}

export default Testimonio