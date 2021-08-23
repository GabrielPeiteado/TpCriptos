import React from 'react'
import logoGabi from '../assets/LOGO EN CREMITA.png'
export const Footer = () => {
    return (
        <div className='footerGen'>
        <div className='footer1'>
            <img src={logoGabi} alt="logo" className='logogabi' />
        </div>
            <p className='developedBy'>&copy; 2021 Developed by Gabriel Peiteado</p>
            <div className='footer'>
                <h1 className='integrantesFooter'>Peiteado, Gabriel</h1>
                <h1 className='integrantesFooter'>De Giorgio, Luciano</h1>
                <h1 className='integrantesFooter'>Villagra, Tomás</h1>
            </div>
        </div>
    )
}
export default Footer;