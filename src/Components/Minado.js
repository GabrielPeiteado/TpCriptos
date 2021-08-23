import React from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import MinadoPh from '../assets/criptomonedas-mineriajpeg.jpeg';
export const Minado = () => {
    return (
        <>
            <NavBar/>
            <div className='wall'>
                <div className='divWalletsP'>
                    <h2>¿Que es el Minado de Criptomonedas?</h2>
                    <p className='pWall'>Se llama así al conjunto de procesos necesarios para validar y procesar las transacciones de una criptomoneda. En el caso del bitcoin, la minería consiste en validar y registrar las transacciones en la cadena de bloques. Para esto, todos los nodos de la red participan en la resolución exitosa del acertijo que supone la búsqueda del bloque, donde teniendo en cuenta un número aleatorio y aplicando una función criptográfica, se encuentre como resultado un hash que cumpla con una característica: que tenga cierta cantidad de ceros a la izquierda. Este trabajo requiere esfuerzo y poder de cómputo, lo que asegura que sea complejo escribir nuevos bloques de transacciones en el registro y así evitar que un atacante generar un bloque falso y lo añada a la red o que modifique un bloque existente.</p>
                    <p className='pWall'>No todas las criptomonedas funcionan de la misma manera, ya que la forma de minar depende del sistema que utiliza la cadena de bloques o el algoritmo de cada criptomoneda. Sin embargo, todas tienen algo en común: los mineros no realizan operaciones inútiles, sino que estas son necesarias para mantener la estabilidad y la seguridad de la red. Dado que su trabajo es tan importe, los mineros cobran una cantidad de dinero por su trabajo de minería. En el caso del bitcoin, por ejemplo, cada vez que un minero encuentra un bloque válido es recompensado con 12,5 bitcoins. El pago se realiza con monedas que se encuentran en reserva y en ese momento entran en circulación, es por esto que erróneamente se suele creer que la minería de criptomonedas consiste en generar nuevas monedas. Las monedas ya están previamente definidas, sin embargo, a través de la minería se logra que entren en circulación nuevas monedas.</p>
                </div>
                <div className='divWallets2P'>
                    <h2>Problemática del minado de criptomonedas</h2>
                    <img src={MinadoPh} hspace="5" vspace="5" alt="minado" className='minadoPH' />
                    <p className='pWall'>Según un artículo publicado por la revista Nature, el minado de criptomonedas con el hardware usado de forma constante, han llevado a un gran volumen de consumo de energía que llegaría a un pico en 2024. El 75% de la minería de Bitcoin (BTC) se realiza en China y esto podría convertirse en un problema energético, por las emisiones de carbono de la actividad. Inicialmente, los mineros usaban una CPU básica de computadoras de uso general.<br/> Luego, comenzaron a usarse más GPU (Unidad de procesamiento gráfico), con más potencia y tasas de hash (las direcciones generadas o códigos) más altas. Finalmente, se introdujeron los circuitos integrados específicos de la aplicación (ASIC que implica la segmentación de chips) que están optimizados para realizar cálculos hash.<br/> En definitiva son circuitos más potentes que la GPU. El creciente consumo de energía y los impactos ambientales de la cadena de bloques de esta criptomoneda han planteado problemas para muchos países. En este sentido, analizando los flujos de emisión de carbono de la operación de la cadena de bloques de Bitcoin en China con un modelo basado en simulación, los investigadores que trabajaron en el artículo encontraron que, sin ninguna intervención de política, se espera que el consumo de energía anual de la cadena de bloques de Bitcoin en China alcance un pico en 2024 consumiendo alrededor de 297 teravatios por hora y generando alrededor de 130 millones de toneladas métricas de emisiones de carbono. Estos números son preocupantes. La red Bitcoin consume anualmente más energía que toda la Argentina, según afirmó la Universidad de Cambridge en un estudio en el que midió la energía utilizada por el sistema de la moneda criptográfica. Al hacer una comparación del consumo de energía por países, el documento muestra que “la red Bitcoin consume 121,36 TWh mientras que el consumo argentino es de 121 TWh, ubicándose en el puesto 31° del ranking mundial de utilización de la energía”, un escalafón que es liderado por China con 5.564 TWh y los Estados Unidos con 3.902 Twh.</p>
                </div>
            </div>
            <Footer />
        </>

    )
}
export default Minado;