import styles from './Footer.module.scss';
import { useLocation } from 'react-router-dom';

function Footer () {
    const HiddenFooter =  useLocation();
    if (location.pathname === '/portfolio/') {
        return (null)
    };

    return (
        <footer className= {`${styles.footerContainer}  p-0 p-5`}>
                <p className={`${styles.footerText} text-center`}>Tous droits reservés  <br/> Baptiste Salazar <br/>© 2025
                </p>
        </footer>
    )
};
export default Footer;