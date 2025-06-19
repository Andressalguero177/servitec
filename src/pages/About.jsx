import React from 'react';
import '../styles/About.css'; // Usa el mismo archivo o crea uno nuevo si prefieres
import responsabilidadImg from '../assets/Persona.png'; // Asegúrate de tener esta imagen
import responsabilidadImg2 from '../assets/hornos-industriales.jpeg';

function Responsabilidad() {
  return (
    <div id="about-responsabilidad">
      <div className="about-container">
        
        {/* <div id='responsive-img' className="about-image">
          <img src={responsabilidadImg} alt="Responsabilidad social empresarial" />
        </div> */}

        <div className="about-text">
          <h2>Somos una Empresa Socialmente Responsable</h2>
          <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
          <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
           <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
        </div>
        
        <div id='desktop-img' className="about-image">
          <img src={responsabilidadImg} alt="Responsabilidad social empresarial" />
        </div>
        
      </div>
      <div className="about-container2">
        
        <div className="about-text">
          <h2>Somos una Empresa Socialmente Responsable</h2>
          <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
          <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
        </div>
        
      </div>    
      <div className="about-container3">
       
        <div className="about-image">
          <img src={responsabilidadImg2} alt="Responsabilidad social empresarial" />
        </div>
        
        <div className="about-text">
          <h2>Somos una Empresa Socialmente Responsable</h2>
          <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
          <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
        </div> 
        
      </div><div className="about-container3">
       
        <div className="about-image">
          <img src={responsabilidadImg2} alt="Responsabilidad social empresarial" />
        </div>
        
        <div className="about-text">
          <h2>Somos una Empresa Socialmente Responsable</h2>
          <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
          <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
        </div> 
        
      </div>
      <div className='about-btn' >
        <button>Contactanos</button>
      </div>
    </div>
  );
}

export default Responsabilidad;
