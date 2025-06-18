import React from 'react'
import '../styles/About.css'
function About() {
  return (
    <div>
      <section id="perfil">
        <h2>Perfil Profesional</h2>
        <p><strong>Especialidad:</strong> Ingeniero Electromecánico</p>
      </section>

      <section id="habilidades">
        <h2>Habilidades</h2>
        <ul>
          <li>Instalación y arranque de hornos combinados</li>
          <li>Reparaciones y servicios correctivos</li>
          <li>Suministro e instalación de repuestos originales</li>
          <li>Montaje de equipos eléctricos según guías del fabricante</li>
          <li>Calibración de CO₂ en equipos a gas para mayor eficiencia y durabilidad</li>
        </ul>
      </section>

      <section id="equipos">
        <h2>Equipos y Marcas que Manejamos</h2>

        <h3>Hornos</h3>
        <ul>
          <li>RATIONAL (Modelos XS hasta 202)</li>
          <li>Unox</li>
          <li>Merrichef</li>
          <li>Bongart</li>
          <li>Irinox</li>
        </ul>

        <h3>Equipos de Lavado</h3>
        <ul>
          <li>Winterhalter</li>
          <li>Hobart</li>
          <li>Vulcan Ecomax (E800, E900, capota y arrastre)</li>
        </ul>

        <h3>Abatidores de Temperatura</h3>
        <ul>
          <li>Hobart</li>
          <li>Asber</li>
          <li>Unox</li>
          <li>Irinox</li>
          <li>Electrolux</li>
        </ul>
      </section>

      <section id="contacto">
        <h2>Contacto</h2>
        <p>Puedes solicitar más información o cotizar servicios al correo: <a href="mailto:ejemplo@email.com">ejemplo@email.com</a></p>
      </section>
    </div>
  )
}

export default About