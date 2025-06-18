import '../styles/Home.css'
function Home() {
  return (
      <div className='container-hero'>
        <div id="hero">
          <h1>Servitec</h1>
          <p>Comprometidos con el correcto funcionamiento de tus equipos, somo una emporesa especializada en
comprometidos con un servicio eficaz y responsable</p>
          <button>CONTACTANOS YA!</button>
        </div>
        <div id="somos-proya">
          <div class="container">
            <div class="img-container"></div>
            <div class="texto">
                <h2>¿Por qué los clientes nos prefieren?</h2>
                <p>Contamos con más de 30 años de experiencia brindando soluciones técnicas confiables a la industria gastronómica, lo que nos posiciona como una empresa líder en el sector.</p>
                <p>Gracias a nuestro crecimiento continuo, actualmente disponemos de más de 20 centros de servicio ubicados estratégicamente en todo México, lo que nos permite tener siempre un equipo de profesionales cerca de ti.</p>
                <br />
                <br />
                <button>About us</button>
            </div>
          </div>
          <div class="container">
            <div class="texto">
                <h2>SOMOS UNA EMPRESA SOCIALMENTE RESPONSABLE</h2>
                <p>Uno de los pilares de nuestra filosofía empresarial es asumir un compromiso genuino con la sociedad, procurar el bienestar de nuestros colaboradores y fomentar la unión familiar.</p>
                <p>Fieles a estos valores y comprometidos con generar un impacto positivo en las comunidades donde tenemos presencia, en Serv Industrial contamos con el distintivo de Empresa Socialmente Responsable.</p>
                <br />
                <br />
                <button>About us</button>
            </div>
            <div class="img-container"></div>
          </div>
        </div>
        <div id="nuestros-programas">
          <div class="container">
            <h2>Nuestros servicios</h2>
            <p>Somos una empresa enfocada en soporte técnico y suministro de refacciones para la industria gastronómica, mediante nuestra experiencia y conocimiento proveemos soluciones con el propósito de optimizar e innovar las operaciones de las cocinas en Colombias.</p>
            <div class="programas">
              <div class="carta">
                <h3>Instalación de equipos de fábrica</h3>
                <p>Realizamos la instalación profesional de maquinaria industrial directamente desde fábrica, garantizando un óptimo funcionamiento.</p>
                <button>+ Info</button>
              </div>
              <div class="carta">
                <div className='desciptions'>
                  <h3>Mantenimiento preventivo y correctivo</h3>

                  <p>Diagnosticamos, reparamos y damos mantenimiento periódico a equipos para asegurar su rendimiento y evitar fallas.</p>
                </div>
                <button>+ Info</button>
              </div>
              <div class="carta">
                <h3>Pólizas de mantenimiento</h3>
                <p>Ofrecemos planes de servicio programado que prolongan la vida útil del equipo y reducen tiempos de inactividad.</p>
                <button>+ Info</button>
              </div>  
            </div>
          </div>
        </div>

        <footer>
          <div class="container">
            <p>&copy; Servitec 2021</p>
          </div>
        </footer>
      </div>
  )
}

export default Home