import '../styles/Home.css'
function Home() {
  return (
      <div className='container-hero'>
        <div id="hero">
          <h1>Servitec</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia optio sed, tempora neque soluta temporibus animi magni ab placeat ex dolorum totam quam, pariatur architecto quis et distinctio voluptas unde!</p>
          <button>CONTACTANOS YA!</button>
        </div>
        <div id="somos-proya">
          <div class="container">
            <div class="img-container"></div>
            <div class="texto">

                <h2>Somos <span class="color-acento">servitec!</span></h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit veritatis a autem sed dignissimos commodi, voluptas incidunt voluptatibus cum, quia neque nulla consequatur laborum accusamus, perspiciatis odio nemo minus vel!</p>
            </div>
        </div>
        </div>
        <div id="nuestros-programas">
          <div class="container">
              <h2>Nuestros servicios</h2>
              <div class="programas">
                  <div class="carta">
                      <h3>Funcion 1</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero corporis incidunt saepe qui commodi quasi neque veniam quam, aspernatur est beatae maxime animi sed reiciendis mollitia ducimus veritatis repellendus?</p>
                      <button>+ Info</button>
                  </div>
                  <div class="carta">
                      <h3>Funcion 2</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero corporis incidunt saepe qui commodi quasi neque veniam quam, aspernatur est beatae maxime animi sed reiciendis mollitia ducimus veritatis repellendus?</p>
                      <button>+ Info</button>
                  </div>
                  <div class="carta">
                      <h3>Funcion 3</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt vero corporis incidunt saepe qui commodi quasi neque veniam quam, aspernatur est beatae maxime animi sed reiciendis mollitia ducimus veritatis repellendus?</p>
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