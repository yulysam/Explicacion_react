import './styles/styles.css';
import logo from './media/logo.png';
import rhodesian from './media/rhodesian.jpg';
import borderCollie from "./media/borderCollie.jpg";

function App() {
  return (
    <div className='App'>
      <header>
        <ul className='navbar'>
          <li>
            <img src={logo} alt='imagen' className='logo' />
          </li>
          <li>
            <button className='botonGenerico mainButton'>Nuevo post</button>
          </li>
          <li>
            <div className='buscar'>
              <input placeholder='Buscar una raza' />
              <i className='fas fa-search botonGenerico iconoBusqueda'></i>
            </div>
          </li>
          <li>
            <button className='botonGenerico secondaryButton'>Login</button>
          </li>
          <li>
            <button className='botonGenerico mainButton'>Registro</button>
          </li>
        </ul>
      </header>
      <main>
        <section>
          <h1>Razas de Perros</h1>
          <ul className='breedCardContainer'>
            <cardrazasperros nombreraza ="rhodesian" imagen={rhodesian}/>
            <cardrazasperros nombreraza ="border collie" imagen ={borderCollie}/>
          </ul>
        </section>
        <section></section>
      </main>
      <footer></footer>
    </div>
  );
}

function cardrazasperros({imagen,nombreraza}){
  return (
  <li className='breedCard'>
    <div className='contenedorImagen'>
     <img src={imagen} alt={nombreraza} />
  </div>
  <span className='breedTitle'>{nombreraza}</span>
</li>
  );
}

export default App;
