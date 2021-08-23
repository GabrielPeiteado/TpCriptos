import React from 'react';
import NavBar from './NavBar.js';
import Paginate from './Paginate.js';
import Footer from './Footer.js';

export const Wallets = () => {
    return (
        <>
            <NavBar/>
            <div className='wall'>
                <div className='divWallets'>
                    <h2>¿Que son las Hardware Wallets?</h2>
                    <p className='pWall'>Los hardware wallets, son dispositivos físicos que operan como monederos sin conexión a Internet y mantienen las claves privadas almacenadas de forma segura dentro de ellos. Esto es lo que se conoce como Hardware Wallets, que también forman parte de las Cold Wallets por su condición de almacenamiento en frío, al no permanecer conectadas a la blockchain o al internet.</p>
                    <p className='pWall'>Se tratan de dispositivos diseñados especialmente para este objetivo, pequeñas unidades HSM (Módulos Hardware de Seguridad, en inglés) con seguridad de grado militar que permiten generar claves privadas y que estas nunca salgan del dispositivo. Además, si el dispositivo intenta ser manipulado físicamente con el objetivo de acceder a sus claves privadas, este se “suicida” eliminando por completo las claves.</p>
                    <p className='pWall'>Estas representan una de las opciones más seguras y cómodas del mercado a la hora de almacenar en frío grandes cantidades de criptomonedas. Esto por el hecho de que protegen la seguridad de las claves privadas dentro de sí pero permiten ser utilizados cómodamente, normalmente vía USB. La mayoría de ellas emplea una especie de chip de seguridad donde se retienen las claves y no se pueden transferir jamás fuera del dispositivo.</p>
                    <p className='pWall'>Los hardware wallets solo tienen dos funciones principalmente: <br/>
                    <li>Generar claves privadas</li>
                    <li>Firmar con esas claves un contenido que se le mande</li>
                    <br/>
                    De esta forma la clave privada jamás sale del aparato ni por un segundo. Suelen contar con una pantalla que permita verificar lo que se está autorizando a firmar para evitar hackeos por intercepción de la transacción.<br/><br/>
                    Son compactos y portátiles, por lo que puede llevarse a cualquier parte o mantenerse en un lugar seguro. Para gestionar sus criptomonedas, sólo debe conectarlas a un ordenador o smartphone mediante un puerto USB, introducir su contraseña y hacer sus envíos. En el dispositivo que estemos empleando, se requiere de un software para gestionarlas. Luego, al momento de desconectar la wallet, ésta se apaga automáticamente.<br/><br/>
                    El nivel de seguridad que ofrecen estos dispositivos es muy alto y confiable. El proceso de validación de las operaciones se realiza dentro del mismo dispositivo hardware y no en el ordenador o smartphone al que son conectadas. Por lo que se puede firmar una operación sin necesidad de las claves privadas salgan del dispositivo.</p>
                </div>
                <div className='divWallets2'>
                    <h2>Características de las hardware wallets:</h2>
                    <p className='pWall'>
                        <li>Son inmunes a los ataques de virus y malware que puede infectar el dispositivo y robar las claves privadas. Por lo que permiten el almacenamiento de grandes cantidades de criptomonedas de forma segura y eficiente.</li>
                        <li>El control absoluto sobre las claves privadas, y por tanto, de los fondos, lo posee el usuario. Por lo que no se requiere de confianza en terceras personas para el manejo de las claves y la gestión de las criptomonedas; como ocurre con las wallets online o hot wallets.</li>
                        <li>Las claves privadas son generadas de forma aleatoria y sin patrones a través de un Random Number Generator (RNG).</li>
                        <li>Las hardware wallets suelen poseer medios de comunicación limitados, con lo que buscan maximizar la seguridad.</li>
                        <li>Los software de las hardware wallets son de código abierto en su mayoría. Esto permite al usuario y la comunidad, validar como operan y verificar los procesos de seguridad que implementan.</li>
                        <li>Igualmente las hardware wallets permiten añadir capas de seguridad extra. Por ejemplo la configuración de PIN a elección o la autenticación de 2 factores (2FA). Estos métodos impiden que un tercero haga uso del dispositivo en caso de robo o pérdida.</li>
                        <li>Las claves son generadas y mantenidas dentro del mismo dispositivo hardware. Nunca salen al ordenador. Por lo que se mantienen seguras y protegidas.
</li>
                        <li>Son compatibles con la mayoría de los sistemas operativos disponibles.
</li>
                        <li>Poseen una semilla que permite restaurar las claves y recuperar los fondos.</li>
                        <li>La adquisición de hardware wallets requiere de una cierta inversión. Existen dispositivos que van desde $6.000 hasta $25.000 o incluso más.</li>
                    </p>

                </div>
            </div>
            <Footer />
        </>

    )
}
export default Wallets;