import React from 'react';
import NavBar from './NavBar.js';
import {Link} from 'react-router-dom';

export const Home = () => {
    return (
        <div className='homeCripto'>
        <NavBar/>
        <div className='div1'>
      <div className='div3'>
        
        <div>
          <h1>Integrantes</h1>
          <ul className='ulInte'>
            <li><h2>De Giorgio, Luciano</h2></li>
            <li><h2>Peiteado, Gabriel</h2></li>
          </ul>
        </div>
        <div>
          <h1>Profesor</h1>
          <ul className='ulInte'>
            <li><h2>Giudici, Hernan</h2></li>
          </ul>
        </div>
        </div>
        <div className='div3-1'>
          
        <h1>Temas a tratar: </h1>
        <ul className='ulInte'>
          <li><h2><Link to='/historia'>Historia</Link></h2></li>
          <li><h2><Link to='/caracteristicas'>Características</Link></h2></li>
          <li><h2><Link to='/ventajas&desventajas'>Ventajas y desventajas</Link></h2></li>
          <li><h2><Link to='/tipos'>Tipos de Criptomonedas</Link></h2></li>
          <li><h2><Link to='/wallets'>Hardware Wallets</Link></h2></li>
          <li><h2><Link to='/minado'>Minado de Criptomonedas</Link></h2></li>
        </ul>
        </div>
    <div className='div2'>
      <img src="https://3.bp.blogspot.com/-ifuklFyTsk0/WnCYKAXEdiI/AAAAAAAAElk/LBQffs6n9zQr0LR2iK_EpRcMObOWcgtVACLcBGAs/s1600/kripto_para_birimleri_2.jpg" alt="isadfad" />

      <h4> Vision General:</h4>
      <h5> Las Criptomonedas son un tipo de tecnología cuyo crecimiento aumenta exponencialmente.</h5>
      <h4> Objetivos:</h4>
      <ul className='ulTitles'>
        <li>
          <h5>Analizar características, pro y contras de las criptomonedas.</h5>
        </li>
        <li>
          <h5>Argumentar nuestra visión del panorama actual.</h5>
        </li>
      </ul>

    </div>
    </div>
    </div>
    )
}
export default Home;